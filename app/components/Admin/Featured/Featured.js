import React from 'react';
import styled from 'styled-components';

const FeaturedContainer = styled.div`
  flex: 65;
  margin-right: 20px;
  padding-left: 30px;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

function Featured() {
  return (
    <FeaturedContainer>
      <h1>User</h1>
    </FeaturedContainer>
  );
}

export default Featured;
