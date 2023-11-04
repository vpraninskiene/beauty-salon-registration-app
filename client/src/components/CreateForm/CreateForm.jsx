import { bookingsStore } from "../../stores/bookingsStore/bookingsStore"; 


export const CreateForm = () => {
const store = bookingsStore();

  return (
    <div>
      <h2>Appointment booking</h2>
      <form onSubmit={store.createBooking}>
        <input type="text" onChange={store.updateCreateFormField} value={store.createForm.fname} name="fname" required/>
        <input type="text" onChange={store.updateCreateFormField} value={store.createForm.lname} name="lname" required/>
        <input type="email" onChange={store.updateCreateFormField} value={store.createForm.email} name="email" required/>
        <input type="date" onChange={store.updateCreateFormField} value={store.createForm.date} name="date" required/>
        <input type="time" onChange={store.updateCreateFormField} value={store.createForm.time} name="time" required/>
        <button type="submit">Create appointment booking</button>
      </form>
    </div>
  )
}