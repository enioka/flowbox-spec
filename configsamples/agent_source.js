// Agent 1
{
	listeners: [{
			interface: "0.0.0.0",
			"name": "listener1",
			mode: "http",
		},
	],

	agents: [{
			name: "agent2",
			incomingChannels: [{
					name: "canalrapide",
					url: "https://kljsdlkfjlsdjf:8080",
					initiator: "me"
				}
			]
		}
	],

	flows: [{
			name: "référentiel client",
			id: "1123-6666-6666",

			trigger: {
				listeners: ["listener1", ],
				urlPattern: "client",
				nature: "synchronous"
			},

			pretransform: [
				"plugin1": {
					params plugin1
				},
			],

			orchestration: {
				class,
				name,
				params...
			}

			targets: [{
					tags: ["joli", "rapide"],
					agent: "agent2",
					channel: "canalrapide",
					posttransforms: [],
					service: "service1"
				}
			]
		}
	]
}
