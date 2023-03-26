
// To start the json server runthis command in the command prompt
// json-server --watch buckets.json --port 3001

import '@fortawesome/fontawesome-free/css/all.min.css';

import React, { useState , useEffect} from 'react';
import './buckets.css';

function EntSongs() {
  const address='http://localhost:3001'+window.location.pathname;

  function handleSubmit(e) {
    window.location.reload(true)
    e.preventDefault();
    fetch(address, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:e.target.name.value , link:e.target.link.value }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    e.target.name.value = '';
    e.target.link.value = '';
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(address)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);


  // Function to delete the items

  const [deletes, setDelete] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/buckets')
      .then(response => response.json())
      .then(data => setDelete(data))
      .catch(error => console.error(error));
  }, []);

  function handleDelete(id){

    fetch(`${address}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const updatedUsers = deletes.filter(user => user.id !== id);
      setDelete(updatedUsers);
    })
    .catch(error => {
      console.error('Error deleting item:', error);
    });
  }

  return (
    <div className='cards-content'>
      <form onSubmit={handleSubmit} >
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='link'>Link:</label>
        <input type='link' id='link' name='link' />

        <button type='submit' >Add Card</button>
      </form>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <a href={user.name} className='cardname'>{user.link}</a>
              <i className="fas fa-trash-alt" onClick={() => handleDelete(user.id)}></i>
              <i className="fas fa-edit"  onClick={() => setEditCard(user.id)}></i>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default EntSongs;
