import NodeMediaServer from 'node-media-server';

const nms = new NodeMediaServer({
	rtmp: { port: 1935 },
	http: {
		port: 8000,
		allow_origin: '*',
	},
});

nms.run();
