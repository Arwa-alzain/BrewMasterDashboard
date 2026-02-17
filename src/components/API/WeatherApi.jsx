import { useEffect, useState } from "react";
import { Loader2, MapPin, Thermometer, Wind, Clock } from "lucide-react";

function WeatherApi() {
  const [weatherData, setWeatherData] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchType, setSearchType] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  // Search cities
  useEffect(() => {
    if (searchType.trim().length < 1) {
      setCities([]);
      setShowDropDown(false);
      return;
    }

    setSearchLoading(true);
    const timer = setTimeout(() => {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchType}&count=5&language=en&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.results && data.results.length > 0) {
            setCities(data.results);
            setShowDropDown(true);
          } else {
            setCities([]);
            setShowDropDown(false);
          }
          setSearchLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching city data:", err);
          setSearchLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchType]);

  // Fetch weather for selected city
  const fetchWeather = (city) => {
    setLoading(true);
    setShowDropDown(false);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData({
          temperature: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          weathercode: data.current_weather.weathercode,
          time: data.current_weather.time,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchType(city.name);
    fetchWeather(city);
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h2 className="weather-title">Weather App</h2>

        {/* Search Bar */}
        <div className="searchContainer">
          <input
            type="text"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            placeholder="Search for a city..."
            className="searchInput"
          />
          {searchLoading && <Loader2 size={20} className="searchSpinner" />}
        </div>

        {/* Dropdown List */}
        {showDropDown && cities.length > 0 && (
          <div className="dropdown">
            {cities.map((city) => (
              <div
                key={city.id || city.name}
                onClick={() => handleCitySelect(city)}
                className="dropdownItem"
              >
                <MapPin size={16} className="weather-icon" />
                <div>
                  <p className="cityName">{city.name}</p>
                  <p className="cityInfo">
                    {city.country} {city.admin1 ? `• ${city.admin1}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected City Display */}
        {selectedCity && (
          <div className="selectedCity">
            <MapPin size={18} className="weather-icon" />
            <span>
              {selectedCity.name}, {selectedCity.country}
            </span>
          </div>
        )}

        {/* Weather Display */}
        {loading ? (
          <div className="loadingContainer">
            <Loader2 size={40} className="weather-spinner" />
            <p>Loading weather...</p>
          </div>
        ) : weatherData ? (
          <div className="weatherInfo">
            <div className="weatherItem">
              <Thermometer size={24} className="weather-icon" />
              <div>
                <p className="weather-label">Temperature</p>
                <p className="weather-value">{weatherData.temperature}°C</p>
              </div>
            </div>
            <div className="weatherItem">
              <Wind size={24} className="weather-icon" />
              <div>
                <p className="weather-label">Wind Speed</p>
                <p className="weather-value">{weatherData.windspeed} km/h</p>
              </div>
            </div>
            <div className="weatherItem">
              <Clock size={24} className="weather-icon" />
              <div>
                <p className="weather-label">Time</p>
                <p className="weather-value">{weatherData.time}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-placeholder">
            <p>Search for a city to see the weather</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApi;

