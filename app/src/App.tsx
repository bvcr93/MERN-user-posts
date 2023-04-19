import React, { useState } from 'react';
import UserForm from './components/UserForm';
type User = {
  _id: string;
  name: string;
  email: string;
  password?: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: any) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>Create User</h1>
      <UserForm onUserCreated={addUser} />
      <h2>Created Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
