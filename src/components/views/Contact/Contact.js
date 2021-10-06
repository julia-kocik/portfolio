import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { NavBar } from '../../views/NavBar/NavBar';
import { Button } from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.background}>
      <NavBar className={styles.overlayOne}/>
    </div>
    <div className={styles.mainAbout}>
      <div className={`${styles.overlayTwo} ${styles.aboutContent}`}>
        <FontAwesomeIcon className={styles.icon} icon={faAddressBook} />
        <Button src="https://github.com/julia-kocik" title="GitHub"/>
        <Button src="https://www.linkedin.com/in/julia-kocik-942221216/" title="LinkedIn"/>
        <Button src="" title="E-mail"/>
      </div>
    </div>
  </div>
);

Component.propTypes = {
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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
