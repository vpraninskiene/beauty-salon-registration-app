import { useEffect } from 'react';
import authStore from '../../stores/authStore/authStore';
import "../LogoutPage/LogoutPage.css";

export default function LogoutPage() {
    const store = authStore();

    useEffect(() => {
        store.logout();
    }, [store]);

  return (
    <div className='logout-wrapper'>
      <div className='left-side'>
        <div>Pic</div>
      </div>
      <div className='right-side'>
        <h1>You are now logout!</h1>
      </div>
    </div>
  );
}