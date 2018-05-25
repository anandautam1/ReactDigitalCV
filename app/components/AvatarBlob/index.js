/**
*
* AvatarBlob
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Avatar from '@material-ui/core/Avatar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import ProfPic from 'assets/AzraEyes.png';

import { Grid, Row , Col } from 'react-bootstrap';

class AvatarBlob extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>

        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/8/86/Cactus_Flower_%28Easy-Macro%29.jpeg"
          style={{ 
            width: 250,
            height: 250,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,
        }}/>
        
        <div>
          <Typography variant="title" color="inherit" 
            style={{ 
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 10,
          }}>
            Ananda Utama
          </Typography>
        </div>

      </div>
    );
  }
}

AvatarBlob.propTypes = {

};

export default AvatarBlob;
