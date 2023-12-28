import Dates from './Dates';
import Times from './Times';
const NewEvent = () => {
  return (
    <div className = "newevent">
      <ul>
        <li>
          <Dates />
        </li>
        <li>
          <Times />
        </li>
      </ul>
    </div>
  );
};

export default NewEvent;
