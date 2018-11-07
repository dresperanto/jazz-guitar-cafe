import React, { Component } from "react";
import GuitaristsAll from "../GuitaristsAll/GuitaristsAll";
import GuitaristDeck from "../GuitaristDeck/GuitaristDeck";

class GuitaristList extends Component {
  state = {
    deckView: true
  };

  onToggleClick = () => {
    // Toggle state between true and false
    this.setState({ deckView: !this.state.deckView });
    console.log("State updated");
  };

  render() {
    return (
      <div
        className="ui raised very padded container segment animated fadeIn"
        style={{ marginTop: "30px" }}
      >
        <h1>
          All Guitarists |{" "}
          <button
            onClick={this.onToggleClick}
            class="ui toggle right floated button"
          >
            Toggle View
          </button>
        </h1>
        {this.state.deckView ? <GuitaristsAll /> : <GuitaristDeck />}
      </div>
    );
  }
}

export default GuitaristList;
