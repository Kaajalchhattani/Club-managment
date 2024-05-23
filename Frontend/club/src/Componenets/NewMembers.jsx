import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NewMember.css';

function NewMembers() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const [newMember, setNewMember] = useState({
    Name: '',
    Image: ''
  });

  const handleChange = (e) => {
    setNewMember(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/members", newMember);
      navigate("/members");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/members/${id}`);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/members");
        setMembers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div>
       <Link className="back-link" to="/adminfirst">Back to Portal</Link>
    
    <div className="center-container">
     
      <div className='new-members'>
        <h2>Add Member</h2>
        <div className='form'>
          <div className='input'>
            <label>Name : </label>
            <input
              type="text"
              placeholder='Name'
              onChange={handleChange}
              name='Name'
            />
          </div>
          <div className='input'>
            <label>Image : </label>
            <input
              type="text"
              placeholder='Image'
              onChange={handleChange}
              name='Image'
            />
          </div>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
      
      <div className="updating">
       
        {
          members.map(member => (
            <div key={member.id} className="member-row">
              <div>Name: {member.Name}</div>
              <div>Image: {member.Image}</div>
              <button onClick={() => handleDelete(member.id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  );
}

export default NewMembers;
