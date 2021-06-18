import React, { Component } from 'react';
import axios from 'axios';
import { BarChart, Bar, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

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

  componentDidMount() {
    axios
      .get('https://covid19.mathdro.id/api/daily')
      .then(response => {
        console.log(response.data);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <BarChart
        width={300}
        height={100}
        data={posts}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="totalConfirmed" barSize={10} fill="#8eb6f9" />
      </BarChart>
    );
  }
}
export default Graph;
