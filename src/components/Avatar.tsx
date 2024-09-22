import { Person } from "../types/Person";
import { getImageUrl } from "../utils/ImageUrl";

type AvatarProps = {
  person: Person;
  size: number;
};

export default function Avatar({
  person,
  size = 100,
}: AvatarProps): JSX.Element {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
