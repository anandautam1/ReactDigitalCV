/**
*
* TextCard
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TextCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Card >
        <CardContent>
          <Typography variant="headline" component="h2" gutterBottom={true} >
            Career Objective
          </Typography>
          <Typography component="h2" >
          Energetic Fourth Year Electrical and Electronic 
          University student with previous embedded system 
          development, electronics Internet of Things, web 
          development and customer service experience. 
          Currently looking for an experience in the 
          engineering industry. Proven to be responsible 
          and dedicated person with excellent communication, 
          management skills and the ability to learn quickly. 
          To work with a team in a challenging and competitive 
          environment and to utilize and improve my technical 
          skills and having the capabilities to put them to use 
          for the development of the organization. Aiming to bring
           all of these experiences and qualities to your organization. 
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="medium">Learn More</Button>
        </CardActions> */}
      </Card>
      </div>
    );
  }
}

TextCard.propTypes = {

};

export default TextCard;
