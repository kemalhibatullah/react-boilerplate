import React, { Component } from 'react';
import axios from 'axios';
import { BarChart, Bar, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  // filterItem = () => {
  //     if (this.state.posts.length > this.state.itemNumber) {
  //         const newItems = this.state.posts.filter(
  //             (item, i) => i > this.state.posts.length - 10,
  //         );

  //         this.setState({ posts: newItems });
  //     }
  // }

  componentDidMount() {
    axios
      .get('https://covid19.mathdro.id/api/daily')
      .then(response => {
        // console.log(response.data);
        // this.setState({ posts: response.data });
        if (response.data.length > 10) {
          const newItems = response.data.filter(
            (item, i) => i > response.data.length - 10,
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
    // console.log(posts);
    return (
      <Container>
        <BarChart
          width={300}
          height={80}
          data={posts}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="totalConfirmed" fill="#8eb6f9" />
        </BarChart>
      </Container>
    );
  }
}
export default Graph;
