import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 
import { Booking } from "../Booking/Booking";
import "../Bookings/Bookings.css";

export const Bookings = () => {
    const store = bookingsStore();

    return (
        <section className="table-wrapper">
          <h2>Bookings</h2>
          <table>
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Second name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {store.bookings && store.bookings.map(booking => {
              return <Booking booking={booking} key={booking._id}/>;
            })};
                </tbody>
            </table>
          </section>
    );
}