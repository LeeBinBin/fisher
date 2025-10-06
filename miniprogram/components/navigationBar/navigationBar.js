const app = getApp()
Component({
    properties: {
      pageTitle: "默认标题",
      url:''
    },
    data: {
        navBarHeight: app.globalData.navBarHeight
    }
})