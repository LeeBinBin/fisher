Page({
  data: {
    active: 0,
    list: [
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/images/tabBar/index-unselected.png",
        "selectedIconPath": "/images/tabBar/index-selected.png"
      },
      {
        "pagePath": "/pages/AIpage/AIpage",
        "text": "AI助手",
        "iconPath": "/images/tabBar/AI-unselected.png",
        "selectedIconPath": "/images/tabBar/AI-selected.png"
      },
      {
        "pagePath": "/pages/consult/consult",
        "text": "专家咨询",
        "iconPath": "/images/tabBar/consult-unselected.png",
        "selectedIconPath": "/images/tabBar/consult-selected.png"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "我的",
        "iconPath": "/images/tabBar/my-unselected.png",
        "selectedIconPath": "/images/tabBar/my-selected.png"
      }
    ]
    
  },
  onChange(event) {
    this.setData({ active: event.detail });
    wx.switchTab({
      url: this.data.list[event.detail].pagePath,
    })
  },
});
