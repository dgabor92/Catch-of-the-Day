import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    //1. Stop the form from submitting
    event.preventDefault();
    //2. get the text from that input   Don't Touch the DOM!!!!
    console.log(this);
    //3. change the page to /store/whatever-thex-entered
  };
  render() {
    return (
      //hasznos alkalmazni a React.Fragment tag-et ha több HTML elemet akarok kiiratni a DOM-ba!!!
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store </button>
        </form>
      </React.Fragment>
    );
  }
}
export default StorePicker;
