//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    msgData: [],
    say: "",
  },
  changeInputValue(ev) {
    this.setData({
      inputVal: ev.detail.value
    })
  },
  //删除留言
  DelMsg(ev) {
    var n = ev.target.dataset.index;

    var list = this.data.msgData;
    list.splice(n, 1);

    this.setData({
      msgData: list
    });
  },
  //添加留言
  addMsg() {
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    //更新
    this.setData({
      msgData: list,
      inputVal: ''
    });
    var that = this
    var newDate = new Date();
    
    const db = wx.cloud.database()
    db.collection('message').add({ //插入报名信息
      data: {
        say: that.data.msgData,
      },
      success: function (res) {
        console.log("留言成功" + res)
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: console.error
    })
  },
})