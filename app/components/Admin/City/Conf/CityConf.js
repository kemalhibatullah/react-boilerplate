import React from 'react';
import styled from 'styled-components';

const FeaturedContainer = styled.div`
  flex: 50;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  @media screen and (max-width: 960px) {
    margin-top: 30px;
    margin-right: 20px;
  }
`;

function CityConf() {
  return (
    <FeaturedContainer>
      <h1>CityConf</h1>
    </FeaturedContainer>
  );
}

export default CityConf;
