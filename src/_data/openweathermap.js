const weather = require('../lib/weather');

const dummy = {
    "lat": 0.0,
    "lon": 0.0,
    "timezone": "Europe/London",
    "timezone_offset": 0,
    "daily": [
        {
            "dt": 1610798400,
            "sunrise": 1610783719,
            "sunset": 1610814150,
            "temp": {
                "day": 5.73,
                "min": 0.64,
                "max": 6.68,
                "night": 3.16,
                "eve": 3.72,
                "morn": 0.78
            },
            "feels_like": {
                "day": -1.96,
                "night": -1.64,
                "eve": -0.35,
                "morn": -5.58
            },
            "pressure": 1015,
            "humidity": 97,
            "dew_point": 5.29,
            "wind_speed": 9.47,
            "wind_deg": 199,
            "weather": [
                {
                    "id": 616,
                    "main": "Snow",
                    "description": "rain and snow",
                    "icon": "13d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 3.52,
            "snow": 1.24,
            "uvi": 0.18
        },
        {
            "dt": 1610884800,
            "sunrise": 1610870066,
            "sunset": 1610900644,
            "temp": {
                "day": 4.91,
                "min": 0.85,
                "max": 5.19,
                "night": 0.85,
                "eve": 2.35,
                "morn": 1.46
            },
            "feels_like": {
                "day": -0.85,
                "night": -2.96,
                "eve": -1.58,
                "morn": -3.95
            },
            "pressure": 1025,
            "humidity": 82,
            "dew_point": 2.18,
            "wind_speed": 5.86,
            "wind_deg": 312,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 0.65
        },
        {
            "dt": 1610971200,
            "sunrise": 1610956410,
            "sunset": 1610987140,
            "temp": {
                "day": 5.69,
                "min": 0.42,
                "max": 7.92,
                "night": 7.92,
                "eve": 5.08,
                "morn": 0.64
            },
            "feels_like": {
                "day": 0.62,
                "night": -0.43,
                "eve": -1.51,
                "morn": -3.33
            },
            "pressure": 1023,
            "humidity": 81,
            "dew_point": 2.85,
            "wind_speed": 5.02,
            "wind_deg": 253,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 78,
            "pop": 1,
            "rain": 5.19,
            "uvi": 0.81
        },
        {
            "dt": 1611057600,
            "sunrise": 1611042751,
            "sunset": 1611073636,
            "temp": {
                "day": 8.61,
                "min": 8.47,
                "max": 9.2,
                "night": 8.64,
                "eve": 8.47,
                "morn": 9.15
            },
            "feels_like": {
                "day": 0.35,
                "night": -1.43,
                "eve": -1.4,
                "morn": 1.12
            },
            "pressure": 1004,
            "humidity": 91,
            "dew_point": 7.25,
            "wind_speed": 10.88,
            "wind_deg": 225,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 4.51,
            "uvi": 0.29
        },
        {
            "dt": 1611144000,
            "sunrise": 1611129090,
            "sunset": 1611160134,
            "temp": {
                "day": 8.56,
                "min": 4.83,
                "max": 9.15,
                "night": 4.83,
                "eve": 9.15,
                "morn": 8.16
            },
            "feels_like": {
                "day": -1.24,
                "night": -2.39,
                "eve": -1.3,
                "morn": -0.78
            },
            "pressure": 985,
            "humidity": 94,
            "dew_point": 7.69,
            "wind_speed": 13.22,
            "wind_deg": 196,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 15.54,
            "uvi": 0.2
        },
        {
            "dt": 1611230400,
            "sunrise": 1611215426,
            "sunset": 1611246633,
            "temp": {
                "day": 5.76,
                "min": 2.42,
                "max": 5.86,
                "night": 4.75,
                "eve": 3.97,
                "morn": 2.84
            },
            "feels_like": {
                "day": -2.59,
                "night": -0.49,
                "eve": -1.2,
                "morn": -5.07
            },
            "pressure": 991,
            "humidity": 76,
            "dew_point": 1.96,
            "wind_speed": 9.5,
            "wind_deg": 254,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 33,
            "pop": 0.86,
            "rain": 1.36,
            "uvi": 1
        },
        {
            "dt": 1611316800,
            "sunrise": 1611301759,
            "sunset": 1611333133,
            "temp": {
                "day": 4.35,
                "min": 0.54,
                "max": 4.35,
                "night": 1.62,
                "eve": 1.26,
                "morn": 0.59
            },
            "feels_like": {
                "day": -2.14,
                "night": -4.93,
                "eve": -4.88,
                "morn": -3.97
            },
            "pressure": 994,
            "humidity": 75,
            "dew_point": 0.45,
            "wind_speed": 6.5,
            "wind_deg": 276,
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": 45,
            "pop": 0.54,
            "snow": 0.3,
            "uvi": 1
        },
        {
            "dt": 1611403200,
            "sunrise": 1611388090,
            "sunset": 1611419635,
            "temp": {
                "day": 3.21,
                "min": -1.85,
                "max": 3.95,
                "night": 1.54,
                "eve": 2.33,
                "morn": -1.85
            },
            "feels_like": {
                "day": -0.73,
                "night": -5.9,
                "eve": -3.05,
                "morn": -6.15
            },
            "pressure": 1006,
            "humidity": 78,
            "dew_point": -0.85,
            "wind_speed": 2.74,
            "wind_deg": 196,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "rain": 4.71,
            "uvi": 1
        }
    ]
}

module.exports = async () => {
    const data = await weather(dummy);
    return data;
}
