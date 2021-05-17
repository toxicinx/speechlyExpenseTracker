import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import useStyles from './styles';
import Main from './components/Main/Main';

const App = () => {
    return(
        <div>
            <Grid container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>
                <Grid items xs={12} sm={4}>
                    <Details title="Income" />
                </Grid>
                <Grid items xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid items xs={12} sm={4}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;