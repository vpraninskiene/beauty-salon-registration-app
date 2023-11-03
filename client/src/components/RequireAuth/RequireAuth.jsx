import authStore from "../../stores/authStore/authStore";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {
    const store = authStore();

    useEffect(() => {
      if (store.loggedIn === null) {
        store.checkAuth();
      }
    }, [store]);

    if (store.loggedIn === null) {
      return <div>Loading</div>
    }

    if (store.loggedIn === false) {
        return <Navigate to="/login"/>
    }
    
  return <div>{props.children}</div>;  
}
