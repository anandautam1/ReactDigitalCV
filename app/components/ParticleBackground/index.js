/**
*
* ParticleBackground
*
*/

import React from 'react';
// import styled from 'styled-components';
import Particles from 'react-particles-js';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// implemented via react-particle-js see more here https://github.com/Wufe/react-particles-js

class ParticleBackground extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    valueArea: 500,
                  },
                },
                "shape": {
                  stroke: {
                    width: 20,
                    color: "#000000",
                  },
                  "type": "circle",
                  "stroke": {
                    "width": 5,
                    "color": "#3CA9D1"
                  },
                },
                line_linked: {
                  distance: 20,
                  opacity: 1,
                  width: 10,
                  shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 1
                  }
                }
              }
            }}
            style={{
              width: 'auto',
              position: 'absolute',
              zIndex: 1,
            }}
          />
      </div>
    );
  }
}

ParticleBackground.propTypes = {

};

export default ParticleBackground;
