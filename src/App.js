import './App.css';
import { MyCalendar } from "./Components/MyCalendar"

function App() {
  return (
    <div className="grid-container">
      <p className="paragraph">Left-side placeholder</p>
      <MyCalendar className="mycalendar" />
    </div>
  );
}

export default App;
