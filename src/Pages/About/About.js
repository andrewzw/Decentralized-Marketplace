/* Name: Yong Yuan Chong */
/* ID: 101224021 */
import * as React from "react";

import { grey } from '@mui/material/colors'; //Make the divider white
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import CardMedia from '@mui/material/CardMedia';

import Divider from '@mui/material/Divider';

import './about.css';

import axios from "axios";
import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const About = () => {
    const [goalImages, setGoalImages] = useState([]);
    const [memberImages, setMemberImages] = useState([]);

    //Error handling
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const handleErrorSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setErrorSnackbarOpen(false);
    };

    //Function to Fetch data from backend and handle errors
    const fetchApiData = async (url, setData, errorMessage) => {
        let tempErrorMessage = '';
        let errorLogged = false;

        try {
            const response = await axios.get(url); //fetch data from url
            if ('error' in response.data) {
                if (!errorLogged) {
                    tempErrorMessage += errorMessage; //append error message - RESPOND error
                    errorLogged = true; //only log error once
                }
                console.log(response.data.error);
            } else if (Array.isArray(response.data) && response.data.length === 0) { //add error message if no data
                tempErrorMessage += 'No items available. ';
            } else {
                setData(response.data); //set data if no error
            }
        } catch (error) {
            if (!errorLogged) {
                tempErrorMessage += errorMessage; //append error message - FECTHING error
                errorLogged = true;
            }
        }

        return tempErrorMessage;
    };

    //Call to backend to fetch data
    useEffect(() => {
        const fetchData = async () => {
            let allErrorMessages = [];

            const goalImagesError = await fetchApiData(
                'http://127.0.0.1:8000/getGoalImages/',
                setGoalImages,
                'Sorry, we are encountering an error fetching goal images. '
            );
            if (goalImagesError) allErrorMessages.push(goalImagesError);

            const memberImagesError = await fetchApiData(
                'http://127.0.0.1:8000/getMemberImages/',
                setMemberImages,
                'Sorry, we are encountering an error fetching member images. '
            );
            if (memberImagesError) allErrorMessages.push(memberImagesError);

            if (allErrorMessages.length > 0) {
                setErrorMessages((prevMessages) => [...prevMessages, ...allErrorMessages]);
                setErrorSnackbarOpen(true);
            }

            if (allErrorMessages.length > 0) {
                setErrorMessages(allErrorMessages); // set new error messages
                setErrorSnackbarOpen(true); // open snackbar
            } else {
                setErrorMessages([]); // clear any existing error messages
            }
        };

        fetchData(); //call function
    }, []);

    return (
        <div>
            <Snackbar
                open={errorSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleErrorSnackbarClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                {/* Display all error messages */}
                <Alert onClose={handleErrorSnackbarClose} severity="error">
                    {Array.isArray(errorMessages) && errorMessages.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                </Alert>
            </Snackbar>

            <h1>About</h1>
            <Grid container spacing={2} rowSpacing={1} className='about-padding'>

                <Grid item xs={12} md={8} rowSpacing={1}>

                    <h2>Our Goals</h2>

                    <Typography sx={{ mb: 4 }} variant="body1">
                        Our goal at "SafeSpace" is to enable creative individuals by giving them a platform for presenting their digital works with the world.
                        Every digital creations becomes a work of art in our humble view, and as such, it must to be recognised and appreciated.
                        We want to revolutionise how people see, value, and engage with digital art and collectibles.
                    </Typography>

                    <Grid container spacing={0.5} rowSpacing={0.5}>
                        {Array.isArray(goalImages) && goalImages.map((items, index) => ( //loading goal images
                            <Grid item xs={6} md={3}>
                                <CardMedia
                                    component="img"
                                    image={items.image}
                                    alt={items.alt}
                                    className='about-goal-image'
                                />

                                <p className='about-goal-text'>{items.description}</p>
                            </Grid>
                        ))}
                    </Grid>

                    <h2>Who we are</h2>

                    <Typography sx={{ mb: 4 }} variant="body1">
                        A vast but passionate team of people who have a strong interest in the field of NFT is the driving force behind "SafeSpace".
                        We're determined to work hard to broaden the possibilities of NFTs and create an environment where creativity is unrestricted.
                    </Typography>

                    <Grid container spacing={1} rowSpacing={1} >
                        {Array.isArray(memberImages) && memberImages.map((items, index) => ( //loading team member images
                            <Grid item xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    image={items.image}
                                    alt={items.alt}
                                    className='about-member-image'
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                    <div className='about-aside'>
                        <h2>What we offer</h2>

                        <Typography sx={{ m: 4 }} variant="body1">
                            Discover Unique masterpieces: If you're looking for unique digital masterpieces, look no further than our marketplace.
                        </Typography>

                        <Divider sx={{ borderColor: grey[50] }} variant="middle" /> {/*make divider white*/}

                        <Typography sx={{ m: 4 }} variant="body1">
                            Empowerment through Ownership: By purchasing an NFT, you get a digital product and you can support your favoured artists on their journey.
                        </Typography>

                        <Divider sx={{ borderColor: grey[50] }} variant="middle" /> {/*make divider white*/}

                        <Typography sx={{ m: 4 }} variant="body1">
                            Transparent and Secure Transactions: Our system is based on blockchain technology which guarantees the privacy of your financial transactions and personal data.
                        </Typography>

                        <Divider sx={{ borderColor: grey[50] }} variant="middle" /> {/*make divider white*/}

                        <Typography sx={{ m: 4 }} variant="body1">
                            Community and Collaboration: "SafeSpace" has an active group of artists, collectors, and fans, it is more than just a marketplace.
                        </Typography>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
};

export default About;