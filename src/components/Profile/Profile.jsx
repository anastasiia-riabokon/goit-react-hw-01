export default function Profile({ name, tag, location, image, stats }) {
  const statsArray = Object.entries(stats);
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        {statsArray.map(([key, value]) => (
          <li key={key}>
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
