/* Name: Vu Gia Thinh Dang:*/
/* ID: 103177240 */

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Dashboard.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Button from "@mui/material/Button";
import { mockHistoryData } from "../../Assets/database.js";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: 'right', // can be 'top', 'left', 'bottom', 'right'
    labels: {
      fontColor: '#333',
      fontSize: 14,
      boxWidth: 20,
    },
  },
  cutoutPercentage: 0, // this will make the chart a doughnut, for pie set it to 0
  tooltips: {
    backgroundColor: '#555',
    titleFontSize: 16,
    xPadding: 20,
    yPadding: 40,
  },

};

function formatDate(dateString) {
  return dateString.replace("T", " ");
}

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }]
  });

  const [assetsItems, setAssetItem] = useState([])
  const navigate = useNavigate(); //navigate within page
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/Login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove the flag from localStorage
    navigate("/Login"); // Redirect to the login page
  };

  //Error handling + fetch data
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnackbarOpen(false);
  };

  const fetchApiData = async (url, setData, errorMessage) => {
    let tempErrorMessage = '';
    let errorLogged = false;

    try {
      const response = await axios.get(url); //fetch data from url
      if ('error' in response.data) {
        if (!errorLogged) {
          tempErrorMessage += errorMessage; //append error message - RESPOND error
          errorLogged = true; //only log error once
        }
        console.log(response.data.error);
      } else if (Array.isArray(response.data) && response.data.length === 0) { //add error message if no data
        tempErrorMessage += 'No items available. ';
      } else {
        setData(response.data); //set data if no error
      }
    } catch (error) {
      if (!errorLogged) {
        tempErrorMessage += errorMessage; //append error message - FECTHING error
        errorLogged = true;
      }
    }

    return tempErrorMessage;
  };
  //transaction list data
  const [transactions, setTransactions] = useState([]);
  const currentUserID = localStorage.getItem("userId");  // Replace this with wherever you're getting the current user's ID

  useEffect(() => {
      // Fetch the transaction history when the component mounts
      const fetchTransactionHistory = async () => {
          try {
              const response = await axios.get(`http://localhost:8000/getTransactionHistory/${currentUserID}`);
              setTransactions(response.data);
          } catch (error) {
              console.error('Failed to fetch transaction history:', error);
          }
      };

      fetchTransactionHistory();
  }, [currentUserID]);  // The effect will re-run if currentUserID changes
  

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId");
      console.log("Stored user_id:", userId);
      let allErrorMessages = [];
      const userError = await fetchApiData(
        'http://127.0.0.1:8000/getUser/', //url
        setUsers, //setData
        'Sorry, we are encountering an error fetching user\'s info. ' //errorMessage
      );
      if (userError) allErrorMessages.push(userError)

      const assetItemsError = await fetchApiData(
        `http://127.0.0.1:8000/getItemsForUser/${userId}`, //url
        setAssetItem, //setData
        'Sorry, we are encountering an error fetching asset items. ' //errorMessage
      );
      if (assetItemsError) allErrorMessages.push(assetItemsError);

      // New addition for fetching user's purchased items by category...
      const userPurchasesByCategoryError = await fetchApiData(
        `http://127.0.0.1:8000/api/user/${userId}/purchases_by_category`,
        data => {
          // Transform the data into a format suitable for Chart.js
          const labels = Object.keys(data);
          const values = Object.values(data);

          setChartData({
            labels: labels,
            datasets: [{
              data: values,
              backgroundColor: colors.slice(0, values.length),
            }]
          });
        },
        'Sorry, we are encountering an error fetching purchase data by category. '
      );
      if (userPurchasesByCategoryError) allErrorMessages.push(userPurchasesByCategoryError);
      console.log("chartdata", chartData)

      if (allErrorMessages.length > 0) {
        setErrorMessages((prevMessages) => [...prevMessages, ...allErrorMessages]);
        setErrorSnackbarOpen(true);
      }

      if (allErrorMessages.length > 0) {
        setErrorMessages(allErrorMessages); // set new error messages
        setErrorSnackbarOpen(true); // open snackbar
      } else {
        setErrorMessages([]); // clear any existing error messages
      }
    };

    fetchData(); //call function
  }, []);

  const [expandedSection, setExpandedSection] = useState("overview"); //overview will lead to original state of page

  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem("userId");
  // Find the current user based on the userId from localStorage
  const currentUser = users.find(u => u.user_id === parseInt(userId, 10));

  return (
    <div>
      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleErrorSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {/* Display all error messages */}
        <Alert onClose={handleErrorSnackbarClose} severity="error">
          {Array.isArray(errorMessages) && errorMessages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </Alert>
      </Snackbar>
      <h1 style={{ marginBottom: "0.1rem" }}>My Dashboard</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "0.5rem",
        }}
      >
        <Button variant="outlined" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      {/* whole screen Grid container */}
      <Grid container rowSpacing={2} style={{ padding: "35px" }}>
        {/* button Grid container */}
        <Grid
          container
          className="smallButtons"
          spacing={0.5}
          style={{ padding: "0.5rem" }}
        >
          {/* Overview Grid item */}
          <Grid item xs={12} sm={2}>
            <Card className="cardStyle cardHover" elevation={3}>
              <CardActionArea onClick={() => setExpandedSection("overview")}>
                <p
                  className="cardText"
                  style={{ padding: "1rem", marginTop: "-0.5rem" }}
                >
                  Overview
                </p>
              </CardActionArea>
            </Card>
          </Grid>
          {/* History Grid item */}
          <Grid item xs={12} sm={2}>
            <Card className="cardStyle cardHover" elevation={3}>
              <CardActionArea onClick={() => setExpandedSection("history")}>
                <p
                  className="cardText"
                  style={{ padding: "1rem", marginTop: "-0.5rem" }}
                >
                  History
                </p>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Assets Grid item */}
          <Grid item xs={12} sm={2}>
            <Card className="cardStyle cardHover" elevation={3}>
              <CardActionArea onClick={() => setExpandedSection("assets")}>
                <p
                  className="cardText"
                  style={{ padding: "1rem", marginTop: "-0.5rem" }}
                >
                  Assets
                </p>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        {/* info grid container below */}
        <Grid
          container
          spacing={1}
          rowSpacing={1}
          style={{ padding: "0.5rem" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="cardStyle cardHover"
              elevation={3}
              style={{ height: "100px" }}
            >
              <CardActionArea
                style={{ height: "100px" }}
                onClick={() => setExpandedSection("overview")}
              >
                <div
                  className="maintext"
                  style={{ padding: "1rem", marginTop: "-0.5rem" }}
                >
                  Logged in as:
                  <div className="boldtext">{currentUser ? currentUser.username : 'Loading...'}</div>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="cardStyle cardHover"
              elevation={3}
              style={{ height: "100px" }}
            >
              <CardActionArea
                style={{ height: "100px" }}
                onClick={() => setExpandedSection("assets")}
              >
                <div
                  className="maintext"
                  style={{ padding: "1rem", marginTop: "-0.5rem" }}
                >
                  Total Assets
                  <div className="boldtext">{assetsItems.length}</div>
                  <div className="childtext">Assets</div>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="cardStyle cardHover"
              elevation={3}
              style={{ height: "100px" }}
            >
              <CardActionArea
                style={{ height: "100px" }}
                onClick={() => setExpandedSection("history")}
              >
                <div
                  className="maintext"
                  style={{ padding: "1rem", marginTop: "-0.5 rem" }}
                >
                  Balance
                  <div className="boldtext">{currentUser ? currentUser.balance : 'Loading...'}</div>
                  <div className="childtext">ETH</div>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        {/* graph + history Grid container */}
        <Grid
          container
          spacing={1}
          rowSpacing={1}
          style={{ padding: "0.5rem" }}
        >
          {expandedSection === "overview" && (
            <Grid item xs={12} sm={12} md={8}>
              <Card
                className="customCard"
                elevation={3}
                style={{ height: "400px", color: "#fff" }}
              >
                <div
                  className="cardHeader"
                  style={{ fontSize: "0.8rem", padding: "0.5rem" }}
                >
                  Profile Overview
                </div>
                <div
                  className="cardContent"
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="chart-container">
                    <Doughnut data={chartData} options={chartOptions} />
                  </div>
                </div>
              </Card>
            </Grid>
          )}
          {(expandedSection === "overview" ||
            expandedSection === "history") && (
              <Grid
                item
                xs={12}
                sm={expandedSection === "history" ? 12 : 12}
                md={expandedSection === "history" ? 12 : 4}
              >
                <Card
                  className="customCard"
                  elevation={3}
                  style={{ height: "400px", color: "#fff" }}
                >
                  <div
                    className="cardHeader"
                    style={{ fontSize: "0.8rem", padding: "0.5rem" }}
                  >
                    History
                  </div>
                  <div
                    className="cardContent"
                    style={{ overflowY: "auto", maxHeight: "350px" }}
                  >
                    {/* map iterates over each item,For each transaction in the array, 
                                a new <div> element is created.*/}
                    {(expandedSection === "overview"
                      ? transactions.slice(0, 5)
                      : transactions
                    ).map((transaction, index) => (
                      <div
                        className="transaction"
                        key={index}
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        <div>
                          <strong>Date:</strong> {formatDate(transaction.date)}
                        </div>
                        <div>
                          <strong>Description:</strong> {transaction.description}
                        </div>
                        <div>
                          <strong>Quantity:</strong> {transaction.quantity}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Grid>
            )}
          {expandedSection === "assets" && (
            <Grid item xs={12}>
              <Grid container spacing={1} rowSpacing={1}>
                {assetsItems.map((item, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Card
                      sx={{
                        maxWidth: 259,
                        backgroundColor: "transparent",
                        border: "none",
                        maxHeight: 298,
                        borderRadius: "20px",
                        margin: "10px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          // boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
                          boxShadow:
                            "0px 0px 20px 1px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                    >
                      <CardActionArea
                        sx={{
                          borderRadius: "10px",
                          maxHeight: "256px",
                          minHeight: "256px",
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            width="100%"
                            image={item.image}
                            alt={item.name}
                            sx={{
                              borderRadius: "10px",
                              maxHeight: "256px",
                              minHeight: "256px",
                            }}
                          />
                          <div className="img-text">
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
  );
};

export default Dashboard;
