import net = require('net');

//TODO: I should try to find typings for this library
const jsonstream: any = require('duplex-json-stream');

function server(socket: number): net.Server {
  return net.createServer((socket) => {
    const jsonStreamSocket = jsonstream(socket);
    jsonStreamSocket.on('data', (msg: string) => console.log(msg));
  })
} 