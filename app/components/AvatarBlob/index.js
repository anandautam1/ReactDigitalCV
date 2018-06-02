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
//import ProfPic from 'assets/s3530312.jpg';

import { Grid, Row , Col } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';

class AvatarBlob extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>

        <Avatar
          src='https://drive.google.com/uc?id=1UawU3qY-4R-LfDglgsBSJfB_VjtM54MH'
          style={{ 
            width: 250,
            height: 250,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,
        }}/>

      </div>
    );
  }
}

AvatarBlob.propTypes = {

};

export default AvatarBlob;
