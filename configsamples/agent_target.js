{
	outboundEndPoints: [{
			name: "toto",
			protocol: "..."
		}
	],

	channels: [

	],

	flows: [{
			name: "référentiel client",
			id: "1123-6666-6666",

			services: [{
					name: "service1",

					expositions: [{
							nature: "synchronous",
							channel: "canalrapide"
						}
					],

					pretransform: [],

					orchestration: {
						ddddddd
					},

					targets: [],

					connector: {
						baseUrl: "http://monappli:8080"
					}
				}
			]
		}
	]
}
