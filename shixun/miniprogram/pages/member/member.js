var app = getApp();
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
  }, 
  navigateTolookForm: function() {
    wx.navigateTo({
      url: '/pages/lookform/lookform?form_name=0',
    })
  },
  navigateToMessage: function () {
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  setup: function () {
    wx.navigateTo({
      url: '../setting/setting',
    })
  }

})