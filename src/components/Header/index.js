export default function Header({ condition, temperature }) {
  return (
    <header>
      <h1>
        <span>{condition}</span>
        <span>{temperature}°C</span>
      </h1>
    </header>
  );
}
