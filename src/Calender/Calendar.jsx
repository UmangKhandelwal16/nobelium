import React, { useState } from "react";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const monthDays = new Array(31).fill(null).map((_, index) => index + 1);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <h1>Calendar</h1>
      <table>
        <thead>
          <tr>
            {weekdays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthDays.map((day) => (
            <td key={day}>
              <button
                className={selectedDate === day ? "selected-date" : ""}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </button>
            </td>
          ))}
        </tbody>
      </table>
      <style>{`
        table {
          border-collapse: collapse;
          width: 100%;
        }

        th,
        td {
          border: 1px solid black;
          padding: 10px;
          text-align: center;
        }

        th {
          background-color: lightgray;
        }

        button {
          border: none;
          background-color: white;
          cursor: pointer;
        }

        button:hover {
          background-color: lightgray;
        }

        .selected-date {
          background-color: lightblue;
        }
      `}</style>
    </div>
  );
}

export default Calendar;
