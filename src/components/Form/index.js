export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activities</h1>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required/>
        <label htmlFor="isGoodWeather">Good-weather activity: </label>
        <input type="checkbox" id="isGoodWeather" name="isGoodWeather" />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
