import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Smoke from '../../../smoke.png';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './TopBar.module.scss';

const Component = ({className}) => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const effects = [styles.header];
  const hideEffects = [styles.smoke];
  useEffect(() => {
    setShow(true);
    setHide(true);
  }, [setShow]);
  if(show) {
    effects.push(styles.show);
  }
  if(hide) {
    hideEffects.push(styles.hide);
  }
  return (
    <header className={clsx(className, styles.root)}>
      <img className={hideEffects.join(' ')} src={Smoke} alt="smoke"/>
      <h2 className={effects.join(' ')}>Designer & Web Developer</h2>
    </header>
  );
};
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
  Component as TopBar,
  // Container as TopBar,
  Component as TopBarComponent,
};
