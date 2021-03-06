import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {getProjects} from '../../../redux/actions/projectActions';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { Button } from '../../common/Button/Button';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Projects.module.scss';

const Component = ({className, getProjects, projects, loading, error}) => {
  const [show, setShow] = useState(false);
  const effects = [styles.projectBox];
  useEffect(() => {
    window.scrollTo(0,0);
    getProjects();
    setTimeout(() => setShow(true), 500);
  }, [getProjects, setShow]);
  if(show) {
    effects.push(styles.show);
  }
  return (
    <div className={clsx(className, styles.root)}>
      {(loading || loading === undefined) ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={styles.projects}>
          {projects.map(project => (
            <div key={project._id} className={effects.join(' ')}>
              <p className={styles.titleProjects}>{project.title}</p>
              <p className={styles.descriptionProjects}>Description</p>
              <p className={styles.stackProjects}>Tech Stack</p>
              <Button src={`/projects/${project._id}`} title="View details" className={styles.btnProjects}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  getProjects: PropTypes.func, 
  projects: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  loading: state.projectsRequest.loading,
  error: state.projectsRequest.error,
  projects: state.projectsRequest.projects,
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Projects,
  Container as Projects,
  Component as ProjectsComponent,
};
