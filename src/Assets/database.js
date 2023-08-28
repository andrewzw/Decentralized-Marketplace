// Market data --------------------------------------------------------------------------------------------------------------------
import tech1 from './market/tech/tech1.jpg';
import tech2 from './market/tech/tech2.jpg';
import tech3 from './market/tech/tech3.jpg';
import tech4 from './market/tech/tech4.jpg';

import fashion1 from './market/fashion/fashion1.png';
import fashion2 from './market/fashion/fashion2.png';
import fashion3 from './market/fashion/fashion3.jpg';
import fashion4 from './market/fashion/fashion4.jpg';

import art1 from './market/art/art1.png';
import art2 from './market/art/art2.png';
import art3 from './market/art/art3.png';
import art4 from './market/art/art4.png';


// About data --------------------------------------------------------------------------------------------------------------------
import goalImage1 from './goals/trend.png';
import goalImage2 from './goals/tag.png';
import goalImage3 from './goals/palette.png';
import goalImage4 from './goals/support.png';

import memberImage1 from './members/Tom.jpg';
import memberImage2 from './members/Andrew.JPG';
import memberImage3 from './members/Yuan.jpg';


// Market
export const tabsData = [
    { value: "All", label: "All" },
    { value: "Tech", label: "Tech" },
    { value: "Art", label: "Art" },
    { value: "Fashion", label: "Fashion" },
];

export const featuredItems = [
    { name: "Featured 1", description: "Description", image: tech1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "Featured 2", description: "Description", image: art1, cat: "Art", price: "0.1", seller: "Andrew" },
    { name: "Featured 3", description: "Description", image: fashion1, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Featured 4", description: "Description", image: tech2, cat: "Tech", price: "0.1", seller: "Andrew" }
];

export const listedItems = [
    { name: "Item 1", description: "Description", image: tech1, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 2", description: "Description", image: tech2, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 3", description: "Description", image: tech3, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 4", description: "Description", image: tech4, cat: "Tech", price: "0.1", seller: "Tom" },
    { name: "Item 5", description: "Description", image: art1, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 6", description: "Description", image: art2, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 7", description: "Description", image: art3, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 8", description: "Description", image: art4, cat: "Art", price: "0.1", seller: "Yuan" },
    { name: "Item 9", description: "Description", image: fashion1, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Item 10", description: "Description", image: fashion2, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Item 11", description: "Description", image: fashion3, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "Item 12", description: "Description", image: fashion4, cat: "Fashion", price: "0.1", seller: "Andrew" },
];

export const assetsItems = [
    { name: "item 1", description: "Description", image: tech1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 2", description: "Description", image: tech2, cat: "Entertainment", price: "0.1", seller: "Andrew" },
    { name: "item 3", description: "Description", image: tech3, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "item 4", description: "Description", image: tech4, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 5", description: "Description", image: fashion1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 6", description: "Description", image: fashion2, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 7", description: "Description", image: fashion3, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 8", description: "Description", image: fashion4, cat: "Tech", price: "0.1", seller: "Andrew" },
];
export const mockHistoryData = [
    { date: "2023-08-01", description: "Bought Apes", amount: "-$500" },
    { date: "2023-08-02", description: "Sold Birds", amount: "+$2,000" },
    { date: "2023-08-03", description: "Sold DracoNfts", amount: "+$5,000" },
    { date: "2023-08-04", description: "Bought ChampsNFTs", amount: "-$200" },
    { date: "2023-08-05", description: "Bought MomNFTs", amount: "-$150" },
    { date: "2023-08-15", description: "Bought VitusNFTs", amount: "-$1000"},
    { date: "2023-08-16", description: "Bought ValtusNFTs", amount: "-$1000"},
    { date: "2023-08-16", description: "Bought ValsaltusNFTs", amount: "-$1000"}
];


//About
export const goalImage = [ //images for goals
    { imaging: goalImage1, alting: "trend", words: "See the rise of your NFT" },
    { imaging: goalImage2, alting: "tag", words: "Create and Sell your NFT" },
    { imaging: goalImage3, alting: "palette", words: "Browse our various NFTs" },
    { imaging: goalImage4, alting: "support", words: "Support the NFT creators" },
];

export const peopleImage = [ //images for team members
    { imaging: memberImage1, alting: "Tom" },
    { imaging: memberImage2, alting: "Yuan" },
    { imaging: memberImage3, alting: "Andrew" },
];


//FAQ
export const faqStuff = [ //main sections
    {
        accordMain: "General",
        accordSub: [{ contentMain: "", contentSub: "" }]
    },
    {
        accordMain: "Transaction",
        accordSub: [{ contentMain: "", contentSub: "" }],
    },
    {
        accordMain: "Security",
        accordSub: [{ contentMain: "", contentSub: "" }],
    },
    {
        accordMain: "Issues",
        accordSub: [{ contentMain: "", contentSub: "" }]
    },
    {
        accordMain: "Popular Questions",
        accordSub: [{ contentMain: "", contentSub: "" }],
    },
    {
        accordMain: "Other Resources",
        accordSub: [{ contentMain: "", contentSub: "" }],
    },
];

faqStuff[0].accordSub = [ //General Questions
    {
        contentMain: "What is SafeSpace?",
        contentSub:
        "SafeSpace is a digital market where you can discover and buy unique NFTs.",
    },
    {
        contentMain: "What can I find on SafeSpace?",
        contentSub:
        "You can find various types of NFT made by artists and creators from around the world.",
    },
    {
        contentMain: "How do I get in touch for support?",
        contentSub:
        "If you have any inquiries, you can contact our support staff through phone +123456789 or email safespace@gmail.com.",
    },
];
faqStuff[1].accordSub = [ //Transaction Questions
    {
        contentMain: "How do I buy an NFT?",
        contentSub:
        "To buy an NFT, you have to have an account, then browse on the marketplace, click on the NFT and select buy.",
    },
    {
        contentMain: "What payment methods are accepted?",
        contentSub: "We accept Ethereum and credit card payments.",
    },
    {
        contentMain: "How do I know if my purchase was successful?",
        contentSub: "You can view your transaction history in your account.",
    },
    {
        contentMain: "What happens when I purchase an NFT?",
        contentSub:
        "The purchased NFT will be transfered over to your account, you can trade it with others or keep it for yourself.",
    },
];
faqStuff[2].accordSub = [ //Security Questions
    {
        contentMain: "Is my personal information secure?",
        contentSub:
        "We take your security and privacy seriously. Your data is protected by the most recent encryption and security techniques.",
    },
    {
        contentMain: "What is blockchain technology?",
        contentSub:
        "Blockchain technology ensures that your creation, ownership and trading of NFTs is transparent, secure and authentic.",
    },
    {
        contentMain: "Can my account be hacked?",
        contentSub:
        "We have firewalls and intrusion detection systems in place, and we regularly update our security.",
    },
    {
        contentMain: "What if I find a suspicious account or activity?",
        contentSub:
        "Please inform our support staff right away, we will quickly take any necessary action to keep our site secure.",
    },
    {
        contentMain: "Do you store our payment information?",
        contentSub:
        "No, we never save any kind of credit card or other payment information on our servers for any reason. ",
    },
    {
        contentMain: "What should I do if I suspect my account is compromised?",
        contentSub:
        "Change your password right away and get in touch with our support staff if you think your account has been compromised.",
    },
];
faqStuff[3].accordSub = [ //Issues Questions
    {
        contentMain: "What to do if I cannot log in to my account?",
        contentSub:
        "Double-check your username and password, contact our support staff for further assistance.",
    },
    {
        contentMain: "I am not able to see my purchased NFT",
        contentSub:
        "Check your transaction history in your account to confirm the purchase, wait for some time, contact our support staff for further assistance.",
    },
    {
        contentMain: "Can I request a refund?",
        contentSub:
        "NFT transactions are typically irreversible, contact the seller to discuss your issue.",
    },
];
faqStuff[4].accordSub = [ //Popular Questions
    {
        contentMain: "What is an NFT?",
        contentSub:
        "NFT is referred to Non-Fungible Token. It is a type of digital assest that uses blockchian technology to indicate ownership of a unique item.",
    },
    {
        contentMain: "Can I showcase my NFTs to others?",
        contentSub:
        "Yes, you can share your assests in your account and others will be able to see them.",
    },
    {
        contentMain: "How do I create an account?",
        contentSub:
        "Click on the profile button in the navigation bar, fill in your information to sign in, an email would be sent to you to verify your account.",
    },
    {
        contentMain: "How do I access my NFTs",
        contentSub: "Log in your account, go to your account asset.",
    },
];
faqStuff[5].accordSub = [ //Other Resources Questions
    {
        contentMain: "Educational Resources",
        contentSub: "https://www.nft-helper.com",
    },
    {
        contentMain: "Social Media Links",
        contentSub: "https://www.twitter.com/safespace",
    },
];