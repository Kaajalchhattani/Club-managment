import React, { useEffect, useState, useRef } from 'react';
import "./Event.css"; // Make sure the path to the CSS file is correct
import axios from 'axios';

function Events() {
    const [events, setEvents] = useState([]);
    const eventsContainerRef = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:8800/update")
            .then(response => setEvents(response.data))
            .catch(error => console.error("Failed to fetch events:", error));
    }, []);

    const scroll = (direction) => {
        const container = eventsContainerRef.current;
        const scrollAmount = 300;
        container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    };

    return (
      <div className='Hi'>
     
        <div className="events-wrapper">
         
            <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
            <div className="events-container" ref={eventsContainerRef}>
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.title} className="event-image"/>
                        <div className="event-title">{event.title}</div>
                        <div className="event-description">{event.description}</div>
                        <a href={event.link} className="event-link">Learn More</a>
                    </div>
                ))}
            </div>
            <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
        </div>
        </div>
    );
}

export default Events;
