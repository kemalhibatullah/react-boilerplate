import React from 'react';
import styled from 'styled-components';

const FeaturedContainer = styled.div`
  flex: 50;
  margin-right: 20px;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

function CityActive() {
  return (
    <FeaturedContainer>
      <h1>CityActive</h1>
    </FeaturedContainer>
  );
}

export default CityActive;
