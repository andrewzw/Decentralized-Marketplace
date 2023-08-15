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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const Market = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <h1>Market</h1>
            <Grid container spacing={1} rowSpacing={1} >
                <Grid item xs={8}>
                    <Item>
                        <h2>Section 1</h2>
                        <Grid container spacing={1} rowSpacing={1}>

                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 259, minHeight: 298 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Featured 1
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Description
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 259, minHeight: 298 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Featured 2
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Description
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 259, minHeight: 298 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Featured 3
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Description
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card sx={{ maxWidth: 259, minHeight: 298 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Featured 4
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Description
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>

                            <h2>Section 2</h2>

                            <Grid container spacing={1} rowSpacing={1} >
                                <Grid item xs={12}>
                                    <Item>
                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            textColor="secondary"
                                            indicatorColor="secondary"
                                            aria-label="secondary tabs example"
                                        >
                                            <Tab value="one" label="Cat 1" />
                                            <Tab value="two" label="Cat 2" />
                                            <Tab value="three" label="Cat 3" />
                                        </Tabs>
                                    </Item>
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
                        <h2>Section 3</h2>
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
                                    <Stack spacing={2} direction="row">
                                        <Button variant="outlined">Buy</Button>
                                    </Stack>
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