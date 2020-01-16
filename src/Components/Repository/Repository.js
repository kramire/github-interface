import React from 'react';
import styled from 'styled-components';
import { StyledItem } from '../../assests/globalStyledComponents';

const RepoItem = styled(StyledItem)`
  :hover {
    background-color: var(--tertiary-bg);
    cursor: pointer;
  }
`;

// Repository Item. Displaying just the name.
// When clicked, a list of corresponding issues will be displayed.
const Repository = ({ data, onRepoClick }) => {
  const { name, owner } = data;
  return (
    <RepoItem onClick={() => onRepoClick(name, owner.login)}>
      {name}
    </RepoItem>
  );
};

export default Repository;
