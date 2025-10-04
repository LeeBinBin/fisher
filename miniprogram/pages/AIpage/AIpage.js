Page({
  data: {
    navHeight: 0,
    pageTitle: '渔康智鉴',
    isDisabled: true,
    isLoading: false,
    inputValue: ''
  },
  onInputChange(e) {
    const value = e.detail.value.trim();
    this.setData({
      inputValue: value,
      isDisabled: value === ''
    });
  },
  async onSend() {
    try {
      this.setData({ 
        isLoading: true,
        isDisabled: true,
       });
      console.log('开始发送...');
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(this.data.inputValue);
          resolve();
        }, 3000);
      })
    } catch (err) {
      console.error('发生错误：' + err);
    } finally {
      this.setData({ 
        isLoading: false,
        isDisabled: false, 
      });
    }
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
 });