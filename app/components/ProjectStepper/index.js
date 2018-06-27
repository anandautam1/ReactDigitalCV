/**
*
* ProjectStepper
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import SwipeableViews from 'react-swipeable-views';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const tutorialSteps = [
  {
    label: 'How to be happy :)',
    imgPath: 'http://loremflickr.com/300/200',
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: 'http://loremflickr.com/300/200',
  },
  {
    label: '2. Keep your friends close to you and hangout with them',
    imgPath: 'http://loremflickr.com/300/200',
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: 'http://loremflickr.com/300/200',
  },
  {
    label: '4. And contribute to Material-UI :D',
    imgPath: 'http://loremflickr.com/300/200',
  },
];

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
});

class ProjectStepper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  };

  
  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state; 

    const maxSteps = tutorialSteps.length;

    return (
      <div>
        <Paper style={{padding:10}}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents>

          {tutorialSteps.map(step => (
            <img key={step.label} 
                 //className={classes.img} 
                 src={step.imgPath}
                 alt={step.label} />
          ))}
        </SwipeableViews>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          //className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

ProjectStepper.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

//export default withStyles(styles,ProjectStepper;

export default withStyles(styles, { withTheme: true })(ProjectStepper);
//export default ProjectStepper;
