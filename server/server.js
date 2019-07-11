const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8088 });

console.log('>>>>启动了<<<<');
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  setInterval(function() {
    ws.send('something');
  }, 5000)
});

