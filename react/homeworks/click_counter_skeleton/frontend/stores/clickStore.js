var _clickCount = 0,
    _handlers = [];

var ClickStore = {
  count: function () {
    return _clickCount;
  },
  increment: function(){
    _clickCount++;
    ClickStore.changed();
  },
  addChangeHandler: function(handler){
    _handlers.push(handler);
  },
  removeChangeHandler: function(handler){
    var idx = _handlers.indexOf(handler);
    if (idx !== -1){
      _handlers.splice(idx, 1);
    }
  },
  changed: function(){
    _handlers.forEach(function(handler){
      handler();
    });
  }
};

module.exports = ClickStore;
