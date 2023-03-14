export default function LocationSelector({ onSetLocation }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSetLocation(data.location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">Select a location: </label>
      <select id="location" name="location">
        <option value="europe">Europe</option>
        <option value="arctic">Arctic</option>
        <option value="sahara">Sahara</option>
        <option value="rainforest">Rainforest</option>
      </select>
      <button type="submit">Set location</button>
    </form>
  );
}
