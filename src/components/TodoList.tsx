import { Person } from "../types/Person";
import { getImageUrl } from "../utils/ImageUrl";

const person: Person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  imgUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  imageId: "7vQD0fP",
  imageSize: "s",
};

const today: Date = new Date();
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ja-JP", { weekday: "long" }).format(date);
}

export default function TodoList(): JSX.Element {
  return (
    <div style={person.theme}>
      <h1>
        {person.name}'s To Do List for {formatDate(today)}
      </h1>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
