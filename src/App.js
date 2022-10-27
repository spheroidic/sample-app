import './App.css';
import { MyCalendar } from "./Components/MyCalendar"

function App() {
  return (
    <>
      <p className="paragraph">This should go on the left</p>
      <MyCalendar className="calendar" />
    </>
  );
}

export default App;
