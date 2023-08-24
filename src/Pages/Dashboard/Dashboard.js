import * as React from 'react';
import { Route, Switch, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Dashboard.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import tech1 from '../../Assets/market/tech/tech1.jpg';
import tech2 from '../../Assets/market/tech/tech2.jpg';
import tech3 from '../../Assets/market/tech/tech3.jpg';
import tech4 from '../../Assets/market/tech/tech4.jpg';

import fashion1 from '../../Assets/market/fashion/fashion1.png';
import fashion2 from '../../Assets/market/fashion/fashion2.png';
import fashion3 from '../../Assets/market/fashion/fashion3.jpg';
import fashion4 from '../../Assets/market/fashion/fashion4.jpg';
import{
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
const chartData = {
    labels: ['January', 'February','March','April','May','June','July','August','September','October','November','December'],
    datasets:[
        {
            label: 'Monetary assets gain',
            backgroundColor: [
                'rgba(78, 85, 90, 0.7)',   // Dark muted colors with transparency
                'rgba(85, 92, 100, 0.7)',
                'rgba(92, 100, 110, 0.7)',
                'rgba(100, 110, 120, 0.7)',
                'rgba(110, 120, 130, 0.7)',
                'rgba(120, 130, 140, 0.7)',
                'rgba(130, 140, 150, 0.7)',
                'rgba(140, 150, 160, 0.7)',
                'rgba(150, 160, 170, 0.7)',
                'rgba(160, 170, 180, 0.7)',
                'rgba(170, 180, 190, 0.7)',
                'rgba(180, 190, 200, 0.7)'
            ],
            borderColor: 'rgba(160, 170, 180, 1)',  // A neutral color that matches the series
            borderWidth: 1,
            data: [6500, 5900, 800, 810, 560, 6000, 70, 800, 90, 100, 20, 3000]
        }
    ]
};

const chartOptions = {
    scales: {
        x: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'  // Faint grey grid lines
            },
            ticks: {
                color: '#333'  // Dark grey color for better visibility on white
            }
        },
        y: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'  
            },
            ticks: {
                color: '#333',  // Dark grey color
                beginAtZero: true
            }
        }
    },
    plugins: {
        legend: {
            labels: {
                color: '#333'   // Dark grey color
            }
        },
        tooltip: {
            backgroundColor: '#f0f0f0',  // Light grey
            titleColor: '#333',          // Dark grey color
            bodyColor: '#333',           // Dark grey color
            borderColor: '#ccc',         // Light grey border
            borderWidth: 1
        }
    }
};




const assetsItems = [
    { name: "item 1", description: "Description", image: tech1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 2", description: "Description", image: tech2, cat: "Entertainment", price: "0.1", seller: "Andrew" },
    { name: "item 3", description: "Description", image: tech3, cat: "Fashion", price: "0.1", seller: "Andrew" },
    { name: "item 4", description: "Description", image: tech4, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 5", description: "Description", image: fashion1, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 6", description: "Description", image: fashion2, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 7", description: "Description", image: fashion3, cat: "Tech", price: "0.1", seller: "Andrew" },
    { name: "item 8", description: "Description", image: fashion4, cat: "Tech", price: "0.1", seller: "Andrew" },
];
const mockHistoryData = [
    { date: "2023-08-01", description: "Bought Apes", amount: "-$500" },
    { date: "2023-08-02", description: "Sold Birds", amount: "+$2,000" },
    { date: "2023-08-03", description: "Sold DracoNfts", amount: "+$5,000" },
    { date: "2023-08-04", description: "Bought ChampsNFTs", amount: "-$200" },
    { date: "2023-08-05", description: "Bought MomNFTs", amount: "-$150" },
    { date: "2023-08-15", description: "Bought VitusNFTs", amount: "-$1000"},
    { date: "2023-08-16", description: "Bought ValtusNFTs", amount: "-$1000"},
    { date: "2023-08-16", description: "Bought ValsaltusNFTs", amount: "-$1000"}
];


const Dashboard = () => {
    {/* set up navigate instance to navigate within page */}
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('isLoggedIn')) {
            navigate("/Login");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');  // Remove the flag from localStorage
        navigate("/Login");  // Redirect to the login page
    };
    
    const [expandedSection, setExpandedSection] = useState('overview'); //overview will lead to original state of page
    return (
        <div className = "mainsection">
            <h1 style={{ marginBottom: '0.1rem' }}>My Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '0.5rem' }}>
                <Button variant="outlined" color="primary" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            {/* whole screen Grid container */}
            <Grid container rowSpacing={2} style={{ padding: '15px' }}>
                {/* button Grid container */}
                <Grid container className= "smallButtons" spacing={0.5} style={{ padding: '0.5rem' }}>
                    {/* Overview Grid item */}
                    <Grid item xs={12} sm = {2}>
                        <Card className="cardStyle cardHover" elevation={3} style={{ height: '30px' }}>
                            <CardActionArea onClick={() => setExpandedSection('overview')}>
                                <p className="cardText" style={{ padding: '1rem', marginTop: "-0.5rem" }}>Overview</p>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* History Grid item */}
                    <Grid item xs={12} sm ={2}>
                        <Card className="cardStyle cardHover" elevation={3} style={{ height: '30px' }}>
                            <CardActionArea onClick={() => setExpandedSection('history')}>
                                <p className="cardText" style={{ padding: '1rem', marginTop: "-0.5rem" }}>History</p>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* Assets Grid item */}
                    <Grid item xs={12} sm = {2}>
                        <Card className="cardStyle cardHover" elevation={3} style={{ height: '30px' }}>
                            <CardActionArea onClick={() => setExpandedSection('assets')}>
                                <p className="cardText" style={{ padding: '1rem', marginTop: "-0.5rem" }}>Assets</p>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                
                
                {/* info grid container below */}
                <Grid container spacing={1} rowSpacing={1} style={{ padding: '0.5rem' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cardStyle cardHover" elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => setExpandedSection('overview')}>
                            <div className='maintext' style={{ padding: '1rem', marginTop: "-0.5rem" }}>
                                Logged in as:
                                <div className="boldtext">
                                    Andrew
                                </div>
                            </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cardStyle cardHover" elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => setExpandedSection('assets')}>
                                <div className='maintext' style={{ padding: '1rem', marginTop: "-0.5rem" }}>
                                    Total Assets
                                    <div className='boldtext'>
                                        215
                                    </div>
                                    <div className='childtext'>+25</div>
                                </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cardStyle cardHover" elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => setExpandedSection('history')}>
                                <div className='maintext' style={{ padding: '1rem', marginTop: "-0.5 rem" }}>
                                    Total Spent
                                    <div className='boldtext'>
                                        $100,000,000
                                    </div>
                                    <div className='childtext'>+$20,000</div>
                                </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                {/* graph + history Grid container */}
                <Grid container spacing={1} rowSpacing={1} style={{ padding: '0.5rem' }}>
                    {(expandedSection === 'overview') &&(
                    <Grid item xs={12} sm={12} md={8}>
                        <Card className="customCard" elevation={3} style={{ height: '400px'}}>
                            <div className="cardHeader" style={{fontSize:'0.8rem',padding:'0.5rem'}}>Profile Overview</div>
                            <div className="cardContent" style={{height:'100%', display:'flex',justifyContent:'center'}}>
                                <Bar data = {chartData} options={chartOptions}/>
                            </div>
                        </Card>
                    </Grid>
                    )}
                    {(expandedSection === 'overview' || expandedSection === 'history') &&(
                    <Grid item xs={12} sm={expandedSection === 'history' ? 12 : 12} md={expandedSection === 'history' ? 12 : 4}> 
                        <Card className="customCard" elevation = {3} style={{height: '400px'}}>
                            <div className="cardHeader" style={{fontSize:'0.8rem',padding:'0.5rem'}}>History</div>
                            <div className="cardContent"  style={{overflowY:'auto',maxHeight:'350px'}}>
                                {/* map iterates over each item,For each transaction in the array, 
                                a new <div> element is created.*/}
                                {
                                    (expandedSection === 'overview' ?
                                        mockHistoryData.slice(0,5) :
                                        mockHistoryData).map((transaction,index) =>(
                                        <div className='transaction' key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                                            <div><strong>Date:</strong> {transaction.date}</div>
                                            <div><strong>Description:</strong> {transaction.description}</div>
                                            <div><strong>Amount:</strong> {transaction.amount}</div>
                                        </div>
                                ))}
                            </div>
                        </Card>
                    </Grid>
                    )}
                    {(expandedSection === 'assets') &&(
                    <Grid item xs={12}> 
                        <Grid container spacing={1} rowSpacing={1}>
                            {assetsItems.map((item, index) => (
                                <Grid item xs={6} md={3} key={index}>
                                    <Card
                                    sx={{ 
                                            maxWidth: 259, 
                                            maxHeight: 298, 
                                            borderRadius: '20px',
                                            margin: '10px', 
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                // boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
                                                boxShadow: '0px 0px 20px 1px rgba(255, 255, 255, 0.5)',
                                            }
                                        }}
                                    >
                                        <CardActionArea sx={{
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
                                        </Card>
                                    
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    )}
                </Grid>
            </Grid>
        </div>
    )
};

export default Dashboard;
