/**
*
* ChartTimeSeries
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend , Bar, ResponsiveContainer , BarChart,
  ReferenceLine, Brush} from 'recharts';

import Paper from '@material-ui/core/Paper';

class ChartTimeSeries extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div>
          <ResponsiveContainer width='100%' aspect={this.props.aspectRatio}>
          <BarChart data={this.props.data}
                    margin={{top: 20, right: 20, left: 20, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Legend />
                <Bar
                type='linear' 
                dataKey={this.props.dataKeyPrimary} 
                fill="#3f51b5" 
                connectNulls={true} />
                <Brush />
          </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

ChartTimeSeries.propTypes = {
  title: PropTypes.title,
  aspectRatio: PropTypes.number,
  data: PropTypes.object,
  dataKeyPrimary: PropTypes.string,
};

export default ChartTimeSeries;