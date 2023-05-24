import React from "react";
import { marked } from "marked";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <>
        <div className="App">
          <div className="container">
            <textarea
              className="input"
              value={this.state.markdown}
              onChange={(e) => {
                this.updateMarkdown(e.target.value);
              }}
            ></textarea>
            <div
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}
