import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Divider from '@mui/material/Divider';

import './faq.css';

const FAQ = () => {
    const faqStuff = [
        { accordMain: "General", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Transaction", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Security", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Issues", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Popular Questions", accordSub: [{ contentMain: "", contentSub: "" }] },
        { accordMain: "Other Resources", accordSub: [{ contentMain: "", contentSub: "" }] },
    ];

    faqStuff[0].accordSub = [
        { contentMain: "What is SafeSpace?", contentSub: "SafeSpace is a digital market where you can discover and buy unique NFTs." },
        { contentMain: "What can I find on SafeSpace?", contentSub: "You can find various types of NFT made by artists and creators from around the world." },
        { contentMain: "How do I get in touch for support?", contentSub: "If you have any inquiries, you can contact our support staff through phone +123456789 or email safespace@gmail.com." },
    ]
    faqStuff[1].accordSub = [
        { contentMain: "How do I buy an NFT?", contentSub: "To buy an NFT, you have to have an account, then browse on the marketplace, click on the NFT and select buy." },
        { contentMain: "What payment methods are accepted?", contentSub: "We accept Ethereum and credit card payments." },
        { contentMain: "How do I know if my purchase was successful?", contentSub: "You can view your transaction history in your account." },
        { contentMain: "What happens when I purchase an NFT?", contentSub: "The purchased NFT will be transfered over to your account, you can trade it with others or keep it for yourself." },
    ]
    faqStuff[2].accordSub = [
        { contentMain: "Is my personal information secure?", contentSub: "We take your security and privacy seriously. Your data is protected by the most recent encryption and security techniques." },
        { contentMain: "What is blockchain technology?", contentSub: "Blockchain technology ensures that your creation, ownership and trading of NFTs is transparent, secure and authentic." },
        { contentMain: "Can my account be hacked?", contentSub: "We have firewalls and intrusion detection systems in place, and we regularly update our security." },
        { contentMain: "What if I find a suspicious account or activity?", contentSub: "Please inform our support staff right away, we will quickly take any necessary action to keep our site secure." },
        { contentMain: "Do you store our payment information?", contentSub: "No, we never save any kind of credit card or other payment information on our servers for any reason. " },
        { contentMain: "What should I do if I suspect my account is compromised?", contentSub: "Change your password right away and get in touch with our support staff if you think your account has been compromised." },
    ]
    faqStuff[3].accordSub = [
        { contentMain: "What to do if I cannot log in to my account?", contentSub: "Double-check your username and password, contact our support staff for further assistance." },
        { contentMain: "I am not able to see my purchased NFT", contentSub: "Check your transaction history in your account to confirm the purchase, wait for some time, contact our support staff for further assistance." },
        { contentMain: "Can I request a refund?", contentSub: "NFT transactions are typically irreversible, contact the seller to discuss your issue." },
    ]
    faqStuff[4].accordSub = [
        { contentMain: "What is an NFT?", contentSub: "NFT is referred to Non-Fungible Token. It is a type of digital assest that uses blockchian technology to indicate ownership of a unique item." },
        { contentMain: "Can I showcase my NFTs to others?", contentSub: "Yes, you can share your assests in your account and others will be able to see them." },
        { contentMain: "How do I create an account?", contentSub: "Click on the profile button in the navigation bar, fill in your information to sign in, an email would be sent to you to verify your account." },
        { contentMain: "How do I access my NFTs", contentSub: "Log in your account, go to your account asset." },
    ]
    faqStuff[5].accordSub = [
        { contentMain: "Educational Resources", contentSub: "https://www.nft-helper.com" },
        { contentMain: "Social Media Links", contentSub: "https://www.twitter.com/safespace" }
    ]

    return (
        <div>
            <h1>FAQ</h1>

            <Grid container direction="column" alignItems="center">
                <input type='text' className='faq-search-bar' placeholder="Search..." />
            </Grid>

            <Grid container spacing={2} rowSpacing={1} className='faq-padding'>
                <Grid item xs={12} md={8}>
                    <div className='faq-section-cards'>
                        {faqStuff.map((items, index) => (
                            <Accordion className='accordioning' TransitionProps={{ unmountOnExit: true }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon className='whitening'/>} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography>{items.accordMain}</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography>
                                        {items.accordSub.map((items2, index) => (
                                            <Accordion className='accordioning' TransitionProps={{ unmountOnExit: true }}>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon className='whitening' />} aria-controls="panel1a-content" id="panel1a-header">
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
                    <div className='faq-section-cards'>
                        <Typography sx={{ mt: 2, mb: 1 }} variant="h5">Need Help?</Typography>
                        
                        <Typography sx={{ mt: 1, mb: 2 }} variant="body1">
                            We can assist you whether you're a creator, a collector, or just interested in learning more about the world of NFTs.
                            For any questions, help, or feedback, you can get in touch with our helpful support staff.
                        </Typography>

                        <Divider className='faq-help' sx={{borderColor: grey[50]}} variant="middle" />

                        <Typography sx={{ m: 4 }} variant="body1">+123456789</Typography>

                        <Typography sx={{ m: 4 }} variant="body1">safespace@gmail.com</Typography>

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