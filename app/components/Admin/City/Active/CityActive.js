import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListBoxActive from './ListBoxActive';

const RankList = styled.ol`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  padding-bottom: 10px;
`;

const FeaturedContainer = styled.div`
  flex: 50;
  margin-right: 20px;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 18px;
  margin-left: -5px;
  font-weight: 500;
`;

const CityActive = () => {
  const [countryRank, setCountryRank] = useState([]);
  const [indonesiaNumber, setIndonesiaNumber] = useState(0);
  const [showRow] = useState(10);

  useEffect(() => {
    axios
      .get('https://covid19.mathdro.id/api/countries/India/confirmed')
      .then(res => {
        // console.log(res.data);
        setCountryRank(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleProvinceState = (provinceState, countryRegion) =>
    provinceState && provinceState !== countryRegion
      ? `(${provinceState})`
      : '';

  const showOrder = (countryRegion, index) => (
    <Fragment>
      {countryRegion === 'Indonesia' ? indonesiaNumber : index + 1}
    </Fragment>
  );

  useEffect(() => {
    countryRank.filter((data, index) =>
      data.countryRegion === 'Indonesia' ? setIndonesiaNumber(index + 1) : '',
    );
  }, [countryRank]);

  return (
    <FeaturedContainer>
      <RankList>
        <Title>City Active</Title>
        {countryRank
          .filter((data, index) => index < showRow)
          .map((data, index) => (
            <ListBoxActive
              key={data.uid}
              index={index}
              data={data}
              showOrder={(a, b) => showOrder(a, b)}
              toggleProvinceState={(a, b) => toggleProvinceState(a, b)}
            />
          ))}
      </RankList>
    </FeaturedContainer>
  );
};

export default CityActive;
