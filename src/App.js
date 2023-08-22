import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import LocationSection from './components/LocationSection';

function App() {

  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setApiUsers(data))
  }, [])

  return (
    <div className="App">
      <LocationSection/>
      <AddUser/>
      <UserList users={apiUsers}/>
    </div>
  );
}

export default App;
