import { create } from "zustand";
import axios from "axios";

export const bookingsStore = create((set) => ({
    bookings: null,

    createForm: {
        fname: "",
        lname: "",
        email: "",
        date: "",
        time: "",
    },

    updateForm: {
        _id: null,
        fname: "",
        lname: "",
        email: "",
        date: "",
        time: "",
    },

    fetchBookings: async () => {
        const res = await axios.get("/bookings");

        set({ bookings: res.data.bookings,});
    },

    updateCreateFormField: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value,
                },
            };
        });
    },

    createBooking: async (e) => {
        e.preventDefault();

        const { createForm, bookings } = bookingsStore.getState();
        const res = await axios.post("/bookings", createForm);

        set({
            bookings: [...bookings, res.data.booking],
            createForm: {
                fname: "",
                lname: "",
                email: "",
                date: "",
                time: "",
            },
        });
    },

    deleteBooking: async (_id) => {
        await axios.delete(`/bookings/${_id}`);
        const { bookings } = bookingsStore.getState();
        const newBookings = bookings.filter((booking) => {
            return booking._id;
        });

        set({ bookings: newBookings });
    },

    handleUpdateFieldChange: (e) => {
        const { value, name } = e.target;

        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value,
                },
            };
        });
    },
}));