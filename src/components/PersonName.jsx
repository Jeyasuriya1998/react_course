import React from 'react';

function PersonName({person}) {
  return <div>I'm {person.Name}, I was {person.age}, I Know {person.skill}</div>;
}

export default PersonName;
