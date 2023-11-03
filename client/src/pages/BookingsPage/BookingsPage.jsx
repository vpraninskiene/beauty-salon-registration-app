import { useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 
import { CreateForm } from "../../components/CreateForm/CreateForm";
import { Bookings } from "../../components/Bookings/Bookings";

export const BookingsPage = () => {

  const store = bookingsStore();


  useEffect(() => {
    store.fetchBookings();
  }, [store]);

  return <div className="App">
    <Link to="/logout">Logout</Link>
    <Bookings/>
 
    <CreateForm/>
  </div>

}