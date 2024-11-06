document.addEventListener("DOMContentLoaded", () => {
    // Set sidebar values
    const sidebarData = {
        cityName: "Chennai, India",
        date: "Today, 7th Nov",
        sunriseTime: "07:19",
        sunsetTime: "19:32",
        temperature: "32°",
        weatherStatus: "Sunny"
    };

    document.getElementById("city-name").textContent = sidebarData.cityName;
    document.getElementById("date").textContent = sidebarData.date;
    document.getElementById("sunrise-time").textContent = sidebarData.sunriseTime;
    document.getElementById("sunset-time").textContent = sidebarData.sunsetTime;
    document.getElementById("temperature").textContent = sidebarData.temperature;
    document.getElementById("weather-status").textContent = sidebarData.weatherStatus;

    // Humidity dynamic value setup (adjustable percentage)
    const humidityPercent = 30;
    const humidityStatusElement = document.getElementById("humidity-status");
    const humidityPercentElement = document.getElementById("humidity-percent");
    const levelBar = document.getElementById("level-bar");

    humidityPercentElement.textContent = `${humidityPercent}%`;
    levelBar.style.width = `${humidityPercent}%`;

    if (humidityPercent < 40) {
        humidityStatusElement.textContent = "good";
        levelBar.style.backgroundColor = "green";
    } else if (humidityPercent >= 40 && humidityPercent < 70) {
        humidityStatusElement.textContent = "normal";
        levelBar.style.backgroundColor = "yellow";
    } else {
        humidityStatusElement.textContent = "bad";
        levelBar.style.backgroundColor = "red";
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Dynamic data (can be fetched from an API or backend)
    const weatherData = {
        humidity:90,
        windSpeed: 8,
        uvIndex: 4,
        precipitation: 1.4,
        feelsLike: 30,
        rainChance: 42,
    };

    // Get DOM elements
    const humidityValue = document.getElementById("humidity-value");
    const humidityStatus = document.getElementById("humidity-status");
    const humidityBar = document.getElementById("humidity-bar");

    const windSpeed = document.getElementById("wind-speed");
    const windStatus = document.getElementById("wind-status");
    const windBar = document.getElementById("wind-bar");

    const uvIndex = document.getElementById("uv-index");
    const uvStatus = document.getElementById("uv-status");
    const uvBar = document.getElementById("uv-bar");

    const precipitation = document.getElementById("precipitation");
    const precipStatus = document.getElementById("precip-status");
    const precipBar = document.getElementById("precip-bar");

    const feelsLike = document.getElementById("feels-like");
    const feelsLikeStatus = document.getElementById("feels-like-status");
    const feelsLikeBar = document.getElementById("feels-like-bar");

    const rainChance = document.getElementById("rain-chance");
    const rainChanceStatus = document.getElementById("rain-chance-status");
    const rainChanceBar = document.getElementById("rain-chance-bar");

    // Update humidity
    humidityValue.textContent = `${weatherData.humidity}%`;
    if (weatherData.humidity < 40) {
        humidityStatus.textContent = "Good";
        humidityBar.style.backgroundColor = "green";
    } else if (weatherData.humidity >= 40 && weatherData.humidity < 70) {
        humidityStatus.textContent = "Normal";
        humidityBar.style.backgroundColor = "yellow";
    } else {
        humidityStatus.textContent = "Bad";
        humidityBar.style.backgroundColor = "red";
    }
    humidityBar.style.width = `${weatherData.humidity}%`;

    // Update wind speed
    windSpeed.textContent = `${weatherData.windSpeed} km/h`;
    if (weatherData.windSpeed < 10) {
        windStatus.textContent = "Low";
        windBar.style.backgroundColor = "green";
    } else if (weatherData.windSpeed >= 10 && weatherData.windSpeed < 20) {
        windStatus.textContent = "Normal";
        windBar.style.backgroundColor = "yellow";
    } else {
        windStatus.textContent = "High";
        windBar.style.backgroundColor = "red";
    }
    windBar.style.width = `${weatherData.windSpeed * 5}%`;

    // Update UV index
    uvIndex.textContent = weatherData.uvIndex;
    if (weatherData.uvIndex <= 2) {
        uvStatus.textContent = "Low";
        uvBar.style.backgroundColor = "green";
    } else if (weatherData.uvIndex > 2 && weatherData.uvIndex <= 6) {
        uvStatus.textContent = "Medium";
        uvBar.style.backgroundColor = "yellow";
    } else {
        uvStatus.textContent = "High";
        uvBar.style.backgroundColor = "red";
    }
    uvBar.style.width = `${weatherData.uvIndex * 20}%`;

    // Update Precipitation
    precipitation.textContent = `${weatherData.precipitation} cm`;
    if (weatherData.precipitation < 2) {
        precipStatus.textContent = "Low";
        precipBar.style.backgroundColor = "green";
    } else if (weatherData.precipitation >= 2 && weatherData.precipitation < 5) {
        precipStatus.textContent = "Medium";
        precipBar.style.backgroundColor = "yellow";
    } else {
        precipStatus.textContent = "High";
        precipBar.style.backgroundColor = "red";
    }
    precipBar.style.width = `${weatherData.precipitation * 10}%`;

    // Update Feels Like
    feelsLike.textContent = `${weatherData.feelsLike}°`;
    if (weatherData.feelsLike < 25) {
        feelsLikeStatus.textContent = "Cool";
        feelsLikeBar.style.backgroundColor = "green";
    } else if (weatherData.feelsLike >= 25 && weatherData.feelsLike < 35) {
        feelsLikeStatus.textContent = "Normal";
        feelsLikeBar.style.backgroundColor = "yellow";
    } else {
        feelsLikeStatus.textContent = "Hot";
        feelsLikeBar.style.backgroundColor = "red";
    }
    feelsLikeBar.style.width = `${(weatherData.feelsLike - 25) * 2}%`;

    // Update Rain Chance
    rainChance.textContent = `${weatherData.rainChance}%`;
    if (weatherData.rainChance < 20) {
        rainChanceStatus.textContent = "Low";
        rainChanceBar.style.backgroundColor = "green";
    } else if (weatherData.rainChance >= 20 && weatherData.rainChance <= 60) {
        rainChanceStatus.textContent = "Medium";
        rainChanceBar.style.backgroundColor = "yellow";
    } else {
        rainChanceStatus.textContent = "High";
        rainChanceBar.style.backgroundColor = "red";
    }
    rainChanceBar.style.width = `${weatherData.rainChance}%`;
});
