const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 60,
		ping_timeout: 30,
	},
	http: {
		port: 8000,
		mediaroot: './media',
		allow_origin: '*',
	},
};

export default config;