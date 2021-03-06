const roles_definition = {
	"state":{
		"category":"other",
		"desc":"General purpose",
		"read":true,
		"write":true
	},
	"text":{
		"category":"other",
		"desc":"Text",
		"type":"string",
		"read":true,
		"write":true
	},
	"text.url":{
		"category":"other",
		"desc":"URL",
		"type":"string",
		"read":true,
		"write":true
	},
	"html":{
		"category":"other",
		"desc":"HTML",
		"type":"string",
		"read":true,
		"write":true
	},
	"json":{
		"category":"other",
		"desc":"JSON",
		"type":"string",
		"read":true,
		"write":true
	},
	"list":{
		"category":"other",
		"desc":"List",
		"type":"array",
		"read":true,
		"write":true
	},
	"date":{
		"category":"other",
		"desc":"Date",
		"type":[
			"string",
			"number"
		],
		"read":true,
		"write":true
	},
	"sensor.window":{
		"category":"sensor",
		"desc":"Window open/closed",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.door":{
		"category":"sensor",
		"desc":"Door open/closed",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.alarm":{
		"category":"sensor",
		"desc":"Alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.alarm.flood":{
		"category":"sensor",
		"desc":"Waterleakage",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.alarm.fire":{
		"category":"sensor",
		"desc":"Fire alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.alarm.secure":{
		"category":"sensor",
		"desc":"Secure alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.alarm.power":{
		"category":"sensor",
		"desc":"Power alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.light":{
		"category":"sensor",
		"desc":"Light sensor",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.lock":{
		"category":"sensor",
		"desc":"Lock state",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.motion":{
		"category":"sensor",
		"desc":"Motion sensor",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.rain":{
		"category":"sensor",
		"desc":"Rain sensor",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"sensor.noise":{
		"category":"sensor",
		"desc":"Noise sensor",
		"type":"boolean",
		"read":true,
		"write":false,
		"unit": ["dB"]
	},
	"button":{
		"category":"button",
		"desc":"Button",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.long":{
		"category":"button",
		"desc":"Button long press",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.press":{
		"category":"button",
		"desc":"Button press",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.stop":{
		"category":[
			"button",
			"media"
		],
		"desc":"Button stop",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.start":{
		"category":[
			"button",
			"media"
		],
		"desc":"Button start",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.open.door":{
		"category":"button",
		"desc":"Button open door",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.open.window":{
		"category":"button",
		"desc":"Button",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.mode.auto":{
		"category":"button",
		"desc":"Button set mode auto",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.mode.manual":{
		"category":"button",
		"desc":"Button set mode manual",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"button.mode.silent":{
		"category":"button",
		"desc":"Button set mode silent",
		"type":"boolean",
		"read":false,
		"write":true
	},
	"value":{
		"category":"value",
		"desc":"Value",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.window":{
		"category":"value",
		"desc":"Window state",
		"type":"number",
		"read":true,
		"write":false,
		"states":{
			"0":"CLOSED",
			"1":"TILTED",
			"2":"OPEN"
		}
	},
	"value.temperature":{
		"category":"value",
		"desc":"Temperature",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"value.brightness":{
		"category":"value",
		"desc":"Brightness",
		"type":"number",
		"read":true,
		"write":false,
		"unit":"lx"
	},
	"value.min":{
		"category":"value",
		"desc":"Value minimum",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.max":{
		"category":"value",
		"desc":"Value maximum",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.default":{
		"category":"value",
		"desc":"Value default",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.battery":{
		"category":"value",
		"desc":"Battery level",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"%",
			"V"
		]
	},
	"value.gas":{
		"category":"value",
		"desc":"Gas concentration",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"ppm"
		]
	},
	"value.valve":{
		"category":"value",
		"desc":"Valve position",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.time":{
		"category":"value",
		"desc":"Time",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.interval":{
		"category":"value",
		"desc":"Interval time",
		"type":"number",
		"read":true,
		"write":false,
		"unit":"sec"
	},
	"value.date":{
		"category":"value",
		"desc":"Date",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.datetime":{
		"category":"value",
		"desc":"Date and time",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.gps.longitude":{
		"category":"value",
		"desc":"GPS longitude",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.gps.latitude":{
		"category":"value",
		"desc":"GPS latitude",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.gps.elevation":{
		"category":"value",
		"desc":"GPS elevation",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.gps":{
		"category":"value",
		"desc":"GPS longitude and latitude",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.power.consumption":{
		"category":"value",
		"desc":"Power consumption (Ws, Wh, kWh)",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.direction":{
		"category":"value",
		"desc":"Direction",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.curtain":{
		"category":"value",
		"desc":"Curtain position",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.blind":{
		"category":"value",
		"desc":"Blind position",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.tilt":{
		"category":"value",
		"desc":"Tilt position",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.lock":{
		"category":"value",
		"desc":"Lock position",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.speed":{
		"category":"value",
		"desc":"Wind speed",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.pressure":{
		"category":"value",
		"desc":"Pressure",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mbar",
			"bar",
			"hPa"
		]
	},
	"value.distance":{
		"category":"value",
		"desc":"Distance",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.distance.visibility":{
		"category":"value",
		"desc":"Distance visibility",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.severity":{
		"category":"value",
		"desc":"Severity (priority)",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.warning":{
		"category":"value",
		"desc":"Warning",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.sun.elevation":{
		"category":"value",
		"desc":"Sun elevation",
		"type":"number",
		"read":true,
		"write":false,
		"unit":"°"
	},
	"value.sun.azimuth":{
		"category":"value",
		"desc":"Sun Azimuth",
		"type":"number",
		"read":true,
		"write":false,
		"unit":"°"
	},
	"value.voltage":{
		"category":"value",
		"desc":"Voltage",
		"type":"number",
		"read":true,
		"write":false,
		"unit":"V"
	},
	"value.current":{
		"category":"value",
		"desc":"Current",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"A",
			"mA"
		]
	},
	"value.fill":{
		"category":"value",
		"desc":"Fill",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"l",
			"ml",
			"m3",
			"%"
		]
	},
	"value.blood.sugar":{
		"category":"value",
		"desc":"Blood sugar (mmol, mgdl)",
		"type":"number",
		"read":true,
		"write":false
	},
	"indicator":{
		"category":"indicator",
		"desc":"Indicator",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.working":{
		"category":"indicator",
		"desc":"Working",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.reachable":{
		"category":"indicator",
		"desc":"Device Reachable",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.connected":{
		"category":"indicator",
		"desc":"Shows connection state for adapter instance",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.maintenance":{
		"category":"indicator",
		"desc":"Shows service messages",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.maintenance.lowbat":{
		"category":"indicator",
		"desc":"Indicates low battery",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.maintenance.unreach":{
		"category":"indicator",
		"desc":"Indicates device is not reachable",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.maintenance.alarm":{
		"category":"indicator",
		"desc":"Indicates alarm message",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.lowbat":{
		"category":"indicator",
		"desc":"Indicates low battery",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.alarm":{
		"category":"indicator",
		"desc":"Indicates alarm message",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.alarm.fire":{
		"category":"indicator",
		"desc":"Indicates fire alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.alarm.flood":{
		"category":"indicator",
		"desc":"Indicates waterleakage alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.alarm.secure":{
		"category":"indicator",
		"desc":"Indicates secure alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"indicator.alarm.health":{
		"category":"indicator",
		"desc":"Indicates health alarm",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"level":{
		"category":"level",
		"desc":"Level general",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.co2":{
		"category":"level",
		"desc":"Air Quality",
		"type":"number",
		"read":true,
		"write":true,
		"min":0,
		"max":100,
		"unit":"%"
	},
	"level.dimmer":{
		"category":"level",
		"desc":"Brightness setpoint",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.blind":{
		"category":"level",
		"desc":"Blind setpoint",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.temperature":{
		"category":"level",
		"desc":"Temperature setpoint",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.valve":{
		"category":"level",
		"desc":"Valve setpoint",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.red":{
		"category":"level",
		"desc":"Level for color red",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.green":{
		"category":"level",
		"desc":"Level for color green",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.blue":{
		"category":"level",
		"desc":"Level for color blue",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.white":{
		"category":"level",
		"desc":"Level for color white",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.hue":{
		"category":"level",
		"desc":"Color in hue",
		"type":"number",
		"read":true,
		"write":true,
		"unit":"°"
	},
	"level.color.saturation":{
		"category":"level",
		"desc":"Color saturation",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.rgb":{
		"category":"level",
		"desc":"RGB color as HEX",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.luminance":{
		"category":"level",
		"desc":"Color Luminance",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.color.temperature":{
		"category":"level",
		"desc":"Color temperature",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.timer":{
		"category":"level",
		"desc":"Timer",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.timer.sleep":{
		"category":"level",
		"desc":"Sleep timer",
		"type":"number",
		"read":true,
		"write":true,
		"unit":"min"
	},
	"level.volume":{
		"category":"level",
		"desc":"Audio volume",
		"type":"number",
		"read":true,
		"write":true,
		"min":0,
		"max":100,
		"unit":"%"
	},
	"level.volume.group":{
		"category":"level",
		"desc":"Audio volume for group",
		"type":"number",
		"read":true,
		"write":true,
		"min":0,
		"max":100,
		"unit":"%"
	},
	"level.curtain":{
		"category":"level",
		"desc":"Curtain setpoint",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.tilt":{
		"category":"level",
		"desc":"Tilt setpoint",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.speed.fan": {
		"category":"level",
		"desc":"Speed of fan",
		"type": [
			"string",
			"number"
		],
		"read":true,
		"write":true,
		"unit": "%",
		"states":{
			"0":"AUTO",
			"1":"high",
			"2":"low",
			"3":"medium",
			"4":"quiet",
			"5":"turbo"
		}
	},
	"level.swing": {
		"category":"level",
		"desc":"Angle or enumeration",
		"type":"string",
		"read":true,
		"write":true,
		"states":{
			"0":"AUTO",
			"1":"horizontal",
			"2":"vertical",
			"3":"stationary"
		}
	},
	"level.mode.thermostat":{
		"category":"level",
		"desc":"Thermostat mode",
		"type":"string",
		"read":true,
		"write":true,
		"states":{
			"0":"AUTO",
			"1":"COOL",
			"2":"DRY",
			"3":"ECO",
			"4":"FAN_ONLY",
			"5":"HEAT",
			"6":"OFF"
		}
	},
	"switch":{
		"category":"switch",
		"desc":"Switch gerneral",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.lock":{
		"category":"switch",
		"desc":"Lock switch",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.lock.door":{
		"category":"switch",
		"desc":"Door lock switch",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.window":{
		"category":"switch",
		"desc":"Window switch",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.boost":{
		"category":"switch",
		"desc":"Switch boost on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.light":{
		"category":"switch",
		"desc":"Light switch",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.comfort":{
		"category":"switch",
		"desc":"Switch comfort mode on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.enable":{
		"category":"switch",
		"desc":"Release",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.power":{
		"category":"switch",
		"desc":"Power on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.mode.auto":{
		"category":"switch",
		"desc":"Switch mode auto on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.mode.manual":{
		"category":"switch",
		"desc":"Switch mode manual on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.mode.silent":{
		"category":"switch",
		"desc":"Switch mode silent on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.mode.moonlight":{
		"category":"switch",
		"desc":"Switch mode moonlight on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"switch.mode.color":{
		"category":"switch",
		"desc":"Switch mode color on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.play":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button play",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.next":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button next",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.prev":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button prev",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.pause":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button pause",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.forward":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button forward",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.reverse":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button reverse",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.fastforward":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button fast forward",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.fastreverse":{
		"category":[
			"button",
			"media"
		],
		"desc":"Media button fast reverse",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.volume.up":{
		"category":[
			"button",
			"media"
		],
		"desc":"Volume up",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"button.volume.down":{
		"category":[
			"button",
			"media"
		],
		"desc":"Volume down",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"media.seek":{
		"category":"media",
		"desc":"Media seek",
		"type":"number",
		"read":true,
		"write":true
	},
	"media.mode.shuffle":{
		"category":"media",
		"desc":"Switch shuffle mode on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"media.mode.repeat":{
		"category":"media",
		"desc":"Switch repeat on/off",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"media.state":{
		"category":"media",
		"desc":"State of player",
		"type":"mixed",
		"read":true,
		"write":true
	},
	"media.artist":{
		"category":"media",
		"desc":"Name of artist",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.album":{
		"category":"media",
		"desc":"Name of album",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.title":{
		"category":"media",
		"desc":"Title of media",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.title.next":{
		"category":"media",
		"desc":"Title of next media",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.cover":{
		"category":"media",
		"desc":"URL of cover image",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.cover.big":{
		"category":"media",
		"desc":"URL of big cover image",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.cover.small":{
		"category":"media",
		"desc":"URL of small cover image",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.duration.text":{
		"category":"media",
		"desc":"Duration as text e.g. 2:35",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.duration":{
		"category":"media",
		"desc":"Duration in seconds",
		"type":"number",
		"read":true,
		"write":false,
		"unit":"sec"
	},
	"media.elapsed.text":{
		"category":"media",
		"desc":"Elapsed time as text e.g. 2:35",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.elapsed":{
		"category":"media",
		"desc":"Elapsed time in seconds",
		"type":"number",
		"read":true,
		"write":false,
		"unit":"sec"
	},
	"media.broadcastDate":{
		"category":"media",
		"desc":"Date of broadcast",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.mute":{
		"category":"media",
		"desc":"Mute device",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"media.season":{
		"category":"media",
		"desc":"Season",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.episode":{
		"category":"media",
		"desc":"Episode",
		"type":"string",
		"read":true,
		"write":false
	},
	"media.mute.group":{
		"category":"media",
		"desc":"Mute group",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"media.tts":{
		"category":"media",
		"desc":"Text to speech",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.bitrate":{
		"category":"media",
		"desc":"Bitrate",
		"type":"boolean",
		"read":true,
		"write":true,
		"unit":"kbps"
	},
	"media.genre":{
		"category":"media",
		"desc":"Genre",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.date":{
		"category":"media",
		"desc":"Date of media",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.track":{
		"category":"media",
		"desc":"Track number",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.playid":{
		"category":"media",
		"desc":"Track ID",
		"type":"number",
		"read":true,
		"write":true
	},
	"media.track.add":{
		"category":"media",
		"desc":"Add track",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.track.remove":{
		"category":"media",
		"desc":"Remove track",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.playlist":{
		"category":"media",
		"desc":"Play list as JSON",
		"type":"object",
		"read":true,
		"write":true
	},
	"media.playlist.addtrack":{
		"category":"media",
		"desc":"Add track to play list",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.playlist.removetrack":{
		"category":"media",
		"desc":"Remove track to play list",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.clear":{
		"category":"media",
		"desc":"Clear actual play list",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"media.url":{
		"category":"media",
		"desc":"URL for media",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.url.announcement":{
		"category":"media",
		"desc":"URL for announcement media",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.jump":{
		"category":"media",
		"desc":"Jump over n elements positive/negative",
		"type":"number",
		"read":true,
		"write":true
	},
	"media.content":{
		"category":"media",
		"desc":"Content type",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.link":{
		"category":"media",
		"desc":"State with actual file",
		"type":"string",
		"read":true,
		"write":true
	},
	"media.input":{
		"category":"media",
		"desc":"Input channel",
		"type":"string",
		"read":true,
		"write":true
	},
	"level.bass":{
		"category":[
			"media",
			"level"
		],
		"desc":"Bass level",
		"type":"number",
		"read":true,
		"write":true
	},
	"level.treble":{
		"category":[
			"media",
			"level"
		],
		"desc":"Treble level",
		"type":"string",
		"read":true,
		"write":true
	},
	"switch.power.zone":{
		"category":[
			"media",
			"switch"
		],
		"desc":"Switch zone on/off ",
		"type":"boolean",
		"read":true,
		"write":true
	},
	"media.browser":{
		"category":"media",
		"desc":"JSON Array like files",
		"type":"object",
		"read":true,
		"write":true
	},
	"value.health.fat": {
		"category":[
			"value",
			"health"
		],
		"desc":"Body fat index",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"%"
		]
	},
	"value.health.weight": {
		"category":[
			"value",
			"health"
		],
		"desc":"Body weight",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"kg",
			"lbs"
		]
	},
	"value.health.bmi": {
		"category":[
			"value",
			"health"
		],
		"desc":"BMI index",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.health.calories": {
		"category":[
			"value",
			"health"
		],
		"desc":"Burned calories",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"kcal"
		]
	},
	"value.health.steps": {
		"category":[
			"value",
			"health"
		],
		"desc":"Steps done",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.health.bpm": {
		"category":[
			"value",
			"health"
		],
		"desc":"Heart beats per minute",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"bpm"
		]
	},
	"value.temperature.windchill":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Felt temperature with wind",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"value.temperature.dewpoint":{
		"category":[
			"weather",
			"value"
		],
		"desc":"Dewpoint",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"value.temperature.feelslike":{
		"category":[
			"weather",
			"value"
		],
		"desc":"Temperature feels like",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"value.temperature.min":{
		"category":[
			"weather",
			"value"
		],
		"desc":"Temperature minimum",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"value.temperature.max":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Temperature ",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"value.humidity":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Humidity",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"%"
		]
	},
	"value.humidity.min":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Humidity minimum",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"%"
		]
	},
	"value.humidity.max":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Humidity maximum",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"%"
		]
	},
	"value.speed.wind":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Actual or average wind speed",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"kn",
			"m/s",
			"km/h",
			"mph"
		]
	},
	"value.speed.max.wind":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Maximum wind speed over a specific time range, normal 24 hours",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"kn",
			"m/s",
			"km/h",
			"mph"
		]
	},
	"value.speed.min.wind":{
		"category":[
			"value",
			"weather"
		],
		"desc":[
			"Minimum wind speed over a specific time range",
			" normal 24 hours"
		],
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"kn",
			"m/s",
			"km/h",
			"mph"
		]
	},
	"value.speed.wind.gust":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Gusts of wind speed",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"kn",
			"m/s",
			"km/h",
			"mph"
		]
	},
	"value.direction.wind":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Direction of wind",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°"
		]
	},
	"value.direction.max.wind":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Direction of wind maximum",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°"
		]
	},
	"value.direction.min.wind":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Direction of wind minimum",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°"
		]
	},
	"weather.direction.wind":{
		"category":[
			"value",
			"weather"
		],
		"desc":"Direction of wind",
		"type":"string",
		"read":true,
		"write":false
	},
	"date.sunrise":{
		"category":[
			"other",
			"weather"
		],
		"desc":"Sunrise today",
		"type":"string",
		"read":true,
		"write":true
	},
	"date.sunset":{
		"category":[
			"other",
			"weather"
		],
		"desc":"Sunset today",
		"type":"string",
		"read":true,
		"write":true
	},
	"weekday":{
		"category":[
			"other",
			"weather",
			"time",
			"date"
		],
		"desc":"Weekday",
		"type":"string",
		"read":true,
		"write":true
	},
	"location":{
		"category":[
			"other",
			"weather"
		],
		"desc":"Location as text",
		"type":"string",
		"read":true,
		"write":true
	},
	"weather.icon":{
		"category":[
			"other",
			"weather"
		],
		"desc":"URL to weather icon",
		"type":"string",
		"read":true,
		"write":true
	},
	"weather.icon.wind":{
		"category":[
			"other",
			"weather"
		],
		"desc":"URL to weather icon wind",
		"type":"string",
		"read":true,
		"write":true
	},
	"weather.icon.name":{
		"category":[
			"other",
			"weather"
		],
		"desc":"Name of the actual icon or status",
		"type":"string",
		"read":true,
		"write":false
	},
	"weather.state":{
		"category":[
			"other",
			"weather"
		],
		"desc":"Actual weather as text",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.precipitation":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Rainfall in a certain period of time, normally last 24 hours ",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mm"
		]
	},
	"value.precipitation.hour":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Precipitation in the last hour",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mm"
		]
	},
	"value.precipitation.today":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Precipitation today",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mm"
		]
	},
	"value.radiation":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Sun exposure",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"W/m2"
		]
	},
	"value.uv":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"UV value",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.clouds":{
		"category":[
			"weather",
			"value",
			"other"
		],
		"desc":"Cloud cover in %, 0% = no clouds, 100% = very cloudy",
		"type":"number",
		"read":true,
		"write":false,
		"min":0,
		"max":100,
		"unit":[
			"%"
		]
	},
	"value.rain":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Rain level for specific time periode, normally last 24 hours",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.rain.hour":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Rain level last hour",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.rain.today":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Rain level today",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.snow":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Snow depth",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"cm",
			"m"
		]
	},
	"value.snow.hour":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Snowfall last hour",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.snow.today":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Snowfall today",
		"type":"number",
		"read":true,
		"write":false
	},
	"value.snowline":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Snow line in meters above sea level",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"m"
		]
	},
	"weather.chart.url":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"URL to weather chart",
		"type":"string",
		"read":true,
		"write":false
	},
	"weather.chart.url.forecast":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"URL to weather forecast chart ",
		"type":"string",
		"read":true,
		"write":false
	},
	"weather.html":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"HTML object for weather description",
		"type":"string",
		"read":true,
		"write":false
	},
	"weather.title":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Weather title",
		"type":"string",
		"read":true,
		"write":false
	},
	"weather.title.short":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Short weather title, just one word",
		"type":"string",
		"read":true,
		"write":false
	},
	"weather.type":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Type of weatherinformation",
		"type":"string",
		"read":true,
		"write":false
	},
	"weather.json":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Weather data as JSON object",
		"type":"object",
		"read":true,
		"write":false
	},
	"value.speed.wind.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Wind speed forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"kn",
			"m/s",
			"km/h",
			"mph"
		]
	},
	"weather.state.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Weather forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.direction.wind.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Wind direction forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°"
		]
	},
	"weather.direction.wind.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Wind direction forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.pressure.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Air pressure forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mbar"
		]
	},
	"value.temperature.min.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Minimal temperature forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"value.temperature.max.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Maximum temperature forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"°C",
			"°F",
			"K"
		]
	},
	"weather.precipitation.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Precipitations probability for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"%"
		]
	},
	"value.precipitation.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Precipitation forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mm"
		]
	},
	"weather.title.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Short weather forecast",
		"type":"string",
		"read":true,
		"write":false
	},
	"value.precipitation.day.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Precipitation day forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mm"
		]
	},
	"value.precipitation.night.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"Precipitation night forecast for *, replace * with 0=today, 1=tomorrow, and so on",
		"type":"number",
		"read":true,
		"write":false,
		"unit":[
			"mm"
		]
	},
	"weather.icon.forecast.*":{
		"category":[
			"other",
			"weather",
			"value"
		],
		"desc":"URL to icon forecast for *, replace * with 1=tomorrow, 2=day after tomorrow, and so on",
		"type":"string",
		"read":true,
		"write":false
	},
	"info.ip":{
		"category":[
			"info"
		],
		"desc":"IP address of device",
		"type":"string",
		"read":true,
		"write":false
	},
	"info.mac":{
		"category":[
			"info"
		],
		"desc":"MAC address of device",
		"type":"string",
		"read":true,
		"write":false
	},
	"info.name":{
		"category":[
			"info"
		],
		"desc":"Name of *, could be the name of a device, service or what ever ",
		"type":"string",
		"read":true,
		"write":false
	},
	"info.address":{
		"category":[
			"info"
		],
		"desc":"Technical address, for KNX or something like this, NOT a geo location",
		"type":"string",
		"read":true,
		"write":false
	},
	"info.port":{
		"category":[
			"info"
		],
		"desc":"Network port",
		"type":"number",
		"read":true,
		"write":false
	},
	"info.standby":{
		"category":[
			"info"
		],
		"desc":"Shows true if the device is in stand-by mode",
		"type":"boolean",
		"read":true,
		"write":false
	},
	"info.status":{
		"category":[
			"info"
		],
		"desc":"Shows state of device or service",
		"type":"string",
		"read":true,
		"write":false
	},
	"info.display":{
		"category":[
			"info"
		],
		"desc":"Information will be shown on device display",
		"type":"string",
		"read":true,
		"write":false
	},
	"date.start":{
		"category":[
			"info",
			"date"
		],
		"desc":"Start at date",
		"type":"string,number",
		"read":true,
		"write":true
	},
	"date.end":{
		"category":[
			"info",
			"date"
		],
		"desc":"End at date",
		"type":"string,number",
		"read":true,
		"write":true
	},
	"url":{
		"category":[
			"other"
		],
		"desc":"URL to what ever",
		"type":"string",
		"read":true,
		"write":true
	},
	"url.icon":{
		"category":[
			"other"
		],
		"desc":"URL to icon ",
		"type":"string",
		"read":true,
		"write":true
	},
	"url.cam":{
		"category":[
			"other"
		],
		"desc":"URL to webcam",
		"type":"string",
		"read":true,
		"write":true
	},
	"url.blank":{
		"category":[
			"other"
		],
		"desc":"Open URL in new window",
		"type":"string",
		"read":true,
		"write":true
	},
	"url.same":{
		"category":[
			"other"
		],
		"desc":"Open URL in this window",
		"type":"string",
		"read":true,
		"write":true
	},
	"url.audio":{
		"category":[
			"other"
		],
		"desc":"URL to audio",
		"type":"string",
		"read":true,
		"write":true
	},
	"text.phone":{
		"category":[
			"other",
			"general"
		],
		"desc":"Phonenumber",
		"type":"string",
		"read":true,
		"write":true
	},
	"adapter.messagebox":{
		"category":[
			"other",
			"general"
		],
		"desc":"Used to send messages to adapter instance, like e-mail or pushover",
		"type":"object",
		"read":true,
		"write":true
	},
	"adapter.wakeup":{
		"category":[
			"other",
			"general"
		],
		"desc":"Used to start adapter instance if it is stopped",
		"type":"boolean",
		"read":true,
		"write":true
	}
};

module.exports = {roles: roles_definition};
