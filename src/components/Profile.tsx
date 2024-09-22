import { Person } from "../types/Person";
import Avatar from "./Avatar";
import { Card } from "./Card";

const person1: Person = {
  name: "Lin Lanying",
  theme: {
    backgroundColor: "white",
    color: "black",
  },
  imgUrl: "https://i.imgur.com/1bX5QH6.jpg",
  imageId: "1bX5QH6",
  imageSize: "",
};

const person2: Person = {
  name: "Aklilu Lemma",
  theme: {
    backgroundColor: "white",
    color: "black",
  },
  imgUrl: "https://i.imgur.com/1bX5QH6.jpg",
  imageId: "OKS67lh",
  imageSize: "",
};

const person3: Person = {
  name: "Katsuko Saruhashi",
  theme: {
    backgroundColor: "white",
    color: "black",
  },
  imgUrl: "https://i.imgur.com/1bX5QH6.jpg",
  imageId: "YfeOqp2",
  imageSize: "",
};
export default function Profile() {
  return (
    <>
      <Card>
        <Avatar person={person1} size={100} />
      </Card>
      {/* <Avatar person={person2} size={0} />
      <Avatar person={person3} size={50} /> */}
    </>
  );
}
