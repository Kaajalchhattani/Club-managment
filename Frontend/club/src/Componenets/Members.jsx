import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Members.css";  // Ensure this is the correct path to your CSS file

function Members() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8800/members")
            .then(response => setMembers(response.data))
            .catch(error => console.error("Failed to fetch members:", error));
    }, []);

    return (
      <div className='members-wrapper'>
        <div className="members-container">
            {members.map(member => (
                <div key={member.id} className="member-card">
                    <img src={member.Image || "https://via.placeholder.com/150"} alt={member.Name} className="member-image"/>
                    <div className="member-name">{member.Name}</div>
                </div>
            ))}
        </div>
      </div>
    );
}

export default Members;
