'use strict';

const { Socket } = require('socket.io');

/* istanbul ignore next */
Socket.prototype.__defineGetter__('remoteAddress', function remoteAddressGetter() {
  return this.handshake.address;
});
