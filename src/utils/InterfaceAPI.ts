export interface IWeatherDataAPI {
    config: any;
    data: IWeatherData;
    headers: any;
    request: any;
    status: number | null;
    statusText: string | null;
}

interface IWeatherData {
    address: string | null;
    alerts: any[];
    currentConditions: ICurrentConditions;
    days: IDay[];
    description: string | null;
    latitude: number | null;
    longitude: number | null;
    queryCost: number | null;
    resolvedAddress: string | null;
    timezone: string | null;
    tzoffset: number | null;
}

interface ICurrentConditions {
    cloudcover: number | null;
    conditions: string | null;
    datetime: string | null;
    datetimeEpoch: number | null;
    dew: number | null;
    feelslike: number | null;
    humidity: number | null;
    icon: string | null;
    moonphase: number | null;
    precip: number | null;
    precipprob: number | null;
    preciptype: string[];
    pressure: number | null;
    severerisk: number | null;
    snow: number | null;
    snowdepth: number | null;
    solarenergy: number | null;
    solarradiation: number | null;
    source: string | null;
    stations: string[];
    sunrise: string | null;
    sunriseEpoch: number | null;
    sunset: string | null;
    sunsetEpoch: number | null;
    temp: number | null;
    uvindex: number | null;
    visibility: number | null;
    winddir: number | null;
    windgust: number | null;
    windspeed: number | null;
}

export interface IDay {
    cloudcover: number | null;
    conditions: string | null;
    datetime: string | null;
    datetimeEpoch: number | null;
    description: string | null;
    dew: number | null;
    feelslike: number | null;
    feelslikemax: number | null;
    feelslikemin: number | null;
    hours: IHour[];
    humidity: number | null;
    icon: string | null;
    moonphase: number | null;
    precip: number | null;
    precipcover: number | null;
    precipprob: number | null;
    preciptype: string[];
    pressure: number | null;
    severerisk: number | null;
    snow: number | null;
    snowdepth: number | null;
    solarenergy: number | null;
    solarradiation: number | null;
    source: string | null;
    stations: string[];
    sunrise: string | null;
    sunriseEpoch: number | null;
    sunset: string | null;
    sunsetEpoch: number | null;
    temp: number | null;
    tempmax: number | null;
    tempmin: number | null;
    uvindex: number | null;
    visibility: number | null;
    winddir: number | null;
    windgust: number | null;
    windspeed: number | null;
}

interface IHour {
    cloudcover: number | null;
    conditions: string | null;
    datetime: string | null;
    datetimeEpoch: number | null;
    dew: number | null;
    feelslike: number | null;
    humidity: number | null;
    icon: string | null;
    precip: number | null;
    precipprob: number | null;
    preciptype: number | null;
    pressure: number | null;
    severerisk: number | null;
    snow: number | null;
    snowdepth: number | null;
    solarenergy: number | null;
    solarradiation: number | null;
    source: string | null;
    stations: string[];
    temp: number | null;
    uvindex: number | null;
    visibility: number | null;
    winddir: number | null;
    windgust: number | null;
    windspeed: number | null;
}