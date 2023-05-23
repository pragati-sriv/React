import "./search.css"
import React, { useState, useEffect } from 'react';

function Search() {
  const [states, setStates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://cdn-api.co-vin.in/api/v2/admin/location/states');
        const data = await response.json();
        setStates(data.states);
      } catch (error) {
        console.log('Error fetching states:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredStates(
      states.filter((state) =>
        state.state_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [states, searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Google or type URL"
        value={searchTerm}
        onChange={handleInputChange}
        className="search"  
      />
      <ul>
        {filteredStates.map((state) => (
          <ul key={state.state_id}>{state.state_name}</ul>
        ))}
      </ul>
    </div>
  );
}

export default Search;
