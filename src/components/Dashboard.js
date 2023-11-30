import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any other necessary headers
        },
        // You might need credentials depending on your setup
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Welcome to the Music World</h2>
      {user && (
        <div>
          <p>First Name: {user.email}</p>
          <p>Last Name: {user.lastName}</p>
          {/* Include other user information as needed */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;