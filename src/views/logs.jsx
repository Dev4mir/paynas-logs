import React, { Component } from "react";

class LogsView extends Component {
  componentDidMount() {
    console.log(document.getElementById("lol"));
  }
  render() {
    return (
      <div id="lol">
        <h2>Paynas Logs</h2>
        <ul>
          {this.props.data.map((el) => (
            <li key={el._id}>
              <p>Project Id: {el.projectId}</p>
              <ul>
                {typeof el.data === "object"
                  ? Object.keys(el.data).map((key) => (
                      <li key={key}>
                        {key}: {el.data[key]}
                      </li>
                    ))
                  : null}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LogsView;
