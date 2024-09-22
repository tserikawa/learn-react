type ClockProps = {
  color: string;
  time: string;
};

export default function Clock({ color, time }: ClockProps): JSX.Element {
  return <h1 style={{ color: color }}>{time}</h1>;
}
