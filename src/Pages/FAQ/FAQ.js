import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

import Divider from '@mui/material/Divider';

import InputBase from '@mui/material/InputBase';

import './faq.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const FAQ = () => {
    const faqStuff = [
        { accordMain: "General", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Transaction", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Security", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Issues", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Popular Questions", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Useful Links", accordSub: [{ contentMain: "", contentSub: "" }] },
    ];

    faqStuff[0].accordSub = [
        { contentMain: "ball", contentSub: "giant" },
        { contentMain: "cat", contentSub: "fox" },
        { contentMain: "dog", contentSub: "eagle" },
    ]
    faqStuff[1].accordSub = [
        { contentMain: "ball", contentSub: "giant" },
        { contentMain: "cat", contentSub: "fox" },
        { contentMain: "dog", contentSub: "eagle" },
    ]
    faqStuff[2].accordSub = [
        { contentMain: "ball", contentSub: "giant" },
        { contentMain: "cat", contentSub: "fox" },
        { contentMain: "dog", contentSub: "eagle" },
    ]
    faqStuff[3].accordSub = [
        { contentMain: "ball", contentSub: "giant" },
        { contentMain: "cat", contentSub: "fox" },
        { contentMain: "dog", contentSub: "eagle" },
    ]
    faqStuff[4].accordSub = [
        { contentMain: "ball", contentSub: "giant" },
        { contentMain: "cat", contentSub: "fox" },
        { contentMain: "dog", contentSub: "eagle" },
    ]
    faqStuff[5].accordSub = [
        { contentMain: "ball", contentSub: "giant" },
        { contentMain: "cat", contentSub: "fox" },
        { contentMain: "dog", contentSub: "eagle" },
    ]

    return (
        <div>
            <h1>FAQ</h1>

            <Grid container direction="column" alignItems="center">
                <TextField
                    className='search-bar-faq'
                    sx={{ color: grey[50] }}
                    placeholder="Search..."
                    InputProps={{
                        className: 'yourWhiteness',
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon className='yourWhiteness'/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>

            <Grid container direction="column" alignItems="center">
                <div>
                    <InputBase
                        className= 'yourWhiteness'
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{
                        }}
                    />
                </div>
            </Grid>

            <Grid container spacing={2} rowSpacing={1} sx={{padding: '0 30px'}}>
                <Grid item xs={12} md={8}>
                    <div className='section3'>
                        {faqStuff.map((items, index) => (
                            <Accordion className='accordioning' TransitionProps={{ unmountOnExit: true }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon className='yourWhiteness'/>} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography>{items.accordMain}</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography>
                                        {items.accordSub.map((items2, index) => (
                                            <Accordion className='accordioning' TransitionProps={{ unmountOnExit: true }}>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon className='yourWhiteness' />} aria-controls="panel1a-content" id="panel1a-header">
                                                    <Typography>{items2.contentMain}</Typography>
                                                </AccordionSummary>

                                                <AccordionDetails>
                                                    <Typography>
                                                        {items2.contentSub}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </Grid>

                <Grid item xs={12} md={4}>
                    <div className='section3'>
                        <Typography sx={{ m: 2 }} variant="h5">Need Help?</Typography>

                        <Divider className='yourWhiteness' variant="middle" />

                        <Typography sx={{ m: 4 }} variant="body1">+0000000000</Typography>

                        <Typography sx={{ m: 4 }} variant="body1">xxx@xxx.xxx</Typography>

                        <Typography sx={{ mt: 4 }} variant="body1">Weekdays</Typography>
                        <Typography sx={{ mb: 4 }} variant="body1">9am-6pm</Typography>

                        <Typography sx={{ mt: 4 }} variant="body1">Weekends</Typography>
                        <Typography sx={{ mb: 2 }} variant="body1">10am-5pm</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default FAQ;