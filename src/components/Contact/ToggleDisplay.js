import React from "react";

import "../../css/Contact.css";

class ContactInfo extends React.Component {
  state = {
    data: null
  };

  // Accessing the vaccines from the backend
  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/opening-hours"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>Contact Us</h1>
        <div className="info-container">
          <h3>Telephone:</h3>{" "}
          <a href="tel:+60374980117">
            <h5>+123-456-789</h5>
          </a>
        </div>
        <div className="info-container">
          <h3>Email:</h3>{" "}
          <a href="mailto:amantk1010@gmail.com">
            <h5>amantk1010@gmail.com</h5>
          </a>
        </div>
        <div className="info-container-opening-hours">
          <h3>Opening Hours:</h3>
          {data
            ? data.map((hours, index) => {
                return (
                  <>
                    <p>
                      <b>{hours.dayOfTheWeek}:</b> {hours.openingHours}
                    </p>
                  </>
                );
              })
            : null}
        </div>
        <div className="info-container-address">
          <h3>Address:</h3>
          <h5>
            <a href="http://maps.google.com/?q=1200 Mumbai, Maharastra">
              Mumbai, Maharastra
            </a>
          </h5>
        </div>
        <div className="info-container-fb">
          <a
            className="fb-icon"
            target="_blank"
            href="https://www.facebook.com/"
          ></a>
          <h5>Find Us on Facebook</h5>
        </div>
      </>
    );
  }
}

export default ContactInfo;
