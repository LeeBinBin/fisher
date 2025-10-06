App({
  globalData: {
    navBarHeight: 0
  },
  onLaunch: function () {
    this.globalData = {
      env: "cloud1-4g5k684112030b04"
    };
    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        env: this.globalData.env,
        traceUser: true,
      });
    }
    const that = this;
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    that.globalData.navBarHeight = systemInfo.statusBarHeight+44;
  }
});
