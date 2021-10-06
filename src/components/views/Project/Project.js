import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProjectDetails } from '../../../redux/actions/projectActions';
import { Button } from '../../common/Button/Button';


import styles from './Project.module.scss';

const Component = ({className, getProjects, project, loading, error}) => {
  useEffect(() => {
    window.scrollTo(0,0);
    getProjects();
  }, [getProjects]);
  return (
    <div className={clsx(className, styles.root)}>
      {(loading || loading === undefined) ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={styles.projects}>
          <div key={project._id} className={styles.projectBox}>
            <p className={styles.titleProjects}>{project.title}</p>
            <p className={styles.descriptionProjects}>Description</p>
            <p className={styles.stackProjects}>Tech Stack</p>
            <Button src={project.src} title="View details" className={styles.btnProjects}/>
          </div>
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  getProjects: PropTypes.func, 
  project: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  project: state.projectRequest.project,
  loading: state.projectRequest.loading,
  error: state.projectRequest.error,
});

const mapDispatchToProps = (dispatch, props) => ({
  getProjects: () => dispatch(getProjectDetails(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Project,
  Container as Project,
  Component as ProjectComponent,
};
