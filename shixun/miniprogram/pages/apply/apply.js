Page({
  data: {
    name: "",
    sex: "",
    phone: "",
    major: "",
    what: "",
    where: "",
    say: "",
    pass:""
  },

  name: function(e) {
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value //待插入的文章name字段
    })
  },

  radioSex: function(e) {
    console.log(e.detail.value)
    this.setData({
      sex: e.detail.value //待插入的文章sex字段
    })
  },

  phone: function(e) {
    console.log(e.detail.value)
    this.setData({
      phone: e.detail.value //待插入的文章title字段
    })
  },

  radioMajor: function(e) {
    console.log(e.detail.value)
    this.setData({
      major: e.detail.value //待插入的文章newsid字段
    })
  },

  what: function(e) {
    console.log(e.detail.value)
    this.setData({
      what: e.detail.value //待插入的文章title字段
    })
  },

  where: function(e) {
    console.log(e.detail.value)
    this.setData({
      where: e.detail.value //待插入的文章title字段
    })
  },

  say: function(e) {
    console.log(e.detail.value)
    this.setData({
      say: e.detail.value //待插入的文章title字段
    })
  },

  submit: function(e) {
    var that = this
    var newDate = new Date();

    const db = wx.cloud.database()
    db.collection('form').add({ //插入报名信息
      data: {
        name: that.data.name,
        sex: that.data.sex,
        phone: that.data.phone,
        major: that.data.major,
        what: that.data.what,
        where: that.data.where,
        say: that.data.say,
        pass: "尚未审批"
      },
      success: function(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log("插入成功" + res)
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        wx.navigateTo({
          url: '/pages/lookform/lookform?form_name=' + that.data.name,
        })
      },
      fail: console.error
    })
  },
})