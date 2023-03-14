export default function Header({ condition, temperature, isGoodWeather }) {
  return (
    <header>
      <h1>
        <span>{condition}</span>
        <span>{temperature}°C</span>
      </h1>
      <h2>
        {isGoodWeather
          ? "The weather is awesome / Go outside and:"
          : "Bad weather outside! / Here's what you can do now:"}
      </h2>
    </header>
  );
}
