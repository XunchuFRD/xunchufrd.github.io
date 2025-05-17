// custom.js
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 MetingJS 播放器
    const meting = new MetingJS({
      element: document.getElementById('meting-container'), // 容器 ID
      fixed: true,      // 固定播放器
      autoplay: false,  // 禁止自动播放
      server: 'netease', // 平台：netease（网易云）、tencent（QQ音乐）等
      type: 'playlist',  // 类型：song（单曲）、playlist（歌单）、album（专辑）
      id: '980612999'       // 替换为你的歌单/歌曲 ID
    });
  
    // 初始化 PJAX
    const pjax = new Pjax({
      selectors: ['title', '.pjax-container'],
      excludes: '#meting-container' // 排除播放器容器
    });
  
    // PJAX 加载完成后重新初始化 MetingJS（可选）
    document.addEventListener('pjax:complete', function() {
      // 如果播放器被意外销毁，重新初始化
      if (!document.getElementById('meting-container').hasChildNodes()) {
        meting.init();
      }
    });
  });