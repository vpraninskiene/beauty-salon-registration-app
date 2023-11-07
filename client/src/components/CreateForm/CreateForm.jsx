import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 
import { Button } from '../Button/Button';
import "../CreateForm/CreateForm.css";

export const CreateForm = () => {
const store = bookingsStore();

  return (
    <div className="booking-form-wrapper">
      <h1>Appointment booking</h1>
      <form className="booking-registration-form" onSubmit={store.createBooking}>
        <input type="text" onChange={store.updateCreateFormField} value={store.createForm.fname} name="fname" placeholder="Enter First name..." required/>
        <input type="text" onChange={store.updateCreateFormField} value={store.createForm.lname} name="lname" placeholder="Enter Last name..." required/>
        <input type="email" onChange={store.updateCreateFormField} value={store.createForm.email} name="email" placeholder="Enter email..." required/>
        <input type="date" onChange={store.updateCreateFormField} value={store.createForm.date} name="date" required/>
        <input type="time" onChange={store.updateCreateFormField} value={store.createForm.time} name="time" required/>
        <Button theme="booking" title="Submit"/>
      </form>
    </div>
  );
}