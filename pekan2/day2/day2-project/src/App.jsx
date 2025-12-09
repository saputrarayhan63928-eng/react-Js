import './App.css'
import Greeting from './component/Greeting'
import LoginBtn from './component/LoginBtn'
import { useState } from 'react'
import MailBox from './component/MailBox'
import PageStatus from './component/SwictsCase'
import ProductList from './component/ArrayList'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  const [dataStatus, setDataStatus] = useState('loading');

  const changeStatus = () => {
    const statuses = ['loading', 'success', 'error', 'unknown'];
    const currentIndex = statuses.indexOf(dataStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setDataStatus(statuses[nextIndex]);
  };

  const yourMessages = ['Pesan 1', 'Pesan 2', 'Pesan 3'];
  const emptyMessages = [];

  return (
    <>
    <div className="App">
      <h1>Selamat Datang di Conditional Rendering dan List</h1>
      <LoginBtn isLoggedIn={isLoggedIn}  onClick = {isLoggedIn ? handleLogoutClick : handleLoginClick} />
    </div>
    <MailBox unreadMessages={yourMessages} />
    <MailBox unreadMessages={emptyMessages} />

     <div>
      <h3>Status Data:</h3>
      <PageStatus status={dataStatus} />
      <button onClick={changeStatus}>Ubah Status</button>
    </div>;
    <ProductList />
    
  </>
  )
}

export default App