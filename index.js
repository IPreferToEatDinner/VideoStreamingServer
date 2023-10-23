import NodeMediaServer from 'node-media-server';
import config from './config.js';

const nms = new NodeMediaServer(config);
nms.run();
