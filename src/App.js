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
  const [weather, setWeather] = useState(weatherData);
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  console.log(weatherData);

  function handleAddActivity(newActivityName, isForGoodWeather) {
    setActivities([
      ...activities,
      { name: newActivityName, isForGoodWeather: isForGoodWeather, id: uid() },
    ]);
  }

  return (
    <div className="App">
      <Header weather={weather} />
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredActivities} />
    </div>
  );
}

export default App;
