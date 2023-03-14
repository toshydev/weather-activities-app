import "./App.css";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";
import useFetch from "./hooks/useFetch";
import LocationSelector from "./components/LocationSelector";

const URL = "https://example-apis.vercel.app/api/weather/europe";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(true);
  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "europe",
  });
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );
  const weatherData = useFetch(URL);
  console.log(weatherData);
  function handleAddActivity(newActivityName, isForGoodWeather) {
    setActivities([
      ...activities,
      { name: newActivityName, isForGoodWeather: isForGoodWeather, id: uid() },
    ]);
  }

  function handleSetLocation(newLocation) {
    setLocation(newLocation);
  }

  return (
    <div className="App">
      <LocationSelector onSetLocation={handleSetLocation} />
      <Form onAddActivity={handleAddActivity} />
      <List activities={filteredActivities} />
    </div>
  );
}

export default App;
