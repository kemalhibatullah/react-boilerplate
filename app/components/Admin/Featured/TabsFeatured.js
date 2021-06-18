import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import ChartConf from './ChartConf';
import ChartRecov from './ChartRecov';
import ChartDea from './ChartDea';

const Value = styled.div`
  font-size: 32px;
  margin-top: 10px;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;

class TabsFeatured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postsconfirmed: [],
      postsrecovered: [],
      postsdeaths: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://covid19.mathdro.id/api/countries/India')
      .then(response => {
        this.setState({
          postsconfirmed: response.data.confirmed,
          postsrecovered: response.data.recovered,
          postsdeaths: response.data.deaths,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { postsconfirmed, postsrecovered, postsdeaths } = this.state;
    // console.log("asd")
    return (
      <Tabs>
        <TabList>
          <Tab>
            Confirmed - India
            <Value>
              <NumberFormat
                thousandSeparator
                displayType="text"
                value={postsconfirmed.value}
              />
            </Value>
          </Tab>
          <Tab>
            Recovered - India
            <Value>
              <NumberFormat
                thousandSeparator
                displayType="text"
                value={postsrecovered.value}
              />
            </Value>
          </Tab>
          <Tab>
            Deaths - India
            <Value>
              <NumberFormat
                thousandSeparator
                displayType="text"
                value={postsdeaths.value}
              />
            </Value>
          </Tab>
        </TabList>

        <TabPanel>
          <ChartConf />
        </TabPanel>
        <TabPanel>
          <ChartRecov />
        </TabPanel>
        <TabPanel>
          <ChartDea />
        </TabPanel>
      </Tabs>
    );
  }
}

export default TabsFeatured;
