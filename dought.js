<script>
    const apiKey = "ba10137d5f18fcb28e192ad009428f28";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".btn-soft");
    const dateElement = document.querySelector(".text-white-50"); // Selects the date paragraph

    function updateDate() {
        const now = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        // Formats to "Wednesday, July 7" or similar based on locale
        dateElement.innerHTML = now.toLocaleDateString('en-US', options);
    }

    async function fetchWeather(city) {
        if (!city) return;

        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();

            if (response.status == 404) {
                alert("City not found!");
                return;
            }

            // Update UI
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp-soft").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
            
            // Update the Day/Date
            updateDate();

            // Weather Icon Logic
            const icon = document.querySelector(".weather-icon1");
            const mainWeather = data.weather[0].main;
            
            const weatherImages = {
                "Clouds": "clouds.png",
                "Clear": "clear.png",
                "Rain": "rain.png",
                "Drizzle": "drizzle.png",
                "Mist": "mist.png",
                "Snow": "snow.png"
            };

            icon.src = `./image/${weatherImages[mainWeather] || 'clear.png'}`;
            icon.style.display = "block"; 

        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    }

    // Initialize with current date on load
    updateDate();

    searchBtn.addEventListener("click", () => {
        fetchWeather(searchBox.value);
    });

    searchBox.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            fetchWeather(searchBox.value);
        }
    });
</script>