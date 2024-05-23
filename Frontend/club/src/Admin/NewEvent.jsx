import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./NewEvent.css";
import { Link } from 'react-router-dom';

function NewEvent() {
  const [up, setup] = useState([]);
  console.log(up);
  const [Event, setEvent] = useState({
    title: "",
    desc: "",
    link: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEvent(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(Event);
      await axios.post("http://localhost:8800/update", Event);
      navigate("/events");
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      console.log(Event);
      await axios.delete("http://localhost:8800/update/" + id);
      navigate("/Events");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchUpdate = async () => {
      try {
        const res = await axios.get("http://localhost:8800/update");
        setup(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUpdate();
  }, []);

  console.log(Event);

  return (
    <>
      <a className="back-link" href="./adminfirst">Back to Portal</a>
      <div className='event-container'>
        <h2>Add New Event</h2>
        <div className='event-form'>

          <div className='input2'>
            <label>Title:</label>
            <input
              type="text"
              placeholder='Title'
              onChange={handleChange}
              name='title' />
          </div>

          <div className='input2'>
            <label>Description:</label>
            <textarea
              type="textarea"
              placeholder='Description'
              onChange={handleChange}
              name='desc' />
          </div>

          <div className='input2'>
            <label>Link:</label>
            <input
              type="text"
              placeholder='Link'
              onChange={handleChange}
              name='link' />
          </div>

          <div className='input2'>
            <label>Image:</label>
            <input
              type="text"
              placeholder='Image'
              onChange={handleChange}
              name='image' />
          </div>

          <button className="submit-button" onClick={handleClick}>Add</button>
        </div>
      </div>

      <div className="updating-container">
        {up.map(updating => (
          <div className="update-row" key={updating.id}>
            <div>Title: {updating.title}</div>
            <div>Description: {updating.description}</div>
            <div>Link: {updating.link}</div>
            <div>Image: {updating.image}</div>
            <div>
              <button className="delete-button" onClick={() => handleDelete(updating.id)}>Delete</button>
              <button className="update-button"><Link to={`/UpdateEvent/${updating.id}`}>Update</Link></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewEvent;
