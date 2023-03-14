export default function Header({ weather }) {
  return (
    <header>
      <h1>
        <span>{weather.condition}</span>
        {weather.temperature}
      </h1>
    </header>
  );
}
