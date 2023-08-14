import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Grid container spacing={1} rowSpacing={1} >
                <Grid item xs={3} md={8}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
            </Grid>
        </div>
    )
};

export default Home;