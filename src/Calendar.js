import React, {useState} from 'react';
import './styles/Calendar.css';

const Calendar = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const toggleTimeSlot = (timeSlot) => {
    setSelectedTimes(prev => {
      if (prev.includes(timeSlot)) {
        return prev.filter(time => time !== timeSlot);
      } else {
        //add to selected times
        return [...prev, timeSlot];
      }
    });
  };

  const renderTimeSlots = () => {
    const timeSlots = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']; // Example time slots
    return timeSlots.map(slot => (
        <div
            key={slot}
            onClick={() => toggleTimeSlot(slot)}
            className={`time-slot ${selectedTimes.includes(slot) ? 'selected' : ''}`}
        >
          {slot}
        </div>
    ));
  };

  return (
      <div className="calendar-container">
        <h2 className="calendar-header">Select Available Times</h2>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {renderTimeSlots()}
        </div>
      </div>
  );
};

export default Calendar;
