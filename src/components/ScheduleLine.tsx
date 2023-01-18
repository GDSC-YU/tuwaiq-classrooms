interface Props {
  time: string;
}

export default function ScheduleLine({ time }: Props) {
  return (
    <div className="flex flex-row items-center">
      <p className="font-cairo font-bold text-black/40">{time}</p>
      <div className="ml-5 h-0 grow border border-black/40"></div>
    </div>
  );
}
