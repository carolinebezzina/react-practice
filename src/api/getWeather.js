export function getWeather(url, lat, long, apikey) {
    return fetch(`${url}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apikey}`)
    .then(res => handleResponse(res))
    .then(weather => {
        return weather.weather[0].description;
    })
};
    
export function handleResponse (response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Please Enable your Location in your browser!");
    }
};