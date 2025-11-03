
const inputItems = {
    zipInputField: document.getElementById("zip-input-field"),
    zipInputFieldSubBtn: document.getElementById("submit-button"),
}

const elements = {
    weatherIconImage: document.getElementById("weather-icon-image"),
    temperature: document.getElementById("temperature"), highLow: document.getElementById("high-low"), chanceOfRain: document.getElementById("chance-of-rain"), cityName: document.getElementById("city-name")
    ,

}

eventsArray = ["click", "keydown"]

function startEventListeners(item, eventType) {

    item.addEventListener(eventType, async () => {
        if (event.type === "keydown") {
            if (event.key === "Enter") {

                const weatherData = await getWeather(getZipcodeInput())
                displayWeatherData(weatherData)
            }

        }
        else if (event.type === "click") {
            if (item.id === "submit-button") {
                console.log(`${eventType} on ${item.id}`)
                const weatherData = await getWeather(getZipcodeInput())
                displayWeatherData(weatherData)

            }
            else { }
        }

        // submitZipCode()

        // if 
    })



}

function getZipcodeInput() {
    const zipCode = inputItems.zipInputField.value.trim()
    inputItems.zipInputField.value = "";
    return zipCode;

}
async function getWeather(zipcode) {
    const api_key = API_KEY
    console.log(api_key)
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${zipcode}`)
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    return jsonResponse
}

function displayWeatherData(weatherData) {


    elements.weatherIconImage.src = weatherData.current.condition.icon


    elements.temperature.innerHTML = `${weatherData.current.temp_f}&deg;`
}

for (const key in inputItems) {

    const item = inputItems[key]
    if (!item) continue

    for (const eventType of eventsArray) {

        startEventListeners(item, eventType)
    }

}