Page({
 data:{
  navHeight: 0,
  pageTitle: '用户信息',
 },
 onLoad() {
  const menuButtonObject = wx.getMenuButtonBoundingClientRect();
  wx.getSystemInfo({
    success: res => {
      const statusBarHeight = res.statusBarHeight;
      const navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
      this.setData({
        navHeight: navHeight
      });
    }
  });
},
return (){
  wx.navigateBack() // 返回上一页
}
})