'use strict';

exports.io = {
  namespace: {
    '/': {
      connectionMiddleware: [ 'auth' ],
      packetMiddleware: [ 'filter' ],
    },
    '/chat': {
      connectionMiddleware: [ 'auth' ],
      packetMiddleware: [],
    },
  },
  redis: {
    port: 6379,
    host: 'localhost',
    auth_pass: '',
    db: 3,
  },
};

exports.keys = '123';
