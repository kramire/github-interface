import React from 'react';
import styled from 'styled-components';
import { StyledItem } from '../../assests/globalStyledComponents';
import { formatEuropeanDate, calcHowLongAgo } from '../../assests/utils';

const IssueItem = styled(StyledItem)`
  > p {
    font-weight: 700;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div p {
    margin: 0 auto;
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
        <div>
          <p>Created On:</p>
          <p>{createdDate}</p>
        </div>
        <div>
          <p>Last Updated:</p>
          <p>{lastUpdated}</p>
        </div>
      </div>
    </IssueItem>
  );
};

export default Issue;
