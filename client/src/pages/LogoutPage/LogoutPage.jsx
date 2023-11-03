import { useEffect } from 'react';
import authStore from '../../stores/authStore/authStore';

export default function LogoutPage() {
    const store = authStore();

    useEffect(() => {
        store.logout();
    }, [store])

  return <h1>You are now logout</h1>
}