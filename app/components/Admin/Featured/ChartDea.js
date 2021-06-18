import React, { Component } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 700px;
  height: 450px;

  @media screen and (max-width: 960px) {
    max-width: 320px;
    max-height: 300px;
  }
`;

class ChartDea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://covid19.mathdro.id/api/confirmed')
      .then(response => {
        // console.log(response.data);
        this.setState({ posts: response.data });
        // this.state = response.data.filter(b => b.countryRegion === "Indonesia")
        if (response.data.length > 0) {
          const newItems = response.data.filter(
            b => b.countryRegion === 'India',
          );

          this.setState({ posts: newItems });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <Container>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={posts}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />

            <XAxis dataKey="provinceState" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="deaths" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    );
  }
}
export default ChartDea;
