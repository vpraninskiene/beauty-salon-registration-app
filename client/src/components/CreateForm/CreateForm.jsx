import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 


export const CreateForm = () => {
const store = bookingsStore();

  return (
    <div>
      <h2>Appointment booking</h2>
      <form onSubmit={store.createBooking}>
        <input type="text" onChange={store.updateCreateFormField} value={store.createForm.fname} name="fname"/>
        <input type="text" onChange={store.updateCreateFormField} value={store.createForm.lname} name="lname"/>
        <input type="email" onChange={store.updateCreateFormField} value={store.createForm.email} name="email"/>
        <input type="date" onChange={store.updateCreateFormField} value={store.createForm.date} name="date"/>
        <input type="time" onChange={store.updateCreateFormField} value={store.createForm.time} name="time"/>
        <button type="submit">Create appointment booking</button>
        <span>All fields must be filled out</span>
      </form>
    </div>
  )
}