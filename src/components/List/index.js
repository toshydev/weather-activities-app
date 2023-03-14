import "./List.css";

export default function List({ activities, onDeleteActivity }) {
  return (
    <ul className="activitiesList">
      {activities.map((activity) => (
        <li className="activitiesList__listItem" key={activity.id}>
          {activity.name}
          <button
            className="activitiesList__deleteButton"
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
