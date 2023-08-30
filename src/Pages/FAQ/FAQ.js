/* Name: Yong Yuan Chong */
/* ID: 101224021 */

import { useState } from "react";
import { grey } from "@mui/material/colors"; //Make the divider white
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Divider from "@mui/material/Divider";

import "./faq.css";

import { faqStuff } from "../../Assets/database.js"; //faq questions data

const FAQ = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // State for filtered FAQ list
  const [filteredFaq, setFilteredFaq] = useState(faqStuff);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setFilteredFaq(faqStuff);
    } else {
      const filtered = faqStuff.filter((item) => {
        return item.accordSub.some(
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
  return (
    <div>
      <h1>FAQ</h1>

      <Grid container direction="column" alignItems="center">
        <input
          type="text"
          className="faq-search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Grid>

      <Grid container spacing={2} rowSpacing={1} className="faq-padding">
        <Grid item xs={12} md={8}>
          <div className="faq-section-cards">
            {filteredFaq.map((items, index) => ( //loading parent dropdown data
              <Accordion
                className="accordioning" //dropdown colour
                TransitionProps={{ unmountOnExit: true }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="whitening" />} //icon colour
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{items.accordMain}</Typography> {/*main sections*/}
                </AccordionSummary>

                <AccordionDetails> {/*parent dropdown content*/}
                  <Typography>
                    {items.accordSub.map((items2, index) => ( //loading child dropdown data
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
