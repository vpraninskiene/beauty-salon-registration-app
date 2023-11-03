import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 


export const CreateForm = () => {
const store = bookingsStore();

  return (
    <div>
      <h2>Appointment booking</h2>
      <form onSubmit={store.createBooking}>
        <input onChange={store.updateCreateFormField} value={store.createForm.fname} name="fname"/>
        <input onChange={store.updateCreateFormField} value={store.createForm.lname} name="lname"/>
        <input onChange={store.updateCreateFormField} value={store.createForm.email} name="email"/>
        <input onChange={store.updateCreateFormField} value={store.createForm.date} name="date"/>
        <input onChange={store.updateCreateFormField} value={store.createForm.time} name="time"/>
        <button type="submit">Create appointment booking</button>
      </form>
    </div>
  )
}