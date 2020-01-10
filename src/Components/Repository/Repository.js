import React from 'react';
import './Repository.css';

const Repository = ({ data }) => {
  const { name } = data;

  return (
    <div className="repository item">
      {name}
    </div>
  );
};

export default Repository;
