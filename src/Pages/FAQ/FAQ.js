import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const FAQ = () => {
    const faqStuff = [
        { accordMain: "General", accordSub: "banana" },
        { accordMain: "Transaction", accordSub: "dog" },
        { accordMain: "Security", accordSub: "fox" },
        { accordMain: "Issues", accordSub: "hog" },
        { accordMain: "Popular Questions", accordSub: "jil" },
        { accordMain: "Useful Links", accordSub: "lik" },
    ];

    return (
        <div>
            <h1>FAQ</h1>

            <div>
                <p>Search</p>
            </div>

            <Grid container spacing={1} rowSpacing={1}>
                <Grid item xs={8}>
                    <Item>
                        <h2>Test</h2>

                        {faqStuff.map((items, index) => (
                            
                            <>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography>{items.accordMain}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {items.accordSub}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </>
                        ))}
                    </Item>
                </Grid>

                <Grid item xs={4}>
                    <Item>
                        <h2>Test</h2>
                    </Item>
                </Grid>
            </Grid>
        </div>
    )
};

export default FAQ;