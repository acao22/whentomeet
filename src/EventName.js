import React from 'react';

const EventName = () => {
  return (
    <div className = "eventname">
      <input
        type="text"
        placeholder = "enter event name"
        required
      />
    </div>
  );
};

export default EventName;
