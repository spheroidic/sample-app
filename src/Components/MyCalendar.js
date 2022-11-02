import "./MyCalendar.css";

export const MyCalendar = () => {
  const startTime = 8;
  const endTime = 22;
  const hours = Array.from({length: endTime - startTime}, (x, i) => i + startTime);

  return (
    <div>
      <h2>Calendar</h2>
      <div className="testday">
        {hours.map(hour => <div className="testhour" key={hour}>{hour}</div>)}
      </div>
    </div>
  );
};