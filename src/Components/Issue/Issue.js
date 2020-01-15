import React from 'react';
import styled from 'styled-components';
import { StyledItem } from '../../assests/globalStyledComponents';
import { formatEuropeanDate, calcHowLongAgo } from '../../assests/utils';

const IssueItem = styled(StyledItem)`
  > p {
    font-size: 16px;
    font-weight: 700;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Issue = ({ data }) => {
  const AVATAR_HEIGHT = '40';
  const AVATAR_WIDTH = '40';
  const { title, user } = data;
  const createdDate = formatEuropeanDate(data.created_at);
  const lastUpdated = calcHowLongAgo(data.updated_at);
  return (
    <IssueItem className="issue">
      <p>{title}</p>
      <div>
        <img src={user.avatar_url} alt="user avatar" height={AVATAR_HEIGHT} width={AVATAR_WIDTH} />
        <p>Created On: {createdDate}</p>
        <p>Last Upated: {lastUpdated}</p>
      </div>
    </IssueItem>
  );
};

export default Issue;
