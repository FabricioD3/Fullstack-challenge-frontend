
import React, { useState, useEffect } from 'react';
import ParticipantForm from '../components/ParticipantForm';
import ParticipantTable from '../components/ParticipantTable';

import { getParticipants } from '../services/api';

const Home = () => {
  const [participants, setParticipants] = useState([]);

  const fetchParticipants = async () => {
    try {
      const { data } = await getParticipants();
      setParticipants(data);
    } catch (err) {
      console.error('Error fetching participants:', err);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return (
    <div> 
      <ParticipantForm onParticipantAdded={fetchParticipants} />
      <ParticipantTable participants={participants} />
    </div>
  );
};

export default Home;
