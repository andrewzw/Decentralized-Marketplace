import * as React from 'react';
import './Dashboard.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
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
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [6500, 5900, 800, 810, 560,6000,70,800,90,100,20,3000]
        }
    ]

};
const chartOptions = {
    layout: {
        padding: {
            bottom: 28 // Adjust this value as needed
        }
    },
    scales: {
        y: {
            ticks: {
                callback: function(value, index, values) {
                    return '$' + value;
                }
            }
        }
    }
};

const mockHistoryData = [
    { date: "2023-08-01", description: "Bought Apes", amount: "-$500" },
    { date: "2023-08-02", description: "Sold Birds", amount: "+$2,000" },
    { date: "2023-08-03", description: "Sold DracoNfts", amount: "+$5,000" },
    { date: "2023-08-04", description: "Bought ChampsNFTs", amount: "-$200" },
    { date: "2023-08-05", description: "Bought MomNFTs", amount: "-$150" },
    { date: "2023-08-15", description: "Bought VitusNFTs", amount: "-$1000"},
    { date: "2023-08-16", description: "Bought ValtusNFTs", amount: "-$1000"}
];
const Dashboard = () => {
    return (
        <div>
            <h1>My Dashboard</h1>
            {/* whole screen Grid container */}
            <Grid container rowSpacing={2} style={{ padding: '20px' }}>
                {/* button Grid container */}
                <Grid container spacing={1} rowSpacing={1}>
                    <Grid item xs={3} container spacing={0.5}>
                        {/* Overview Grid item */}
                        <Grid item xs={4}>
                            <Card elevation={3} style={{ height: '30px' }}>
                                <CardActionArea onClick={() => { console.log("Overview clicked!"); }}>
                                    <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>Overview</div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        {/* History Grid item */}
                        <Grid item xs={4}>
                            <Card elevation={3} style={{ height: '30px' }}>
                                <CardActionArea onClick={() => { console.log("History clicked!"); }}>
                                    <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>History</div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        {/* Assets Grid item */}
                        <Grid item xs={4}>
                            <Card elevation={3} style={{ height: '30px' }}>
                                <CardActionArea onClick={() => { console.log("Assets clicked!"); }}>
                                    <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>Assets</div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                {/* info grid container below */}
                <Grid container spacing={1} rowSpacing={1} item xs={12}>
                    <Grid item xs={4}>
                        <Card elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => { console.log("Assets clicked!"); }}>
                            <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>
                                Logged in as:
                                <div className="boldtext">
                                    Andrew
                                </div>
                            </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => { console.log("Assets clicked!"); }}>
                                <div style={{ padding: '1rem', marginTop: "-0.5rem" }}>
                                    Total Assets
                                    <div className='boldtext'>
                                        215
                                    </div>
                                    <div className='childtext'>+25</div>
                                </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={3} style={{ height: '100px' }}>
                            <CardActionArea style={{ height: '100px' }} onClick={() => { console.log("Assets clicked!"); }}>
                                <div style={{ padding: '1rem', marginTop: "-0.5 rem" }}>
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
                <Grid container spacing={1} rowSpacing={1} item xs={12}>
                    <Grid item xs={8}>
                        <Card elevation={3} style={{ height: '400px'}}>
                            <div style={{fontSize:'0.8rem',padding:'0.5rem'}}>Profile Overview</div>
                            <div style={{height:'100%', display:'flex',justifyContent:'center'}}>
                                <Bar data = {chartData} options={chartOptions}/>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card elevation = {3} style={{height: '400px'}}>
                            <div style={{fontSize:'0.8rem',padding:'0.5rem'}}>History</div>
                            <div style={{overflowY:'auto',maxHeight:'350px'}}>
                                {/* map iterates over each item,For each transaction in the array, 
                                a new <div> element is created.*/}
                                {mockHistoryData.map((transaction,index) =>(
                                    <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                                        <div><strong>Date:</strong> {transaction.date}</div>
                                        <div><strong>Description:</strong> {transaction.description}</div>
                                        <div><strong>Amount:</strong> {transaction.amount}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
};

export default Dashboard;
