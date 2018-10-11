import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static"   color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
            <i className="fas fa-chevron-left"></i><i className="fas fa-shower"></i>elvy/<i className="fas fa-chevron-right"></i>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
