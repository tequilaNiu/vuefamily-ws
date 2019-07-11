import WebSocket from 'isomorphic-ws';

const ws = new WebSocket('ws://localhost:8088/');

export default ws;