'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const { ctx, app } = this;
      const { openid, roomid } = ctx.args[0];
      //   console.log('xxx');
      const socketid = ctx.socket.id;
      console.log(socketid, openid);
      const room = app.io.of('/').adapter.rooms[roomid];
      console.log(room);
      const sid = app.io.of('/').adapter.sids[socketid];
      console.log(sid);
    }
  }
  return Controller;
};
