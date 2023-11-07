import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 
import "../Booking/Booking.css";

export const Booking = ({ booking }) => {
    const store = bookingsStore((store) => {
        return { deleteBooking: store.deleteBooking}
    });

    return (
       <tr className="booking-row" key={booking._id}>
          <td>{booking.fname}</td>
          <td>{booking.lname}</td>
          <td>{booking.email}</td>
          <td>{booking.date}</td>
          <td>{booking.time}</td>
          <button className="delete-btn" onClick={() => store.deleteBooking(booking._id)}>Delete</button>
        </tr>
    );

}