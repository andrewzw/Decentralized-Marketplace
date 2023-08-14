import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Market = () => {
    return (
        <div>
            <h1>Market</h1>
            <Grid container spacing={1} rowSpacing={1} >
                <Grid item xs={8}>
                    <Item>
                        <h2>Section 1</h2>
                        <Grid container spacing={1} rowSpacing={1} >

                            <Grid item xs={3}>
                                <Item>Featured Item 1</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>Featured Item 2</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>Featured Item 3</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>Featured Item 4</Item>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>

                            <h2>Section 2</h2>

                            <Grid container spacing={1} rowSpacing={1} >
                                <Grid item xs={12}>
                                    <Item>Tabs</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 1</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 2</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 3</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 4</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 5</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 6</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 7</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 8</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 9</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 10</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 11</Item>
                                </Grid>
                                <Grid item xs={3}>
                                    <Item>Listed 12</Item>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>

                <Grid item xs={4}>
                    <Item>
                        <h2>Section 1</h2>
                        <Grid container spacing={1} rowSpacing={1} >

                            <Grid item xs={12}>
                                <Item>
                                    <p> You are buying: </p>
                                    Item Details Section
                                </Item>
                            </Grid>

                            <Grid item xs={12}>
                                <Item>
                                    <p> You are paying: </p>
                                    Buy Section
                                </Item>
                            </Grid>
                        </Grid>

                    </Item>
                </Grid>
            </Grid >

        </div >
    )
};

export default Market;