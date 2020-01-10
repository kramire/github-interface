import React from 'react';
import { formatEuropeanDate, calcHowLongAgo } from '../../utils';

const Issue = ({ data }) => {
  const AVATAR_HEIGHT = '40';
  const AVATAR_WIDTH = '40';

  const { title, user } = data;
  const createdDate = formatEuropeanDate(data.created_at);
  const lastUpdated = calcHowLongAgo(data.updated_at);

  return (
    <div>
      <img src={user.avatar_url} alt="user avatar" height={AVATAR_HEIGHT} width={AVATAR_WIDTH} />
      <p>Title: {title}</p>
      <p>Created On: {createdDate}</p>
      <p>Last Upated: {lastUpdated}</p>
    </div>
  );
};

export default Issue;
