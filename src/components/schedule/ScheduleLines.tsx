const ScheduleLines = () => {
  const times = [
    "07 am",
    "08 am",
    "09 am",
    "10 am",
    "11 am",
    "12 pm",
    "01 pm",
    "02 pm",
    "03 pm",
    "04 pm",
    "05 pm",
    "06 pm",
  ];
  return (
    <>
      {times.map((time) => (
        <div
          className="flex flex-row items-center"
          key={time}
          aria-hidden="true"
        >
          <p className="font-bold text-stone-300">{time}</p>
          <div className="ml-5 h-0 grow border border-stone-300"></div>
        </div>
      ))}
    </>
  );
};

export default ScheduleLines;
