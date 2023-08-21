import Grid from '@mui/material/Grid';
import './about.css';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Grid container spacing={2} rowSpacing={1} sx={{padding: '0 30px'}}>
                    
                <Grid item xs={12} md={8} rowSpacing={14}>
                    
                        <h2>Our Goals</h2>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. In hac habitasse platea dictumst. </p>

                        <h2>Who we are</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. In hac habitasse platea dictumst. </p>
                    
                </Grid>

                <Grid item xs={12} md={4}>
                    
                        <h2>What we do</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante sit amet mi rutrum tristique non fringilla tortor. </p>
                    
                </Grid>
            </Grid>
        </div>
    )
};

export default About;