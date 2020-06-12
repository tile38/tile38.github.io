const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

class Commands extends React.Component {
  state = {
    groups: [],
    commands: [],
    selectedGroup: "",
    sortColumn: { path: "title", order: "asc" }
  };

  render() {
    const Pills = props => (
      <ul className="pill-bar pill-fill">
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
        <li className="pill-item">
          <a href="" className="pill-link">
            Category
          </a>
        </li>
      </ul>
    );

    const Tabs = props => (
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
    );

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer postContainer docsContainer">
          <Pills></Pills>
        </Container>
      </div>
    );
  }
}

module.exports = Commands;
