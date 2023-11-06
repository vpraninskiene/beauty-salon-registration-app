import { useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 
import { CreateForm } from "../../components/CreateForm/CreateForm";
import { Bookings } from "../../components/Bookings/Bookings";
import { Button } from '../../components/Button/Button';
import "../BookingsPage/BookingsPage.css";

export const BookingsPage = () => {
  const store = bookingsStore();

  useEffect(() => {
    store.fetchBookings();
  }, [store]);

  return <div className="App">
    <div className="bookings-page-wrapper">
      <section className="logout-section">
        <Link to="/logout"><Button theme="logout" title="Logout"/></Link>
      </section>
      <section className="create-booking-section"><CreateForm/></section>
      <section className="bookings-section"> <Bookings/></section>
    </div>
  </div>
}