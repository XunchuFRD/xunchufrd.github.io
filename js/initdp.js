// 全局播放器实例
let globalPlayer = null;
const defcover = "/images/lty.jpg";

// 初始化播放器
function initPlayer() {
  if (!globalPlayer) {
    globalPlayer = new APlayer({
      container: document.getElementById('aplayerallpages'),
      fixed: true,
      autoplay: false,
      theme: '#FADFA3',
      loop: 'all',
      order: 'random',
      preload: 'auto',
      volume: 0.7,
      mutex: true,
      lrcType: 0,
      audio: [{name: '沙丁鱼从地里钻了出来',artist: 'UTAU',url: '/music/【UTAU】沙丁鱼从地里钻了出来.mp3',cover:defcover},
        {name: '拔剑定乾坤',artist: '诗岸',url: '/music/拔剑定乾坤-诗岸.mp3',cover:defcover},
        {name: '半生雪',artist: '洛天依',url: '/music/半生雪-洛天依.mp3',cover:defcover},
        {name: '半壶纱',artist: '洛天依',url: '/music/半壶纱-洛天依.mp3',cover:defcover},
        {name: '黍x好字唯之',artist: '海伊',url: '/music/【明日方舟_忘川风华录】稻花清香，禾下乘凉.mp3',cover:defcover},
        {name: '壁上观',artist: '洛天依',url: '/music/壁上观-洛天依.mp3',cover:defcover},
        {name: '不老不死',artist: '洛天依',url: '/music/不老不死-洛天依.mp3',cover:defcover},
        {name: '朝霞与晚霞都消失不见',artist: '洛天依',url: '/music/朝霞与晚霞都消失不见.mp3',cover:defcover},
        {name: '春风来',artist: '洛天依',url: '/music/春风来-洛天依.mp3',cover:defcover},
        {name: '春庭雪',artist: '洛天依',url: '/music/春庭雪-洛天依.mp3',cover:defcover},
        {name: '赐我',artist: '洛天依',url: '/music/赐我-洛天依.mp3',cover:defcover},
        {name: '大哉乾元',artist: '洛天依',url: '/music/大哉乾元-洛天依.mp3',cover:defcover},
        {name: '黛眉',artist: '洛天依',url: '/music/黛眉-洛天依.mp3',cover:defcover},
        {name: '盗将行',artist: '洛天依&言和',url: '/music/盗将行-洛天依&言和.mp3',cover:defcover},
        {name: '道琼斯指数线(来起舞吧)',artist: '星尘infinity',url: '/music/道琼斯指数线(来起舞吧)-星尘infinity.mp3',cover:defcover},
        {name: '东方红回旋于夜空',artist: '洛天依',url: '/music/东方红回旋于夜空-洛天依.mp3',cover:defcover},
        {name: '反方向的钟',artist: '洛天依',url: '/music/反方向的钟-洛天依.mp3',cover:defcover},
        {name: '风催雨',artist: '洛天依&乐正绫',url: '/music/风催雨-洛天依.mp3',cover:defcover},
        {name: '冠世一战',artist: '洛天依',url: '/music/冠世一战-洛天依&乐正绫.mp3',cover:defcover},
        {name: '红马',artist: '乐正绫',url: '/music/红马-乐正绫.mp3',cover:defcover},
        {name: '红线牵',artist: '洛天依',url: '/music/红线牵-洛天依.mp3',cover:defcover},
        {name: '極楽浄土',artist: '乐正绫',url: '/music/極楽浄土-洛天依.mp3',cover:defcover},
        {name: '寄明月',artist: '乐正绫',url: '/music/寄明月-乐正绫.mp3',cover:defcover},
        {name: '精卫',artist: '洛天依',url: '/music/精卫-洛天依.mp3',cover:defcover},
        {name: '镜中渊',artist: '洛天依&乐正绫',url: '/music/镜中渊-洛天依&乐正绫.mp3',cover:defcover},
        {name: '九九八十一',artist: '洛天依&乐正绫',url: '/music/九九八十一-乐正绫 feat.洛天依.mp3',cover:defcover},
        {name: '绝体绝命',artist: '洛天依',url: '/music/绝体绝命-洛天依.mp3',cover:defcover},
        {name: '落了白',artist: '洛天依',url: '/music/落了白-洛天依.mp3',cover:defcover},
        {name: '芒种',artist: '洛天依',url: '/music/芒种-洛天依.mp3',cover:defcover},
        {name: '那个人的离别配信',artist: '星尘infinity',url: '/music/那个人的离别配信-星尘infinity.mp3',cover:defcover},
        {name: '南风',artist: '洛天依',url: '/music/南风-洛天依.mp3',cover:defcover},
        {name: '你若三冬',artist: '洛天依',url: '/music/你若三冬-洛天依.mp3',cover:defcover},
        {name: '拼凑的断音',artist: '乐正绫',url: '/music/拼凑的断音-乐正绫.mp3',cover:defcover},
        {name: '起风了',artist: '洛天依',url: '/music/起风了-洛天依.mp3',cover:defcover},
        {name: '千本樱×巴勒斯坦',artist: '洛天依',url: '/music/千本樱×巴勒斯坦-洛天依.mp3',cover:defcover},
        {name: '千里邀月',artist: '乐正绫',url: '/music/千里邀月-乐正绫.mp3',cover:defcover},
        {name: '牵丝戏',artist: '洛天依',url: '/music/牵丝戏-洛天依.mp3',cover:defcover},
        {name: '青花瓷',artist: '洛天依',url: '/music/青花瓷-洛天依.mp3',cover:defcover},
        {name: '青鸟来归',artist: '洛天依',url: '/music/青鸟来归-洛天依.mp3',cover:defcover},
        {name: '青丝',artist: '洛天依',url: '/music/青丝-洛天依.mp3',cover:defcover},
        {name: '权御天下',artist: '洛天依',url: '/music/权御天下-洛天依.mp3',cover:defcover},
        {name: '如果只转身后退就能回到那个夏天',artist: '诗岸',url: '/music/如果只转身后退就能回到那个夏天-诗岸.mp3',cover:defcover},
        {name: '弱水三千',artist: '洛天依',url: '/music/弱水三千-洛天依.mp3',cover:defcover},
        {name: '世末歌者',artist: '乐正绫',url: '/music/世末歌者-乐正绫.mp3',cover:defcover},
        {name: '世末积雨云',artist: '洛天依',url: '/music/世末积雨云-洛天依.mp3',cover:defcover},
        {name: '霜雪千年',artist: '洛天依&乐正绫',url: '/music/霜雪千年-洛天依&乐正绫.mp3',cover:defcover},
        {name: '苏东与红旗',artist: '洛天依',url: '/music/苏东与红旗-洛天依.mp3',cover:defcover},
        {name: '太阳系迪斯科【ナユタン星人】',artist: '初音未来',url: '/music/太阳系迪斯科【ナユタン星人】-初音未来.mp3',cover:defcover},
        {name: '探窗',artist: '洛天依&乐正绫',url: '/music/探窗-洛天依&乐正绫.mp3',cover:defcover},
        {name: '探故知',artist: '洛天依&乐正绫',url: '/music/探故知-洛天依&乐正绫.mp3',cover:defcover},
        {name: '唐人恋曲',artist: '洛天依',url: '/music/唐人恋曲-洛天依.mp3',cover:defcover},
        {name: '万山载雪',artist: '洛天依',url: '/music/万山载雪-洛天依.mp3',cover:defcover},
        {name: '期待的不是雪',artist: '洛天依',url: '/music/我期待的不是雪-洛天依.mp3',cover:defcover},
        {name: '无虞生花',artist: '洛天依',url: '/music/无虞生花-洛天依.mp3',cover:defcover},
        {name: '西厢寻他',artist: '洛天依',url: '/music/西厢寻他-洛天依.mp3',cover:defcover},
        {name: '羡人间',artist: '乐正绫',url: '/music/羡人间-乐正绫.mp3',cover:defcover},
        {name: '相思遥',artist: '洛天依',url: '/music/相思遥-洛天依.mp3',cover:defcover},
        {name: '心上结',artist: '洛天依',url: '/music/心上结-洛天依.mp3',cover:defcover},
        {name: '烟雨行舟',artist: '乐正绫',url: '/music/烟雨行舟-乐正绫.mp3',cover:defcover},
        {name: '一笑江湖',artist: '洛天依',url: '/music/一笑江湖-洛天依.mp3',cover:defcover},
        {name: '忆红莲',artist: '洛天依',url: '/music/忆红莲-洛天依.mp3',cover:defcover},
        {name: '幽灵东京',artist: '乐正绫',url: '/music/幽灵东京-乐正绫.mp3',cover:defcover},
        {name: '虞兮叹',artist: '洛天依',url: '/music/虞兮叹-洛天依.mp3',cover:defcover},
        {name: '鸳鸯戏',artist: '洛天依',url: '/music/鸳鸯戏-洛天依.mp3',cover:defcover},
        {name: '昭然赤心',artist: '洛天依',url: '/music/昭然赤心-洛天依.mp3',cover:defcover}]
    });
  }
  return globalPlayer;
}

// 初始化 PJAX
function initPjax() {
  $(document).pjax('a:not([target="_blank"], .no-pjax)', '#pjax-container', {
    fragment: '#pjax-container',
    timeout: 8000
  });
}



// DOM 就绪后初始化
document.addEventListener('DOMContentLoaded', function() {
  initPlayer();
  
  // 确保 PJAX 依赖已加载
  if (window.$ && $.fn.pjax) {
    initPjax();
  } else {
    console.warn('PJAX 依赖未加载');
  }
});

$(document).on('pjax:complete', function(event) {
   reloadSidebarMenu();
});

function reloadSidebarMenu() {
  $.ajax({
    url: window.location.href,
    type: 'GET',
    dataType: 'html',
    success: function(fullPageHtml) {
      // 从完整页面中提取侧边栏菜单
      const $newContent = $(fullPageHtml);
      const newMenu = $newContent.find('#mlist-container').html();
      
      // 更新侧边栏容器
      $('#mlist-container').html(newMenu);
      
      // 重新初始化 MDUI 组件（如果需要）
      if (window.mdui) {
        mdui.mutation();
      }
    },
    error: function() {
      console.error('Failed to reload sidebar menu');
    }
  });
}