import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import {NavLink} from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NavBar.module.scss';

const Component = ({className}) => (
  <nav className={clsx(className, styles.root)}>
    <div className={styles.leftNav}>
      <h1>Julia Kocik</h1>
      <h2>Portfolio</h2>
    </div>
    <div className={styles.rightNav}>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
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
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};
