import React from 'react';

const Repository = ({ data }) => {
  const { name } = data;

  return (
    <div className="repository">
      {name}
    </div>
  );
};

export default Repository;
