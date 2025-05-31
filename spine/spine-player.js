(function(){// 全局配置
const spine_model_path = "/spine/models/";
var MODELS = [ // 模型列表
    "build_char_017_huang_witch_5",
    "build_char_017_huang", // 可用模型列表
	"build_char_017_huang_as_1",
	"build_char_1040_blaze2",
];
var DEFAULT_ANIMATION = "Relax"; // 默认动画
var SKIN_NAME = "default"; // 皮肤名称
var PREMULTIPLIED_ALPHA = true; // 是否启用 Premultiplied Alpha（请注意，自《明日方舟》v2.1.41 起，新增的模型在渲染时需要禁用 Premultiplied Alpha，否则可能导致Alpha图层纹理异常。）
var NUM_SKELETONS = 1; // 渲染的骨架数量
var SCALE = 0.4; // 缩放比例
var RANDOM_MODEL = true; // 是否启用随机模型

var lastFrameTime = Date.now() / 1000;
var canvas, gl, shader, batcher, mvp, assetManager, skeletonRenderer, debugRenderer, shapes;
var skeletons = [];
var activeSkeleton; // 当前活动的骨架
var isPlayingDefaultAnimation = true; // 是否正在播放默认动画
var availableAnimations = []; // 模型支持的动作列表
var isUninterruptible = false; // 是否正在播放无法被打断的动作
var currentAnimation = DEFAULT_ANIMATION; // 当前正在播放的动作

function init() {
    canvas = document.getElementById("spine-canvas");
    canvas.width = 300;
    canvas.height = 300;

    // 初始化 WebGL 上下文
    var config = { alpha: true, premultipliedAlpha: PREMULTIPLIED_ALPHA };
    gl = canvas.getContext("webgl", config) || canvas.getContext("experimental-webgl", config);
    if (!gl) {
        alert('WebGL is unavailable.');
        return;
    }

    // 创建着色器、批处理器和 MVP 矩阵
    shader = spine.webgl.Shader.newTwoColoredTextured(gl);
    batcher = new spine.webgl.PolygonBatcher(gl);
    mvp = new spine.webgl.Matrix4();

    // 初始化渲染器和调试渲染器
    skeletonRenderer = new spine.webgl.SkeletonRenderer(gl);
    skeletonRenderer.premultipliedAlpha = PREMULTIPLIED_ALPHA; // 设置预乘 Alpha
    debugRenderer = new spine.webgl.SkeletonDebugRenderer(gl);
    debugRenderer.drawRegionAttachments = true;
    debugRenderer.drawBoundingBoxes = true;
    debugRenderer.drawMeshHull = true;
    debugRenderer.drawMeshTriangles = true;
    debugRenderer.drawPaths = true;

    // 初始化资源管理器
    assetManager = new spine.webgl.AssetManager(gl);

    // 随机选择模型
    activeSkeleton = RANDOM_MODEL ? MODELS[Math.floor(Math.random() * MODELS.length)] : MODELS[0];

    // 加载资源
    assetManager.loadBinary(spine_model_path + activeSkeleton + ".skel"); // 加载 .skel 文件
    assetManager.loadText(spine_model_path + activeSkeleton + ".atlas");
    assetManager.loadTexture(spine_model_path + activeSkeleton + ".png");

    // 添加点击事件监听器
    var widget = document.getElementById("spine-widget");
    widget.addEventListener("click", onClick);

    requestAnimationFrame(load);
}

function onClick() {
    // 如果正在播放无法被打断的动作，则忽略点击
    if (isUninterruptible) return;

    if (availableAnimations.length > 0) {
        // 过滤掉当前正在播放的动作（interact 和 special 除外）
        var availableActions = availableAnimations.filter(anim =>
            anim !== currentAnimation || anim === "interact" || anim === "special"
        );

        // 随机选择一个支持的动作
        var randomAnimation = availableActions[Math.floor(Math.random() * availableActions.length)];

        // 判断是否需要循环播放
        var shouldLoop = ["Sleep", "Sit", "Move"].includes(randomAnimation);

        // 判断是否是无法被打断的动作
        isUninterruptible = ["interact", "special"].includes(randomAnimation);

        // 切换到点击触发的动画
        for (var i = 0; i < skeletons.length; i++) {
            var state = skeletons[i].state;
            state.setAnimation(0, randomAnimation, shouldLoop); // 根据 shouldLoop 决定是否循环播放

            // 如果不是循环播放的动作，则在播放完成后回到默认动画
            if (!shouldLoop) {
                state.addAnimation(0, DEFAULT_ANIMATION, true, 0); // 播放完成后回到默认动画
            }
        }

        // 更新当前正在播放的动作
        currentAnimation = randomAnimation;
        isPlayingDefaultAnimation = false;
    }
}

function load() {
    if (assetManager.isLoadingComplete()) {
        // 加载骨架数据
        for (var i = 0; i < NUM_SKELETONS; i++) {
            var skeletonData = loadSkeleton(activeSkeleton, DEFAULT_ANIMATION, PREMULTIPLIED_ALPHA, SKIN_NAME);
            skeletons.push(skeletonData);
        }
        requestAnimationFrame(render);
    } else {
        requestAnimationFrame(load);
    }
}

function loadSkeleton(name, initialAnimation, premultipliedAlpha, skin) {
    if (skin === undefined) skin = "default";

    // 加载纹理图集
    var atlas = new spine.TextureAtlas(assetManager.get(spine_model_path + name + ".atlas"), function(path) {
        return assetManager.get(spine_model_path + path);
    });

    // 创建附件加载器
    var atlasLoader = new spine.AtlasAttachmentLoader(atlas);

    // 使用 SkeletonBinary 加载 .skel 文件
    var skeletonBinary = new spine.SkeletonBinary(atlasLoader);
    skeletonBinary.scale = SCALE; // 设置缩放比例
    var skeletonData = skeletonBinary.readSkeletonData(assetManager.get(spine_model_path + name + ".skel"));

    // 获取模型支持的动作列表
    availableAnimations = skeletonData.animations.map(anim => anim.name);

    // 检查默认动画是否存在
    if (!availableAnimations.includes(DEFAULT_ANIMATION)) {
        DEFAULT_ANIMATION = availableAnimations[0]; // 使用第一个动作作为默认动作
    }

    // 创建骨架和动画状态
    var skeleton = new spine.Skeleton(skeletonData);
    skeleton.setSkinByName(skin);
    skeleton.setToSetupPose();
    skeleton.updateWorldTransform();

    // 设置模型的初始位置
    skeleton.x = 0; // 水平居中
    skeleton.y = -100; // 向下偏移 100 像素

    var animationStateData = new spine.AnimationStateData(skeleton.data);
    var animationState = new spine.AnimationState(animationStateData);
    animationState.setAnimation(0, DEFAULT_ANIMATION, true);

    // 监听动画完成事件
    animationState.addListener({
        complete: function(entry) {
            // 如果当前动画不是循环播放的动作，则回到默认动画
            if (!["Sleep", "Sit", "Move"].includes(entry.animation.name)) {
                isPlayingDefaultAnimation = true;
                currentAnimation = DEFAULT_ANIMATION;
            }

            // 如果当前是无法被打断的动作，则重置标志
            if (["interact", "special"].includes(entry.animation.name)) {
                isUninterruptible = false;
            }
        }
    });

    // 返回骨架和动画状态
    return { skeleton: skeleton, state: animationState };
}

function render() {
    var now = Date.now() / 1000;
    var delta = now - lastFrameTime;
    lastFrameTime = now;

    // 限制 delta 的最大值，避免跳帧
    if (delta > 0.1) delta = 0.1;

    // 调整画布大小
    resize();

    // 清除画布
    gl.clearColor(0, 0, 0, 0); // 设置背景颜色
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 设置混合模式
    gl.enable(gl.BLEND);
    gl.blendFunc(PREMULTIPLIED_ALPHA ? gl.ONE : gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // 更新并渲染每个骨架
    for (var i = 0; i < skeletons.length; i++) {
        var state = skeletons[i].state;
        var skeleton = skeletons[i].skeleton;

        // 更新动画状态
        state.update(delta);
        state.apply(skeleton);
        skeleton.updateWorldTransform();

        // 绑定着色器并设置 MVP 矩阵
        shader.bind();
        shader.setUniformi(spine.webgl.Shader.SAMPLER, 0);
        shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values);

        // 渲染骨架
        batcher.begin(shader);
        skeletonRenderer.draw(batcher, skeleton);
        batcher.end();

        shader.unbind();
    }

    requestAnimationFrame(render);
}

function resize() {
    var w = canvas.width;
    var h = canvas.height;

    if (canvas.width != w || canvas.height != h) {
        canvas.width = w;
        canvas.height = h;
    }

    // 更新 MVP 矩阵
    mvp.ortho2d(-(w / 2) - 20, 0 - 150, w, h);  // 这里需要根据模型的动作进行合理修改
    gl.viewport(0, 0, w, h);
}

// 初始化
init();})();
