/**
*
* AquaChart
*
*/

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LiquidChart from 'react-liquidchart';
import hexToRgbString from 'hex-to-rgb-string';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class AquaChart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
      super(props);
      const stops = [
        <stop key={1} stopColor={this.props.colour} offset="85%"/>,
      ];
      var rgbString = hexToRgbString(this.props.colour);
      this.state = {
        propStop: stops,
        rgbString: rgbString,
        label: this.props.label,
      };
  }
  render() {
    const { propStop, rgbString } = this.state;
    //console.log(rgbString);
    return (
      <div
        style={{
          width: '100%',
          height: '500px',
          paddingTop: '20',
          paddingBottom: '80',
        }}
      >
        <Paper>
          <Typography style={{textAlign:'center', padding:'10px'}}>{this.state.label}</Typography>
        </Paper>
        <LiquidChart
            responsive
            legend={'W.A.M'}
            value={this.props.value}
            showDecimal
            amplitude={4}
            frequency={2}
            animationTime={1000}
            animationWavesTime={1000}
            gradient={{
              type: 1,
              x1: 0,
              x2: 0,
              y1: 100,
              y2: 0,
              propStop,
            }}
            postfix="%"
            legendFontSize={1}
            outerStyle={{ fill: rgbString }}
            liquidStyle={{ fill: 'rgb(23, 139, 202)' }}
            dryStyle={{ fill: 'rgb(0, 9, 0)' }}
            wetStyle={{ fill: 'rgb(0, 9, 0)' }}
          />
      </div>
    );
  }
}

AquaChart.propTypes = {

};

export default AquaChart;
