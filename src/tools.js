export async function getCurrentWeather(){
  
    const weather = {
        temperature: "22",
        unit: "F",
        forecast: "Overcast, calm"
    }

    return JSON.stringify(weather) 
}
export async function getLocation(){
    return "Park City, UT"
}