/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import HomeBarMain from 'components/HomeBarMain';
import ParticleBackground from 'components/ParticleBackground';
import ProjectCard from 'components/ProjectCard';
import AvatarBlob from 'components/AvatarBlob';

import { Grid, Row , Col , Table , Button } from 'react-bootstrap';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // design 2 pcb 

  // design 3 part 1 cat m1 application with realtime dashboard 

  // deisng 3 part 2 moved to wifi controller 

  // deisng 4 home automation iot 

  render() {
    return (
      <div>
        <HomeBarMain/>
          {/* <ParticleBackground /> */}
          <div style={{
                zIndex: 2,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
              <Grid>
                <Row>
                  <Col xs={6} md={6} lg={6} >
                    <AvatarBlob />
                  </Col>
                  <Col md={6} lg={6}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                  </Col>
                </Row>
              </Grid>
          </div>
      </div>
    );
  }
}
