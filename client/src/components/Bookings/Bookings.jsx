import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 
import { Booking } from "../Booking/Booking";


export const Bookings = () => {
    const store = bookingsStore();
    return (
        <div>
      <h2>Bookings</h2>
      {store.bookings && store.bookings.map(booking => {
        return <Booking booking={booking} key={booking._id}/>;
      })}
    </div>
    );
}