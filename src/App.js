import "./App.css";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./components/List";
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";

const URL = "https://example-apis.vercel.app/api/weather/europe";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const weatherData = useFetch(URL);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    console.log("test");
    setWeather(weatherData);
  }, [weatherData]);

  console.log("weather:", weather);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  function handleAddActivity(newActivityName, isForGoodWeather) {
    setActivities([
      ...activities,
      { name: newActivityName, isForGoodWeather: isForGoodWeather, id: uid() },
    ]);
  }

  return (
    <div className="App">
      <Header condition={weather.condition} temperature={weather.temperature} />
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredActivities} />
    </div>
  );
}

export default App;
