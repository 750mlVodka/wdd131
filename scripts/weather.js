function calculateWindChill(temperature, windSpeed) {
    return (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2);
}

const temperature = 45;
const windSpeed = 10;

let windChill = "N/A";
if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed) + " °F";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("temperature").textContent = `${temperature} °F`;
    document.getElementById("conditions").textContent = "Clear";
    document.getElementById("wind").textContent = `${windSpeed} mph`;
    document.getElementById("windChill").textContent = `${windChill}`;
})