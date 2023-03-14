export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const name = data.name;
    const isForGoodWeather = event.target.isForGoodWeather.checked;

    onAddActivity(name, isForGoodWeather);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activities</h1>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="isForGoodWeather">Good-weather activity: </label>
        <input type="checkbox" id="isForGoodWeather" name="isForGoodWeather" />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
