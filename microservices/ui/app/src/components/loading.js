import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  root: {
    marginTop: "70px",
    flexGrow: 1,
    // backgroundColor: 'white',
    // border: '1px solid red'
  },
};

function Loading(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress variant = 'query'/>
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);