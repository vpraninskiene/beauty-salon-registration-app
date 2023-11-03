import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 


export const Booking = ({ booking }) => {
    const store = bookingsStore((store) => {
        return { deleteBooking: store.deleteBooking}
    });


    return (
       <div key={booking._id}>
          <p>{booking.fname}</p>
          <p>{booking.lname}</p>
          <p>{booking.email}</p>
          <p>{booking.date}</p>
          <p>{booking.time}</p>
          <button onClick={() => store.deleteBooking(booking._id)}>Delete booking</button>
        </div>

    )

}