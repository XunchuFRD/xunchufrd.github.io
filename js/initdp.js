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
        {name: '万神纪',artist: '星尘infinity',url: '/music/万神纪-星尘.mp3',cover:defcover},
        {name: '武装乙女',artist: '洛天依',url: '/music/武装乙女-洛天依.mp3',cover:defcover},
        {name: '呐呐呐',artist: '鏡音リン&初音ミク',url: '/music/呐呐呐-鏡音リン&初音ミク.mp3',cover:defcover},
        {name: '天星问',artist: '乐正绫',url: '/music/天星问-乐正绫.mp3',cover:defcover},
        {name: '不问天',artist: '乐正绫',url: '/music/不问天-乐正绫.mp3',cover:defcover},
        {name: '绝体绝命',artist: '乐正绫',url: '/music/绝体绝命-乐正绫AI.mp3',cover:defcover},
        {name: '免我蹉跎苦',artist: '乐正绫',url: '/music/免我蹉跎苦-乐正绫.mp3',cover:defcover},
        {name: '万象霜天',artist: '乐正绫',url: '/music/万象霜天-乐正绫.mp3',cover:defcover},
        {name: '无理无智',artist: '乐正绫',url: '/music/无理无智-乐正绫.mp3',cover:defcover},
        {name: '弈',artist: '乐正绫',url: '/music/弈-乐正绫.mp3',cover:defcover},
        {name: '我约等于世界',artist: '乐正绫',url: '/music/我约等于世界-乐正绫.mp3',cover:defcover},
        {name: '三千烛华夜',artist: '洛天依&乐正绫',url: '/music/三千烛华夜-洛天依&乐正绫.mp3',cover:defcover},
        {name: '勾指起誓',artist: '洛天依',url: '/music/勾指起誓-洛天依.mp3',cover:defcover},
        {name: '时间煮雨',artist: '洛天依',url: '/music/时间煮雨-洛天依.mp3',cover:defcover},
        {name: '惊鹊',artist: '洛天依&乐正绫',url: '/music/惊鹊-洛天依&乐正绫.mp3',cover:defcover},
        {name: '再见宣言',artist: '洛天依',url: '/music/再见宣言-洛天依.mp3',cover:defcover},
        {name: '春意红包',artist: '洛天依',url: '/music/春意红包-洛天依.mp3',cover:defcover},
        {name: '横竖撇点折',artist: '洛天依',url: '/music/横竖撇点折-洛天依.mp3',cover:defcover},
        {name: '三千世界鸦杀尽',artist: '洛天依',url: '/music/三千世界鸦杀尽-洛天依.mp3',cover:defcover},
        {name: '呓语红尘',artist: '洛天依',url: '/music/呓语红尘-洛天依.mp3',cover:defcover},
        {name: '深海少女',artist: '洛天依',url: '/music/深海少女-洛天依.mp3',cover:defcover},
        {name: '三月雨',artist: '洛天依&乐正绫',url: '/music/三月雨-洛天依x乐正绫.mp3',cover:defcover},
        {name: '万象霜天',artist: '洛天依',url: '/music/万象霜天-洛天依.mp3',cover:defcover},
        {name: '左撕右裂',artist: '洛天依',url: '/music/左撕右裂-洛天依.mp3',cover:defcover},
        {name: '敢归云间宿',artist: '言和&洛天依&乐正绫',url: '/music/敢归云间宿-言和_洛天依_乐正绫.mp3',cover:defcover},
        {name: '逆浪千秋',artist: '洛天依&乐正绫',url: '/music/逆浪千秋-洛天依&乐正绫.mp3',cover:defcover},
        {name: '一梦千朝',artist: '洛天依',url: '/music/一梦千朝-洛天依.mp3',cover:defcover},
        {name: '白石溪',artist: '洛天依&乐正绫',url: '/music/白石溪-洛天依&乐正绫.mp3',cover:defcover},
        {name: '万古生香',artist: '洛天依',url: '/music/万古生香-洛天依.mp3',cover:defcover},
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
        {name: '起风了',artist: '乐正绫',url: '/music/起风了-乐正绫.mp3',cover:defcover},
        {name: '千本樱',artist: '洛天依',url: '/music/千本樱-洛天依.mp3',cover:defcover},
        {name: '千里邀月',artist: '洛天依&乐正绫',url: '/music/千里邀月-洛天依&乐正绫.mp3',cover:defcover},
        {name: '牵丝戏',artist: '洛天依',url: '/music/牵丝戏-洛天依.mp3',cover:defcover},
        {name: '青花瓷',artist: '洛天依',url: '/music/青花瓷-洛天依.mp3',cover:defcover},
        {name: '青鸟来归',artist: '洛天依',url: '/music/青鸟来归-洛天依.mp3',cover:defcover},
        {name: '青丝',artist: '洛天依',url: '/music/青丝-洛天依.mp3',cover:defcover},
        {name: '权御天下',artist: '洛天依',url: '/music/权御天下-洛天依.mp3',cover:defcover},
        {name: '如果只转身后退就能回到那个夏天',artist: '洛天依',url: '/music/如果只转身后退就能回到那个夏天-洛天依.mp3',cover:defcover},
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
        {name: '我期待的不是雪',artist: '洛天依',url: '/music/我期待的不是雪-洛天依.mp3',cover:defcover},
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
        {name: '昭然赤心',artist: '洛天依',url: '/music/昭然赤心-洛天依.mp3',cover:defcover},
        {name: 'Fiction Blue',artist: '乐正绫',url: '/music/Fiction Blue-乐正绫.mp3',cover:defcover},
        {name: '碎月',artist: '乐正绫',url: '/music/碎月-乐正绫.mp3',cover:defcover},
        {name: '玉堂春',artist: '乐正绫&言和&洛天依',url: '/music/玉堂春-乐正绫&言和&洛天依.mp3',cover:defcover},
        {name: 'Bad Apple',artist: '洛天依&言和&乐正绫&墨清弦&唐青乐',url: '/music/Bad Apple-洛天依&言和&乐正绫&墨清弦&唐青乐.mp3',cover:defcover},
        {name: 'My all',artist: '乐正绫',url: '/music/MY ALL-乐正绫.mp3',cover:defcover},
        {name: '吹灭小山河',artist: '洛天依',url: '/music/吹灭小山河-洛天依.mp3',cover:defcover},
        {name: '儒风诉骨',artist: '乐正绫',url: '/music/儒风诉骨-乐正绫.mp3',cover:defcover},
        {name: '扬旗鸣鼓',artist: '洛天依&乐正绫',url: '/music/扬旗鸣鼓-洛天依&乐正绫.mp3',cover:defcover},
        {name: '少年汹涌',artist: '洛天依',url: '/music/少年汹涌-洛天依.mp3',cover:defcover},
        {name: '乌鸦坐神台',artist: '洛天依',url: '/music/乌鸦坐神台-洛天依.mp3',cover:defcover},
        {name: '他乡的月亮',artist: '乐正绫',url: '/music/他乡的月亮-乐正绫.mp3',cover:defcover},
        {name: '长夜雨',artist: '洛天依&乐正绫',url: '/music/长夜雨-洛天依&乐正绫.mp3',cover:defcover},
        {name: '月下西楼',artist: '洛天依',url: '/music/月下西楼-洛天依.mp3',cover:defcover},
        {name: '拜月',artist: '乐正绫',url: '/music/拜月-乐正绫.mp3',cover:defcover},
        {name: '落',artist: '洛天依',url: '/music/落-洛天依.mp3',cover:defcover},
        {name: '大鱼',artist: '洛天依',url: '/music/大鱼-洛天依.mp3',cover:defcover},
        {name: '一梦惊鸿',artist: '洛天依',url: '/music/一梦惊鸿-洛天依.mp3',cover:defcover},
        {name: '下等马',artist: '洛天依',url: '/music/下等马-洛天依.mp3',cover:defcover},
        {name: '画舫烟中浅',artist: '洛天依&乐正绫',url: '/music/画舫烟中浅-洛天依&乐正绫.mp3',cover:defcover},
        {name: '金鳞甲',artist: '洛天依',url: '/music/金鳞甲-洛天依.mp3',cover:defcover},
        {name: '红尘寄雪',artist: '洛天依&乐正绫',url: '/music/红尘寄雪-洛天依&乐正绫.mp3',cover:defcover},
        {name: '相思若循',artist: '洛天依&乐正绫',url: '/music/相思若循-洛天依&乐正绫.mp3',cover:defcover},
        {name: '弑神者',artist: '洛天依',url: '/music/弑神者-洛天依.mp3',cover:defcover},
        {name: '知我',artist: '洛天依',url: '/music/知我-洛天依.mp3',cover:defcover},
        {name: '瀚海梦绝',artist: '洛天依',url: '/music/瀚海梦绝-洛天依.mp3',cover:defcover},
        {name: '荒',artist: '洛天依',url: '/music/荒-洛天依.mp3',cover:defcover},
        {name: '超超超计算机世纪',artist: '洛天依',url: '/music/超超超计算机世纪-洛天依.mp3',cover:defcover},
        {name: '同燃长安夜',artist: '洛天依&乐正绫',url: '/music/千灯愿-洛天依&乐正绫.mp3',cover:defcover},
        {name: '叙世',artist: '洛天依&乐正绫',url: '/music/叙世-洛天依&乐正绫.mp3',cover:defcover},
        {name: '白石溪',artist: '洛天依&乐正绫',url: '/music/白石溪-洛天依&乐正绫.mp3',cover:defcover},
        {name: '南京夜无电波讯号',artist: '洛天依',url: '/music/南京夜无电波讯号-洛天依.mp3',cover:defcover},
        {name: '西楼别序',artist: '洛天依',url: '/music/西楼别序-洛天依.mp3',cover:defcover},
        {name: '嗵嗵',artist: '洛天依',url: '/music/嗵嗵-洛天依.mp3',cover:defcover},
        {name: '辞九门回忆',artist: '洛天依',url: '/music/辞九门回忆-洛天依.mp3',cover:defcover},
        {name: '云山尽处',artist: '乐正绫',url: '/music/云山尽处-乐正绫.mp3',cover:defcover},
        {name: '西风持扇',artist: '洛天依&乐正绫',url: '/music/西风持扇-洛天依&乐正绫.mp3',cover:defcover},
        {name: '青檀记',artist: '洛天依&乐正绫',url: '/music/青檀记-洛天依&乐正绫.mp3',cover:defcover},
        {name: '武装乙女【中文填词】',artist: '洛天依',url: '/music/武装乙女【中文填词】-洛天依.mp3',cover:defcover},
        {name: '谪居',artist: '洛天依',url: '/music/谪居-洛天依.mp3',cover:defcover},
        {name: '未完成ランデヴー(未完成的约会)',artist: '洛天依',url: '/music/未完成ランデヴー(未完成的约会)-洛天依.mp3',cover:defcover},
        {name: '觅龙',artist: '乐正绫',url: '/music/觅龙-乐正绫.mp3',cover:defcover},
        {name: '画离弦',artist: '洛天依',url: '/music/画离弦-洛天依.mp3',cover:defcover},
        {name: '千灯愿',artist: '洛天依',url: '/music/千灯愿-洛天依.mp3',cover:defcover},
        {name: '聘书',artist: '洛天依&乐正绫',url: '/music/聘书-洛天依&乐正绫.mp3',cover:defcover}
      ]
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