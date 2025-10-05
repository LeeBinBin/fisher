Page({
  data:{
    navHeight: 0,
    pageTitle: '渔康智鉴',
    article: [
      {
        title: '标题1',
        artist: 'LZX',
        releaseTime: '2025-09-03 14:31:00',
        heat: 42
      },
      {
        title: '标题2',
        artist: 'LBBBBBBBBB',
        releaseTime: '2025-09-03 14:31:00',
        heat: 20
      },
      {
        title: '标题3',
        artist: 'LBBBBBBBBB',
        releaseTime: '2025-09-03 14:31:00',
        heat: 38
      },
      {
        title: '标题4',
        artist: 'LBBBBBBBBB',
        releaseTime: '2025-09-03 14:31:00',
        heat: 42
      },
      {
        title: '标题5',
        artist: 'LBBBBBBBBB',
        releaseTime: '2025-09-03 14:31:00',
        heat: 42
      }
    ]
  },
  onLoad() {
    const menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        const statusBarHeight = res.statusBarHeight;
        //！此处有修改
        const navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
        this.setData({
          navHeight: navHeight
        });
      }
    });
  }
})