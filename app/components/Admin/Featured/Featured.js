import React from 'react';
import styled from 'styled-components';
import TabsFeatured from './TabsFeatured';

const FeaturedContainer = styled.div`
  flex: 65;
  margin-right: 20px;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

function Featured() {
  return (
    <FeaturedContainer>
      <TabsFeatured />
    </FeaturedContainer>
  );
}

export default Featured;
