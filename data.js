var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1983868463413092,
        "pitch": -0.04679922276930881,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.021569247256529422,
          "pitch": -0.2522544132758213,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.703952435535502,
          "pitch": -0.0126059093161075,
          "title": "Welcome to NUS!",
          "text": "Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.11008125900519516,
        "pitch": -0.23037157938582453,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": 0.09907691789661399,
          "pitch": 0.04763579265234519,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.752572928826762,
          "pitch": 0.041360103348603516,
          "rotation": 11.780972450961727,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.114989960934512,
          "pitch": -0.1416841701294711,
          "title": "Sculpture",
          "text": "A very cool one&nbsp;"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.136711294266121,
        "pitch": -0.09727470854500808,
        "fov": 1.3793455132008117
      },
      "linkHotspots": [
        {
          "yaw": -2.856772933529836,
          "pitch": 0.07152837730283146,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.073890071068158,
          "pitch": -0.2307108578906849,
          "title": "Spinelli Coffee Company&nbsp;",
          "text": "For an insanely good cup of coffee"
        },
        {
          "yaw": -0.13727898537118222,
          "pitch": 0.23452497092865698,
          "title": "Study space",
          "text": ""
        }
      ]
    }
  ],
  "name": "ENG NUS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
