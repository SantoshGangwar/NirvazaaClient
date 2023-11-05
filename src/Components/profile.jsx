import { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/Register');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after initial render
  const divStyle = {
    height: '200px', // Set the height to 200 pixels
    width: '300px',  // Set the width to 300 pixels
    background: 'lightblue',  // Set a background color
    padding: '20px',  // Set padding to 20 pixels
    border: '1px solid black',  // Set a border
  };

  return (
    <div>
      <h1>User Profiles</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>{user.username}</strong> - {user.email} - {user.phoneNumber}
            <img src={`http://localhost:3000/uploads/${user.image}`} alt={user.username}  style={divStyle}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
