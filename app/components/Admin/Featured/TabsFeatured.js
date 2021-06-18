import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import axios from 'axios';
import NumberFormat from 'react-number-format';

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
      posts: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://covid19.mathdro.id/api/countries/Indonesia')
      .then(response => {
        console.log(response.data.confirmed);
        console.log(response.data.recovered);
        console.log(response.data.deaths.value);
        this.setState({ posts: response.data.confirmed });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    // console.log("asd")
    return (
      <Tabs>
        <TabList>
          <Tab>
            Confirmed - Indonesia
            <Value>
              <NumberFormat
                thousandSeparator
                displayType="text"
                value={posts.value}
              />
            </Value>
          </Tab>
          <Tab>
            Recovered - Indonesia
            <Value>123</Value>
          </Tab>
          <Tab>
            Deaths - Indonesia
            <Value>123</Value>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default TabsFeatured;
