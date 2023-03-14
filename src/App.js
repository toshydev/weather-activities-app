import "./App.css";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./components/List";
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import LocationSelector from "./components/LocationSelector";

const URL = "https://example-apis.vercel.app/api/weather/rainforest";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const weatherData = useFetch(URL);
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "europe",
  });

  useEffect(() => {
    setWeather(weatherData);
  }, [weatherData]);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather?.isGoodWeather
  );

  function handleAddActivity(newActivityName, isForGoodWeather) {
    setActivities([
      ...activities,
      { name: newActivityName, isForGoodWeather: isForGoodWeather, id: uid() },
    ]);
  }

  function handleDeleteActivity(idToDelete) {
    setActivities(activities.filter((activity) => activity.id !== idToDelete));
  }

  function handleSetLocation(newLocation) {
    setLocation(newLocation);
  }

  return (
    <div className="App">
      <LocationSelector onSetLocation={handleSetLocation} />
      <Header
        condition={weather?.condition}
        temperature={weather?.temperature}
        isGoodWeather={weather?.isGoodWeather}
      />
      <List
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
