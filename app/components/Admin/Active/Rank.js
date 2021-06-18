import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ListBox from './ListBox';

const RankList = styled.ol`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;

const Rank = () => {
  const [countryRank, setCountryRank] = useState([]);
  const [indonesiaNumber, setIndonesiaNumber] = useState(0);
  const [showRow] = useState(7);

  useEffect(() => {
    axios
      .get('https://covid19.mathdro.id/api/confirmed')
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
    <RankList>
      {countryRank
        .filter(
          (data, index) =>
            index < showRow || data.countryRegion === 'Indonesia',
        )
        .map((data, index) => (
          <ListBox
            key={data.uid}
            index={index}
            data={data}
            showOrder={(a, b) => showOrder(a, b)}
            toggleProvinceState={(a, b) => toggleProvinceState(a, b)}
          />
        ))}
    </RankList>
  );
};

export default Rank;
