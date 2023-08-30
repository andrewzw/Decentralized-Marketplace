/* Name: Yong Yuan Chong */
/* ID: 101224021 */

import { grey } from '@mui/material/colors'; //Make the divider white
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import CardMedia from '@mui/material/CardMedia';

import Divider from '@mui/material/Divider';

import './about.css';

import { goalImage, peopleImage } from "../../Assets/database.js"; //about images data

const About = () => {
    return (
        <div>
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
                            {goalImage.map((items, index) => ( //loading goal images
                                <Grid item xs={6} md={3}>
                                    <CardMedia
                                        component="img"
                                        image={items.imaging}
                                        alt={items.alting}
                                        className='about-goal-image'
                                    />

                                    <p className='about-goal-text'>{items.words}</p>
                                </Grid>
                            ))}
                        </Grid>

                        <h2>Who we are</h2>

                        <Typography sx={{ mb: 4 }} variant="body1">
                            A vast but passionate team of people who have a strong interest in the field of NFT is the driving force behind "SafeSpace".
                            We're determined to work hard to broaden the possibilities of NFTs and create an environment where creativity is unrestricted.
                        </Typography>

                        <Grid container spacing={1} rowSpacing={1} >
                            {peopleImage.map((items, index) => ( //loading team member images
                                <Grid item xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        image={items.imaging}
                                        alt={items.alting}
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

                        <Divider sx={{borderColor: grey[50]}} variant="middle" /> {/*make divider white*/}

                        <Typography sx={{ m: 4 }} variant="body1">
                            Empowerment through Ownership: By purchasing an NFT, you get a digital product and you can support your favoured artists on their journey.
                        </Typography>

                        <Divider sx={{borderColor: grey[50]}} variant="middle" /> {/*make divider white*/}

                        <Typography sx={{ m: 4 }} variant="body1">
                            Transparent and Secure Transactions: Our system is based on blockchain technology which guarantees the privacy of your financial transactions and personal data.
                        </Typography>

                        <Divider sx={{borderColor: grey[50]}} variant="middle" /> {/*make divider white*/}

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