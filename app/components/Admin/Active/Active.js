import React, { Component } from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Graph from './Graph';

const ActiveContainer = styled.div`
  flex: 35;
  width: 100%;
  min-height: 400px;
  padding-bottom: 30px;
  background-color: #4185f5;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

const Title = styled.div`
  font-size: 14px;
  padding-top: 30px;
  padding-left: 30px;
  color: #fff;
`;

const TotalConfirmed = styled.div`
  font-size: 40px;
  padding-left: 30px;
  color: #fff;
`;

const GraphPerDay = styled.div`
  font-size: 12px;
  padding-top: 30px;
  padding-bottom: 7px;
  margin-right: 30px;
  margin-left: 30px;
  color: #fff;
  border-bottom: 0.5px solid #8eb6f9;
`;

const DataGraph = styled.div`
  padding-top: 30px;
  padding-left: 30px;
`;

const TopCountry = styled.div`
  font-size: 12px;
  padding-bottom: 7px;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  color: #fff;
  border-bottom: 0.5px solid #8eb6f9;
`;

const TopCountryData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-bottom: 7px;
  margin-left: 30px;
  margin-right: 30px;
  color: #fff;
  border-bottom: 0.5px solid #8eb6f9;
`;

const TopCountryDataItem = styled.div`
  font-size: 12px;
  padding-bottom: 7px;
  margin-top: 5px;
  margin-right: 30px;
  color: #fff;
`;

const ReportContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  border-top: 1px solid #8eb6f9;
`;

const Report = styled.div`
  font-size: 16px;
  color: #fff;
  margin-top: 30px;
  margin-right: 30px;
  float: right;
`;

class Active extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://covid19.mathdro.id/api')
      .then(response => {
        // console.log(response.data.confirmed)
        this.setState({ posts: response.data.confirmed });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <ActiveContainer>
        <Title>Confirmed</Title>
        {
          <TotalConfirmed>
            <NumberFormat
              thousandSeparator
              displayType="text"
              value={posts.value}
            />
          </TotalConfirmed>
        }

        <GraphPerDay>Total confirmed per day</GraphPerDay>
        <DataGraph>
          <Graph />
        </DataGraph>
        <TopCountry>Top country positive</TopCountry>
        <TopCountryData>
          <TopCountryDataItem>India</TopCountryDataItem>
          <TopCountryDataItem>123</TopCountryDataItem>
        </TopCountryData>
        <TopCountryData>
          <TopCountryDataItem>India</TopCountryDataItem>
          <TopCountryDataItem>123</TopCountryDataItem>
        </TopCountryData>
        <TopCountryData>
          <TopCountryDataItem>India</TopCountryDataItem>
          <TopCountryDataItem>123</TopCountryDataItem>
        </TopCountryData>
        <TopCountryData>
          <TopCountryDataItem>India</TopCountryDataItem>
          <TopCountryDataItem>123</TopCountryDataItem>
        </TopCountryData>
        <ReportContainer>
          <Report>
            REAL-TIME REPORT <FaChevronRight />
          </Report>
        </ReportContainer>
      </ActiveContainer>
    );
  }
}
export default Active;
