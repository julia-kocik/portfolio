import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { NavBar } from '../NavBar/NavBar';
import { TopBar } from '../TopBar/TopBar';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainBar.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.overlay}>
      <NavBar/>
      <TopBar />
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainBar,
  // Container as MainBar,
  Component as MainBarComponent,
};
