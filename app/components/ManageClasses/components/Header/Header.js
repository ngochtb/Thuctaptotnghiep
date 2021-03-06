import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import AddItemDialog from './AddItemDialog';
const useStyles = makeStyles(() => ({
  root: {},
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Quản lý
          </Typography>
          <Typography component="h1" variant="h3">
            Lớp học
          </Typography>
        </Grid>
        <Grid item>
          <AddItemDialog />
          {/* <Button
            color="primary"
            variant="contained"
            style={{ marginRight: '10px' }}
          >
            Thêm lớp học
          </Button> */}
          {/* <Button color="primary" variant="contained">
            Thêm thành viên từ Excel
          </Button> */}
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
