const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="heading"> Congratulations </h1>
    <div className="cardContainer">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="nameHeading"> Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology Bhimavaram{" "}
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
