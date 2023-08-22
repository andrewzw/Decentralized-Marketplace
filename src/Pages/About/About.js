import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import './about.css';

const goalImage = [
    { imaging: "https://placehold.co/20x20", alting: "goal 1" },
    { imaging: "https://placehold.co/20x20", alting: "goal 2" },
    { imaging: "https://placehold.co/20x20", alting: "goal 3" },
    { imaging: "https://placehold.co/20x20", alting: "goal 4" },
]

const peopleImage = [
    { imaging: "https://placehold.co/20x20", alting: "Tom" },
    { imaging: "https://placehold.co/20x20", alting: "Yuan" },
    { imaging: "https://placehold.co/20x20", alting: "Andrew" },
]

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Grid container spacing={2} rowSpacing={1} sx={{padding: '0 30px'}}>
                    
                <Grid item xs={12} md={8} rowSpacing={14}>
                    
                        <h2>Our Goals</h2>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. In hac habitasse platea dictumst. </p>

                        <Grid container spacing={0.5} rowSpacing={0.5} >
                            {goalImage.map((items, index) => (
                                <Grid item xs={6} md={3}>
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

                        <h2>Who we are</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. In hac habitasse platea dictumst. </p>

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
                    <div className='circle'></div>
                    <h2>What we do</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. </p>
                    <Divider className='yourWhiteness' variant="middle" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. </p>
                    <Divider className='yourWhiteness' variant="middle" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. </p>
                    <Divider className='yourWhiteness' variant="middle" />
                </Grid>
            </Grid>
        </div>
    )
};

export default About;