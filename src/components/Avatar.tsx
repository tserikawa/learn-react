export default function Avatar(): JSX.Element {
  const avater: string = "https://i.imgur.com/7vQD0fPs.jpg";
  const description: string = "Gregorio Y. Zara";

  return <img className="avatar" src={avater} alt={description} />;
}
