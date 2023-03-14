import "./App.css";
import Form from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
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
