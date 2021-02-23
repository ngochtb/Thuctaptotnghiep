import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon,
  },
  searchInput: {
    flexGrow: 1,
  },
  searchButton: {
    marginLeft: theme.spacing(2),
  },
  field: {
    marginTop: 0,
    marginBottom: 0,
  },
  formGroup: {
    padding: theme.spacing(2, 0),
  },
}));

const Search = props => {
  const { onSearch, className, ...rest } = props;
  const [values, setValues] = useState({ ...initialValues });

  const classes = useStyles();

  const initialValues = {
    paymentStatus: '',
    tag: '',
    tags: ['Full-Time'],
    amount: [1, 7],
    projectStatus: 'ended',
    customerName: '',
    customerType: 'freelancer',
    customerEmail: '',
    customerPhone: '',
    customerAge: '',
  };

  const handleFieldChange = (event, field, value) => {
    event.persist && event.persist();
    setValues(values => ({
      ...values,
      [field]: value,
    }));
  };

  const paymentStatusOptions = ['Pending', 'Canceled', 'Completed', 'Rejected'];
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Paper className={classes.search} elevation={1}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Tìm kiếm"
        />
      </Paper>
      <div className={classes.formGroup}>
        <TextField
          className={classes.field}
          fullWidth
          label="Payment status"
          margin="dense"
          name="paymentStatus"
          onChange={event =>
            handleFieldChange(event, 'paymentStatus', event.target.value)
          }
          select
          // eslint-disable-next-line react/jsx-sort-props
          SelectProps={{ native: true }}
          value={values.paymentStatus}
          variant="outlined"
        >
          <option disabled value="" />
          {paymentStatusOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>
      </div>
      <Button
        className={classes.searchButton}
        onClick={onSearch}
        size="large"
        variant="contained"
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Search;
