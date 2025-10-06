Page({
  data:{
    navHeight: 0,
    pageTitle: '渔康智鉴',
    hotArticle: [
      {
        title: '乌鳢(黑鱼)养殖出现烂鳃病如何防治?',
        artist: '云南黑鱼养殖户',
        releaseTime: '2025-09-03 14:31:00',
        heat: 42
      },
      {
        title: '稻田养鲫鱼如何防除敌害?',
        artist: '广东鲫鱼养殖户',
        releaseTime: '2025-08-02 18:24:00',
        heat: 29
      },
      {
        title: '养泥鳅水质优劣如何观察及处理方法?',
        artist: '湖北泥鳅养殖户',
        releaseTime: '2025-09-20 10:49:00',
        heat: 21
      }
    ],
    newArticle:[{
      title: '如何降低泥鳅的饲养成本?',
      artist: '湖北泥鳅养殖户',
      releaseTime: '2025-10-03 10:49:00',
      heat: 4
    },{
      title: '怎么在鲟鱼水花开口期提高养殖收益?',
      artist: '浙江鲟鱼养殖户',
      releaseTime: '2025-10-02 15:22:00',
      heat: 3
    },{
      title: '鲶鱼养殖如何增产?',
      artist: '四川鲶鱼养殖户',
      releaseTime: '2025-10-01 12:48:00',
      heat: 7
    }]
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