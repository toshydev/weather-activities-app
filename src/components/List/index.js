export default function List({ activities, onDeleteActivity }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          <button
            type="button"
            aria-label="delete activity"
            onClick={() => onDeleteActivity(activity.id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
