import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
    loggedIn: null,

    loginForm: {
        email: "",
        password: "",
    },

    registerForm: {
        fname: "",
        lname: "",
        email: "",
        password: "",
    },

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },

    updateRegisterForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                registerForm: {
                    ...state.registerForm,
                    [name]: value,
                },
            };
        });
    },

    login: async () => {

        try {
      
            const { loginForm } = authStore.getState();

            const res = await axios.post("/login", loginForm, { withCredentials: true 
            });

            set({loggedIn: true,
                loginForm: {
                    email: "",
                    password: "",
                },
                
            });  

            if (!res.ok) {
                console.log("Logedin");
            }

    } catch (error) {
        
        set({
            loginForm: {
                email: "",
                password: "",
            },
        }); 
        
        alert("Email or password did not match.")
        
    };



    },

    checkAuth: async () => {
        try {
            await axios.get("/check-auth", { withCredentials: true });
            set({ loggedIn: true });
        } catch (err) {
            set({ loggedIn: false });
        }
    },

    register: async () => {

        try{
        const { registerForm } = authStore.getState();

        const res = await axios.post("/register", registerForm, { withCredentials: true, 
        });

        set({
            registerForm: {
                fname: "",
                lname: "",
                email: "",
                password: "",
            },
        });
        
        if (!res.ok) {
            console.log(res);
        }

} catch (error) {
    
    set({
        registerForm: {
            fname: "",
            lname: "",
            email: "",
            password: "",
        },
    }); 
    
    alert("Email already exists")
    
};



},

    logout: async () => {
        await axios.get("/logout", { withCredentials: true });
        set({ loggedIn: false });
    },

}));

export default authStore;