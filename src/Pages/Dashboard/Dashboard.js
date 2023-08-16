import * as React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Grid container rowSpacing={2} style={{ padding: '20px' }}>
                <Grid container spacing={1} rowSpacing={1}>

                    {/* Main Grid container */}
                    <Grid item xs={3} container spacing={0.5}>

                        {/* Overview Grid item */}
                        <Grid item xs={4}>
                            <Card elevation={3} style={{ height: '30px' }}>
                                <CardActionArea onClick={() => { console.log("Overview clicked!"); }}>
                                    <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>Overview</div>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        {/* History Grid item */}
                        <Grid item xs={4}>
                            <Card elevation={3} style={{ height: '30px' }}>
                                <CardActionArea onClick={() => { console.log("History clicked!"); }}>
                                    <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>History</div>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        {/* Assets Grid item */}
                        <Grid item xs={4}>
                            <Card elevation={3} style={{ height: '30px' }}>
                                <CardActionArea onClick={() => { console.log("Assets clicked!"); }}>
                                    <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>Assets</div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                {/* new box below */}
                <Grid container spacing={1} rowSpacing={1} item xs={12}>
                    <Grid item xs={4}>
                        <Card elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => { console.log("Assets clicked!"); }}>
                                <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>Logged in as: Andrew</div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => { console.log("Assets clicked!"); }}>
                                <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>Total Assets</div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => { console.log("Assets clicked!"); }}>
                                <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>Total Spent</div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>




        </div>
    )
};

export default Dashboard;
