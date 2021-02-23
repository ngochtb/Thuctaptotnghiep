/**
 *
 * ManageMember
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Page, SearchBar } from 'sections';
import { FormattedMessage } from 'react-intl';
import Header from './components/Header/Header';
import Result from './components/Result/Results';
import { makeStyles } from '@material-ui/styles';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(3),
  },
  paddingTop: {
    paddingTop: theme.spacing(3),
  },
}));

function ManageMember() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Quản lý thành viên">
      <Header />
      <SearchBar />
      <Result className={classes.paddingTop} />
    </Page>
  );
}

ManageMember.propTypes = {};

export default memo(ManageMember);
