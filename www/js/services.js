angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  var goods = [{
    id: 0,
    price: 100,
    name: '袋鼠',
    description: '澳洲典型的一种常见袋鼠，外形和内在酷似美国知名电影明星比利·海灵顿。其肌肉发达，可食用。',
    picture: 'img/daishu.jpg'
  }, {
    id: 1,
    price: 2333333333,
    name: '考拉',
    description: '澳洲典型的一种常见树袋熊，外形和内在酷似中国知名电影明星佟大为（暗黑）。其肌肉因为长期睡觉发达，可食用。',
    picture: 'img/kaola.jpg'
  },{
    id: 2,
    price: 0.2333333,
    name: '袋狼',
    description: '澳洲典型的一种不常见的狼，外形和内在酷似日本知名电影明星东尼大木。其肌肉发达，肚子上有个袋，可食用。',
    picture: 'img/dailang.jpg'
  },{
    id: 0,
    price: 666666,
    name: '鸭嘴兽',
    description: '澳洲典型的一种常见卵生哺乳动物，外形和内在酷似中国知名配音明星葛平。其肌肉不知道是否发达，可食用。',
    picture: 'img/yazuishou.jpg'
  },{
    id: 0,
    price: 100,
    name: '淡水鳄',
    description: '澳洲典型的一种常见鳄鱼，外形和内在酷似美国知名骷髅会成员美国圣地亚哥集团总裁兼金坷垃研发总设计师威廉伯爵。其肌肉发达，可食用。',
    picture: 'img/eyu.jpg'
  },];

  return {
    all: function() {
      return chats;
    },
    allGoods:function() {
      return goods;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
