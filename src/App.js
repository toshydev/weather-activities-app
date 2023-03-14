import "./App.css";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";
import useFetch from "./hooks/useFetch";

// weather-api-url: https://example-apis.vercel.app/api/weather/europe

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(true);
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  function handleAddActivity(newActivityName, isForGoodWeather) {
    setActivities([
      ...activities,
      { name: newActivityName, isForGoodWeather: isForGoodWeather, id: uid() },
    ]);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredActivities} />
    </div>
  );
}

export default App;
