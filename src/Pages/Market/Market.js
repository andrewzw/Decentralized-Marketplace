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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { tabsData, featuredItems, listedItems } from './marketData.js';
import './market.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const total = selectedItems.reduce((acc, currentItem) => {
        const quantity = itemQuantities[currentItem.name] || 1;
        return acc + currentItem.price * quantity;
    }, 0).toFixed(6);

    return (
        <div>
            <h1>Market</h1>
            <Grid container spacing={2} rowSpacing={1}
                sx={{
                    padding: isMobile ? '0 10px' : '0 30px',
                }}>

                {/* Left Grid (Section 1 + 2) ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                <Grid item xs={12} md={8} rowSpacing={14} className='left-grid'>
                    {/* Section 1 ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className='section1'>
                        <h2 >Featured Items</h2>
                        <Grid container spacing={2} rowSpacing={1} >
                            {featuredItems.map((item, index) => (
                                <Grid item xs={6} md={3} key={index} >
                                    <Card onClick={() => handleItemClick(item)} sx={{
                                        borderRadius: '10px',
                                        backgroundColor: 'transparent',
                                    }}>
                                        <CardActionArea >
                                            <div style={{ position: 'relative' }}>
                                                <CardMedia
                                                    component="img"
                                                    width="100%"
                                                    image={item.image}
                                                    alt={item.name}
                                                    sx={{
                                                        borderRadius: '10px',
                                                        maxHeight: "300px",
                                                        minHeight: "350px",
                                                    }}
                                                />
                                                <div className='img-text' >
                                                    {item.name}
                                                </div>
                                            </div>
                                        </CardActionArea>


                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Section 2 ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                        <Grid container rowSpacing={0} xs={12} className='section2'>
                            <Grid container spacing={1} rowSpacing={1} className='section2-container'>
                                <Grid item xs={12}>
                                    <div className='section2-item-grid'>
                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            textColor="#fff"
                                            indicatorColor="#ccc"
                                            variant="scrollable"
                                            scrollButtons="auto"
                                            className='section2-tabs'
                                        >
                                            {tabsData.map(tab => (
                                                <Tab
                                                    key={tab.value}
                                                    value={tab.value}
                                                    label={tab.label}
                                                    sx={{
                                                        padding: '10px',
                                                        margin: '0',
                                                        minWidth: '120px',
                                                        maxHeight: '30px',
                                                        borderRadius: '5px',
                                                        color: value === tab.value ? '#fff' : '#d5d5d5',
                                                        fontWeight: value === tab.value ? 'bold' : 'normal',
                                                        backgroundColor: value === tab.value ? '#transparent' : 'transparent',
                                                        border: value === tab.value ? '1px solid #ebeced' : 'transparent'
                                                    }}
                                                />
                                            ))}
                                        </Tabs>
                                    </div>


                                </Grid>

                                {listedItems.filter(item => value === "All" || item.cat === value).map((item, index) => (<Grid item xs={6} md={3} key={index}>
                                    <CardActionArea onClick={() => handleItemClick(item)} sx={{
                                        borderRadius: '10px',
                                        maxHeight: "256px",
                                        minHeight: "256px",
                                    }}>


                                        <div style={{ position: 'relative' }}>
                                            <CardMedia
                                                component="img"
                                                width="100%"
                                                image={item.image}
                                                alt={item.name}
                                                sx={{
                                                    borderRadius: '10px',
                                                    maxHeight: "256px",
                                                    minHeight: "256px",
                                                }}
                                            />
                                            <div className='img-text' >
                                                {item.name}
                                                <br></br>
                                                ETH: {item.price}
                                            </div>
                                        </div>
                                    </CardActionArea>
                                </Grid>
                                ))}

                            </Grid>
                        </Grid>

                    </div>
                </Grid>

                {/* Section 3 ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                <Grid item xs={12} md={4}>
                    <div className='section3'>
                        <h2>Cart</h2>
                        <Grid container spacing={1} rowSpacing={1} >

                            <Grid item xs={12}>
                                {selectedItems.length > 0 ? (selectedItems.map(selectedItem => (
                                    <Paper className='section3-paper'>
                                        <Grid container>
                                            {/* LEFT */}
                                            <Grid item xs={6}>
                                                <img alt={selectedItem.name} src={selectedItem.image} className='section3-img' />
                                            </Grid>

                                            {/* RIGHT */}
                                            <Grid item xs={6} sm container className='section3-paper-text'>
                                                <Grid item xs container direction="column" spacing={1} >

                                                    <Grid item xs >
                                                        <Typography gutterBottom variant="subtitle1" component="div" >
                                                            {selectedItem.name}
                                                        </Typography>

                                                        <Typography variant="body2" gutterBottom>
                                                            {selectedItem.description}
                                                        </Typography>

                                                        <Typography variant="body2" >
                                                            {selectedItem.seller}
                                                        </Typography>
                                                    </Grid>

                                                    <Grid item>
                                                        <Typography variant="body2" >
                                                            Quantity:
                                                        </Typography>

                                                        <Select
                                                            value={itemQuantities[selectedItem.name] || 1}
                                                            onChange={(e) => handleQuantityChange(selectedItem.name, e.target.value)}
                                                            className='section3-selectbutton'
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
                                                            onClick={() => handleItemClick(selectedItem, 'remove')}
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

                            <Grid item xs={12} md={12} >
                                <div className='section3-bottom'>
                                    <h3> You are paying:  </h3>
                                    <div className='section3-pill'>
                                        <span className='section3-pill-coin'>ETH</span>
                                        <span className='section3-pill-total'>{total}</span>
                                    </div>

                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Button variant="outlined" onClick={handleClick}>Buy</Button>

                                        <Snackbar open={open} autoHideDuration={5100} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                                Payment Successful
                                            </Alert>
                                        </Snackbar>

                                    </Stack>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                {/* END ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            </Grid >

        </div >
    )
};

export default Market;