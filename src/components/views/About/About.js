import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { NavBar } from '../../views/NavBar/NavBar';
import { Button } from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './About.module.scss';

const Component = ({className}) => {
  const [show, setShow] = useState(false);
  const effects = [styles.mainAbout];
  useEffect(() => {
    window.scrollTo(0,0);
    setShow(true);
  }, [setShow]);
  if(show) {
    effects.push(styles.show);
  }
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.background}>
        <NavBar className={styles.overlayOne}/>
      </div>
      <div className={effects.join(' ')}>
        <div className={`${styles.overlayTwo} ${styles.aboutContent}`}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <p>ABOUT ME: I have experience in the scope of law and business, however, the discovery of my passion for programming completed the full spectrum of my professional interests. Since the beginning of the current year, I have been taking an intensive 9-month programming course and for over a year I have been devoting every available moment to develope my skills in this field. I am an ambitious person, confident in achieving my goals and I perceive every professional difficulty as an opportunity to acquire new skills and self-grow.</p>
          <p>STACK: HTML, CSS, RWD, Bootstrap, Git, JavaScript, AJAX, Node, React, Express, Redux, MongoDB, Jira, WebSocket, Mongoose, NPM, Webpack</p>
          <Button src="https://drive.google.com/file/d/1TLP1E_M3xhIlLa4zeu1fuUHNT65gI8kr/view" title="View Bootcamp Cerificate"/>
        </div>
      </div>
    </div>
  );
};

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
  Component as About,
  // Container as About,
  Component as AboutComponent,
};
