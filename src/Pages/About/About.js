import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

import { grey } from '@mui/material/colors';
import SellIcon from '@mui/icons-material/Sell';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaletteIcon from '@mui/icons-material/Palette';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import './about.css';
import memberImage1 from '../../Assets/members/Tom.jpeg';
import memberImage2 from '../../Assets/members/Andrew.JPG';
import memberImage3 from '../../Assets/members/Yuan.jpg';

const peopleImage = [
    { imaging: memberImage1, alting: "Tom" },
    { imaging: memberImage2, alting: "Yuan" },
    { imaging: memberImage3, alting: "Andrew" },
]

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Grid container spacing={2} rowSpacing={1} sx={{padding: '0 30px'}}>
                    
                <Grid item xs={12} md={8} rowSpacing={1}>
                    
                        <h2>Our Goals</h2>
                        
                        <p>
                            Our goal at "SafeSpace" is to enable creative individuals by giving them a platform for presenting their digital works with the world.
                            Every digital creations becomes a work of art in our humble view, and as such, it must to be recognised and appreciated.
                            We want to revolutionise how people see, value, and engage with digital art and collectibles.
                        </p>

                        <Grid container spacing={0.5} rowSpacing={0.5} >
                            <Grid item xs={6} md={3}>
                                <TrendingUpIcon className='yourWhiteness' sx={{
                                        minHeight: "100px",
                                        minWidth: "100px",
                                }}/>
                                <span>See the rise of your NFT</span>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <SellIcon className='yourWhiteness' sx={{
                                        minHeight: "100px",
                                        minWidth: "100px",
                                }}/>
                                <span>Create and Sell your NFT</span>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <PaletteIcon className='yourWhiteness' sx={{
                                        minHeight: "100px",
                                        minWidth: "100px",
                                }}/>
                                <span>Browse our various NFTs</span>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <VolunteerActivismIcon className='yourWhiteness' sx={{
                                        minHeight: "100px",
                                        minWidth: "100px",
                                }}/>
                                <span>Support the NFT creators</span>
                            </Grid>
                        </Grid>

                        <h2>Who we are</h2>

                        <p>
                            A vast but passionate team of people who have a strong interest in the field of NFT is the driving force behind "SafeSpace".
                            We're determined to work hard to broaden the possibilities of NFTs and create an environment where creativity is unrestricted.
                        </p>

                        <Grid container spacing={1} rowSpacing={1} >
                            {peopleImage.map((items, index) => (
                                <Grid item xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        image={items.imaging}
                                        alt={items.alting}
                                        sx={{
                                            borderRadius: '10px',
                                            maxHeight: "300px",
                                            minHeight: "50px",
                                            maxWidth: "300px",
                                            minWidth: "50px",
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                </Grid>

                

                <Grid item xs={12} md={4}>
                    <div className='cards2'>
                        <h2>What we offer</h2>

                        <p>
                        Discover Unique masterpieces: If you're looking for unique digital masterpieces, look no further than our marketplace.
                        </p>
                        <Divider className='yourWhiteness' sx={{borderColor: grey[50]}} variant="middle" />
                        <p>
                        Empowerment through Ownership: By purchasing an NFT, you get a digital product and you can support your favoured artists on their journey.
                        </p>
                        <Divider className='yourWhiteness' sx={{borderColor: grey[50]}} variant="middle" />
                        <p>
                        Transparent and Secure Transactions: Our system is based on blockchain technology which guarantees the privacy of your financial transactions and personal data.
                        </p>
                        <Divider className='yourWhiteness' sx={{borderColor: grey[50]}} variant="middle" />
                        <p>
                        Community and Collaboration: "SafeSpace" has an active group of artists, collectors, and fans, it is more than just a marketplace. 
                        </p>
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    )
};

export default About;