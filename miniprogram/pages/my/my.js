Page({
  data:{
    avatarUrl:'/images/personInfo/avatar.png',
    navHeight: 0,
    pageTitle: '渔康智鉴'
  },
  details(){
    wx.navigateTo({
      url: '/pages/details/details',
    })
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