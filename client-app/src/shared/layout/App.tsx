import React, { Fragment, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../components/activities/dashboard/ActivityDashboard';
import NavBar from './NavBar';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app...' />

  return (
    <Fragment>
      <NavBar />

      <Container style={{marginTop: '7em'}}>

        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
