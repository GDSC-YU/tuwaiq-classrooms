interface Props {
  time: string;
}

export default function ScheduleLine({ time }: Props) {
  return (
    <div className="flex flex-row items-center">
      <p className="text-black/40 font-cairo font-bold">{time}</p>
      <div className="grow border border-black/40 h-0 ml-5"></div>
    </div>
  );
}
