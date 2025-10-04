Page({
  data: {
    navHeight: 0,
    pageTitle: '渔康智鉴'
  },
  onLoad() {
    const menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        const statusBarHeight = res.statusBarHeight;
        //！此处有修改
        const navHeight =  menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
        this.setData({
          navHeight: navHeight
        });
      }
    });
  }
 });