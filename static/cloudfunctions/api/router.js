

class Router {
  constructor() {
    this.handlers = {};
  }
  //根据事件绑定对应控制器
  set(event, controller, cacheTime = 1000*60*60) {
    this.handlers[event] = { controller, cacheTime };
  }
  
  getHandlers(){
    return this.handlers;
  }

 
}


module.exports = new Router();