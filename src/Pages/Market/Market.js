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

const featuredItems = [
    { title: "Featured 1", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Featured 2", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Featured 3", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Featured 4", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" }
];

const listedItems = [
    { title: "Item 1", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 2", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 3", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 4", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 5", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 6", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 7", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 8", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 9", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 10", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 11", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
    { title: "Item 12", description: "Description", image: "/static/images/cards/contemplative-reptile.jpg" },
];


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
                            {featuredItems.map((item, index) => (
                                <Grid item xs={3} key={index}>
                                    <Card sx={{ maxWidth: 259, minHeight: 298 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={item.image}
                                                alt={item.title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
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
                                {listedItems.map((item, index) => (
                                    <Grid item xs={3}>
                                        <Item>{item.title}</Item>
                                    </Grid>
                                ))}

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