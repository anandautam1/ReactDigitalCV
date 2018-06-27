/**
*
* HomeBarMain
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ReactCvLogo from 'components/ReactCvLogo';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class HomeBarMain extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <ReactCvLogo logoWidth={70} logoHeight={50}/>
            </IconButton>
            <Button color="inherit">ReactCV</Button>
          </Toolbar>
        </AppBar>        
      </div>
    );
  }
}

HomeBarMain.propTypes = {
  //classes: PropTypes.object.isRequired,
};

export default HomeBarMain;
