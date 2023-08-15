import * as React from 'react';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Grid container spacing={1} rowSpacing={1}>

                {/* Main Grid container */}
                <Grid item xs={3} container spacing={0.5}>

                    {/* Overview Grid item */}
                    <Grid item xs={4}>
                        <Card elevation={3} style={{height:'30px'}}>
                            <CardActionArea onClick={() => { console.log("Overview clicked!"); }}>
                                <div style={{ padding: '1rem' }}>Overview</div>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* History Grid item */}
                    <Grid item xs={4}>
                        <Card elevation={3} style={{height: '30px'}}>
                            <CardActionArea onClick={() => { console.log("History clicked!"); }}>
                                <div style={{ padding: '1rem' }}>History</div>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Assets Grid item */}
                    <Grid item xs={4}>
                        <Card elevation={3} style={{height:'30px'}}>
                            <CardActionArea onClick={() => { console.log("Assets clicked!"); }}>
                                <div style={{ padding: '1rem' }}>Assets</div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                {/* If you still want to keep the grid of size 8 as in your code, 
                     you can leave it here or remove it. */}
                <Grid item xs={4}>
                    {/* Some content for this grid if needed */}
                </Grid>

            </Grid>
        </div>
    )
};

export default Dashboard;
