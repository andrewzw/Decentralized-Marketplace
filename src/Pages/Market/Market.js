import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const featuredItems = [
    { title: "Featured 1", description: "Description", image: "https://placehold.co/259x298" },
    { title: "Featured 2", description: "Description", image: "https://placehold.co/259x298" },
    { title: "Featured 3", description: "Description", image: "https://placehold.co/259x298" },
    { title: "Featured 4", description: "Description", image: "https://placehold.co/259x298" }
];

const listedItems = [
    { title: "Item 1", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 2", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 3", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 4", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 5", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 6", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 7", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 8", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 9", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 10", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 11", description: "Description", image: "https://placehold.co/256x256" },
    { title: "Item 12", description: "Description", image: "https://placehold.co/256x256" },
];


const Market = () => {
    const [value, setValue] = React.useState('one');
    const [selectedItem, setSelectedItem] = React.useState(null); // State to store selected item

    const handleItemClick = (item) => {
        setSelectedItem(item); // Update the selected item
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <h1>Market</h1>
            <Grid container spacing={1} >
                <Grid item xs={8}>
                    <Item>
                        <h2>Section 1</h2>
                        <Grid container spacing={1} rowSpacing={1}>
                            {featuredItems.map((item, index) => (
                                <Grid item xs={3} key={index}>
                                    <Card sx={{ maxWidth: 259, minHeight: 298 }} onClick={() => handleItemClick(item)}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="298"
                                                image={item.image}
                                                alt={item.title}
                                            />
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
                                    <Grid item xs={3} key={index}>
                                        <CardActionArea onClick={() => handleItemClick(item)}>
                                            <CardMedia
                                                component="img"
                                                height="256"
                                                width="256"
                                                image={item.image}
                                                alt={item.title}
                                            />

                                        </CardActionArea>
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
                                    {selectedItem ? (
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={selectedItem.image} alt={selectedItem.title} width="189px" height="211px" />
                                            <div style={{ marginLeft: '16px' }}>
                                                <h3>{selectedItem.title}</h3>
                                                <p>{selectedItem.description}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>Select an item to view details</p>
                                    )}
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