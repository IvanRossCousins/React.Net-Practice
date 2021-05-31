import React from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../shared/stores/store';
import ActivityList from '../../activities/dashboard/ActivityList';
import ActivityDetails from '../../activities/details/ActivityDetails';
import ActivityForm from '../../activities/form/ActivityForm';

export default observer( function ActivityDashboard() {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>

            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails />
                }

                {editMode &&
                    <ActivityForm />
                }
            </Grid.Column>
        </Grid>
    )
})