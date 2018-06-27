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

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AquaChart from 'components/AquaChart';

import TextCard from 'components/TextCard';

import ReactCvLogo from 'components/ReactCvLogo'
import ChartTimeSeries from 'components/ChartTimeSeries';
import TableSeries from 'components/TableSeries';

import Typography from '@material-ui/core/Typography';

import Wrapper from './Wrapper';

import ProjectStepper from 'components/ProjectStepper';

const PersonalData = [
  { name: 'Ananda Utama', initial:'AU', residence: 'Melbourne, Australia', university:'RMIT',
    email: 'ananda.d.a.utama@gmail.com',
    careerObjective: 'Energetic Fourth Year Electrical and Electronic University student with previous embedded system development, electronics Internet of Things, web development and customer service experience. Currently looking for an experience in the engineering industry. Proven to be responsible and dedicated person with excellent communication, management skills and the ability to learn quickly. To work with a team in a challenging and competitive environment and to utilize and improve my technical skills and having the capabilities to put them to use for the development of the organization. Aiming to bring all of these experiences and qualities to your organization.'
  }
];

const AcademicData = [
  {alias:'1', name: 'Engineering Computing 1', result: 98 },
  {alias:'2', name: 'Enterprise Engineering', result: 84 },
  {alias:'3', name: 'Engineering Methods', result: 93 },
  {alias:'4', name: 'Circuit Theory', result: 88 },
  {alias:'5', name: 'Engineering Computing 2', result: 91 },
  {alias:'6', name: 'Engineering Design 1', result: 73 },
  {alias:'7', name: 'Electrical Engineering 1', result: 95 },
  {alias:'8', name: 'Communication Engineering', result: 83},
  {alias:'9', name: 'Electronics', result: 93},
  {alias:'10', name: 'Introduction to Embedded Systems', result: 82},
  {alias:'11', name: 'Engineering Design 2', result: 81},
  {alias:'12', name: 'Network Fundamentals and Applications', result: 80},
  {alias:'13', name: 'Signals and Systems', result: 89},
  {alias:'14', name: 'Mathematics for ECE', result: 93},
  {alias:'15', name: 'Embedded Design and Implementation', result: 88},
  {alias:'16', name: 'Electronic Engineering 3', result: 86},
  {alias:'17', name: 'Control Systems', result: 92},
  {alias:'18', name: 'Engineering Design 3A', result: 83},
  {alias:'19', name: 'Engineering Design 3B', result: 94},
  {alias:'20', name: 'Network Engineering', result: 87},
  {alias:'21', name: 'Mobile Computing', result: 80},
  {alias:'22', name: 'Research Methods for Engineers', result: 83},
  {alias:'23', name: 'Further Engineering Mathematics C', result: null},
  {alias:'24', name: 'Physics 1', result: null},
  {alias:'25', name: 'Math & Stats for Aero, Mech & Auto', result: null}
];


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // design 2 pcb 

  // design 3 part 1 cat m1 application with realtime dashboard 

  // deisng 3 part 2 moved to wifi controller 

  // deisng 4 home automation iot 
  
  render() {
    const index = 'result';
    const acroWAM = "Weighted Average Mark";
    const ProjectTitle = 'Projects Showcase';
    const AcademicTitle = 'Academic Results';

    let values = AcademicData.map(n => {
      return (n.result);
    });

    let sum = values.reduce((previous, current) => current += previous);
    let calcWAMavg = sum / (values.length - 3) ;

    return (
      <div> 
      <HomeBarMain/>
      
      <Grid container spacing={24} style={{paddingRight:44, paddingLeft:44, paddingTop: 30}}>
          
          

          <Grid item xs={12} sm={12} md={3} lg={3} >
            <AvatarBlob />
            
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={9} >
            <ProjectCard />
            <TextCard />
          </Grid>

          <Grid item sm={12} md={12} lg={12}>
            <Paper>
                <Typography style={{textAlign:'center', padding:'10px'}}> {ProjectTitle}</Typography>
            </Paper>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <ProjectStepper theme={{direction:'custom'}}/>

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Grid>

           <Grid item sm={12} md={6} lg={6}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Grid>


          <Grid item sm={12} md={12} lg={12}>
            <Paper>
                <Typography style={{textAlign:'center', padding:'10px'}}> {AcademicTitle}</Typography>
            </Paper>
          </Grid>
          
          <Grid item sm={12} md={6} lg={6}>
            <ChartTimeSeries 
              data={AcademicData} 
              dataKeyPrimary={index}
              aspectRatio={16.0/9}/>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <AquaChart value={calcWAMavg} label={acroWAM} colour={'#3f51b5'} />
          </Grid>
          
          <Grid item sm={12} md={6} lg={12}>
            <TableSeries 
              data={AcademicData}/> 
          </Grid>

      </Grid>

      </div>
    );
  }
}
