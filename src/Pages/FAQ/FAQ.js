/* Name: Yong Yuan Chong */
/* ID: 101224021 */

import { grey } from "@mui/material/colors"; //Make the divider white
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Divider from "@mui/material/Divider";

import "./faq.css";

import axios from "axios";
import { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FAQ = () => {
  const [mainQuestion, setMainQuestion] = useState([]);
  const [subQuestion, setSubQuestion] = useState([]);

  //Error handling
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }
    setErrorSnackbarOpen(false);
  };

  //Function to Fetch data from backend and handle errors
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

  //Call to backend to fetch data
  useEffect(() => {
    const fetchData = async () => {
    let allErrorMessages = [];

    const mainQuestionError = await fetchApiData(
      'http://127.0.0.1:8000/getMainQuestion/',
      setMainQuestion,
      'Error fetching main frequently asked question.'
    );
    if (mainQuestionError) allErrorMessages.push(mainQuestionError);

    const subQuestionError = await fetchApiData(
      'http://127.0.0.1:8000/getSubQuestion/',
      setSubQuestion,
      'Error fetching sub frequently asked question.'
    );
    if (subQuestionError) allErrorMessages.push(subQuestionError);

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

  //adapt array into a format readable for Accordion
  var adaptedArray = [{main_question: "General"},{main_question: "Transaction"},{main_question: "Security"},{main_question: "Issues"},{main_question: "Popular Questions"},{main_question: "Other Resources"}]
  var i = 0; //array element
  var j = 0; //nested array element

  mainQuestion.map((items, index) => { //mapping array from database
    adaptedArray[i] = {
      main_question: items.main_question, sub_question: []
    }

    subQuestion.map((items2, index) => { //mapping array from
      if (items2.main_id == i+1) { //if the sub question and answer is within the main question
        adaptedArray[i].sub_question[j] = {contentMain: items2.sub_question, contentSub: items2.answer};
        j++; //next nested array element
      }
    })
    j = 0; //reset nested array element
    i++; //next array element
  })

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // State for filtered FAQ list
  const [filteredFaq, setFilteredFaq] = useState(adaptedArray);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setFilteredFaq(adaptedArray);
    } else {
      const filtered = adaptedArray.filter((item) => {
        return item.sub_question.some(
          (subItem) =>
            subItem.contentMain
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            subItem.contentSub
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
        );
      });
      setFilteredFaq(filtered);
    }
  };

  const clickme = () => {
    setFilteredFaq(adaptedArray)
  }

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
        {errorMessages.map((message, index) => (
            <div key={index}>{message}</div>
        ))}
        </Alert>
      </Snackbar>

      <h1>FAQ</h1>

      <Grid container direction="column" alignItems="center">
        <input
          type="text"
          className="faq-search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onClick={handleSearchChange}
        />
      </Grid>

      <Grid container spacing={2} rowSpacing={1} className="faq-padding">
        <Grid item xs={12} md={8}>
          <div className="faq-section-cards">
            {Array.isArray(filteredFaq) && filteredFaq.map((items, index) => ( //loading parent dropdown data
              <Accordion
                className="accordioning" //dropdown colour
                TransitionProps={{ unmountOnExit: true }}
                onClick={clickme}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="whitening" />} //icon colour
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{items.main_question}</Typography> {/*main sections*/}
                </AccordionSummary>

                <AccordionDetails> {/*parent dropdown content*/}
                  <Typography>
                    {Array.isArray(items.sub_question) && items.sub_question.map((items2, index) => ( //loading child dropdown data
                      <div>
                        <Accordion
                          className="accordioning" //dropdown colour
                          TransitionProps={{ unmountOnExit: true }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon className="whitening" />} //icon colour
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{items2.contentMain}</Typography> {/*questions*/}
                          </AccordionSummary>

                          <AccordionDetails> {/*child dropdown content*/}
                            <Typography>{items2.contentSub}</Typography> {/*answers*/}
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="faq-section-cards">
            <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
              Need Help?
            </Typography>

            <Typography sx={{ mt: 1, mb: 2 }} variant="body1">
              We can assist you whether you're a creator, a collector, or just
              interested in learning more about the world of NFTs. For any
              questions, help, or feedback, you can get in touch with our
              helpful support staff.
            </Typography>

            <Divider
              className="faq-help"
              sx={{ borderColor: grey[50] }} //make divider white
              variant="middle"
            />

            <Typography sx={{ m: 4 }} variant="body1">
              +123456789
            </Typography>

            <Typography sx={{ m: 4 }} variant="body1">
              safespace@gmail.com
            </Typography>

            <Typography sx={{ mt: 4 }} variant="body1">
              Weekdays
            </Typography>
            <Typography sx={{ mb: 4 }} variant="body1">
              9am-6pm
            </Typography>

            <Typography sx={{ mt: 4 }} variant="body1">
              Weekends
            </Typography>
            <Typography sx={{ mb: 2 }} variant="body1">
              10am-5pm
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FAQ;
