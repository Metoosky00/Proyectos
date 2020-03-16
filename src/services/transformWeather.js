
const transformWeather=(weather_data)=>{
    const [weather]=weather_data.weather
    const {humidity, temp}=weather_data.main
    const {speed}=weather_data.wind
    const {description}=weather

    const data={
        humidity,
        temp,
        weatherState:description,
        wind: speed
    }

    return data;
}

export default transformWeather;