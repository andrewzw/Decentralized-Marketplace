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
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { tabsData, featuredItems, listedItems } from './marketData.js';

// Components Styling
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Market = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = React.useState('All');
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [itemQuantities, setItemQuantities] = React.useState({});

    const handleItemClick = (item, action = 'toggle') => {
        if (action === 'remove' || selectedItems.some(selectedItem => selectedItem.name === item.name)) {
            setSelectedItems(prevItems => prevItems.filter(i => i.name !== item.name));
        } else if (action === 'toggle') {
            setSelectedItems(prevItems => [...prevItems, item]);
        }
    };

    const handleQuantityChange = (itemName, quantity) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemName]: quantity
        }));
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <h1>Market</h1>
            <Grid container spacing={2} rowSpacing={1}
                sx={{
                    backgroundColor: '#fff',
                    padding: isMobile ? '0 10px' : '0 30px',
                }}>
                <Grid item xs={12} md={8} rowSpacing={14}>
                    <Item
                        sx={{
                            backgroundColor: '#transparent',
                        }}>
                        <h2 >Section 1</h2>
                        <Grid container spacing={5} rowSpacing={1}>
                            {featuredItems.map((item, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <Card sx={{ maxWidth: 259, maxHeight: 298 }} onClick={() => handleItemClick(item)}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                width="100%"
                                                image={item.image}
                                                alt={item.name}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container rowSpacing={0} xs={12}
                            sx={{
                                backgroundColor: '#D9D9D9',
                                borderRadius: '7px',
                                width: 'fit-content',
                                marginTop: '2%',
                            }}>

                            <Grid container spacing={1} rowSpacing={1}
                                sx={{
                                    padding: '10px',
                                    paddingTop: '0px',
                                }}>
                                <Grid item xs={12}>
                                    <Item sx={{
                                        overflowX: 'auto',
                                        width: '100%',
                                        backgroundColor: 'transparent',
                                        boxShadow: 0,
                                        boxSizing: 'border-box',
                                    }}>

                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            textColor="#fff"
                                            indicatorColor="#ccc"
                                            variant="scrollable"
                                            scrollButtons="auto"
                                            sx={{
                                                backgroundColor: '#B5B5B5',
                                                borderRadius: '7px',
                                                width: 'fit-content',
                                                maxHeight: '42px',
                                                padding: '6px',
                                            }}
                                        >
                                            {tabsData.map(tab => (
                                                <Tab
                                                    key={tab.value}
                                                    value={tab.value}
                                                    label={tab.label}
                                                    sx={{
                                                        border: value === tab.value ? '#e0e0e0' : '#fff',
                                                        minWidth: '120px',
                                                        maxHeight: '30px',
                                                        padding: '10px',
                                                        borderRadius: '5px',

                                                        margin: '0px',
                                                        color: value === tab.value ? '#000' : '#fff',
                                                        backgroundColor: value === tab.value ? '#fff' : '#B5B5B5'
                                                    }}
                                                />
                                            ))}
                                        </Tabs>

                                    </Item>


                                </Grid>
                                {listedItems.filter(item => value === "All" || item.cat === value).map((item, index) => (<Grid item xs={6} md={3} key={index}
                                >
                                    <CardActionArea onClick={() => handleItemClick(item)} sx={{
                                        borderRadius: '10px',
                                        border: '1px solid #000',
                                    }} >
                                        <CardMedia
                                            component="img"
                                            width="100%"
                                            image={item.image}
                                            alt={item.name}
                                        />
                                    </CardActionArea>
                                </Grid>
                                ))}
                            </Grid>
                        </Grid>

                    </Item>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Item>
                        <h2>Section 3</h2>
                        <Grid container spacing={1} rowSpacing={1} >

                            <Grid item xs={12}>
                                {selectedItems.length > 0 ? (selectedItems.map(selectedItem => (
                                    <Paper
                                        sx={{
                                            p: 2,
                                            margin: 'auto',
                                            maxWidth: 500,
                                            flexGrow: 1,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        <Grid container spacing={0}>
                                            <Grid item>
                                                <Img alt="complex" src={selectedItem.image}
                                                    sx={{
                                                        maxHeight: '256px',
                                                        maxWidth: '256px',
                                                        minHeight: '256px',
                                                        minWidth: '256px',
                                                    }} />
                                            </Grid>

                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1" component="div">
                                                            {selectedItem.name}
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            {selectedItem.description}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {selectedItem.seller}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="body2" color="text.secondary">
                                                            Quantity:
                                                        </Typography>
                                                        <Select
                                                            value={itemQuantities[selectedItem.name] || 1}
                                                            onChange={(e) => handleQuantityChange(selectedItem.name, e.target.value)}
                                                            sx={{ minWidth: 50, marginLeft: 1 }}
                                                        >
                                                            {[...Array(10).keys()].map(i => (
                                                                <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                                                            ))}
                                                        </Select>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            variant="outlined"
                                                            startIcon={<DeleteIcon />}
                                                            color="error"
                                                            onClick={() => handleItemClick(selectedItem, 'remove')}  // Modify this line
                                                        >
                                                            Remove
                                                        </Button>
                                                    </Grid>

                                                </Grid>

                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        ETH:  {selectedItem.price}
                                                    </Typography>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Paper>
                                ))
                                ) : (
                                    <p>Select an item to view details</p>
                                )}
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