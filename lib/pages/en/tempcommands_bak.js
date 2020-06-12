const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

class Commands extends React.Component {
  constructor(props) {
    super(props);
    state = {
      config: props.siteConfig,
      groups: props.siteConfig.commandGroups,
      allCommands: [],
      commonCommands: [
        "SET",
        "GET",
        "DEL",
        "NEARBY",
        "INTERSECTS",
        "WITHIN",
        "SETHOOK",
        "SETCHAN",
        "SUBSCRIBE"
      ],
      selectedGroup: "",
      sortGroup: { path: "all-commands", order: "asc" }
    };
  }

  render() {
    console.log(props);
    const Tabs = props => (
      <ul className="nav tab-bar tab-fill">
        <div className="tab-left-group" key="tab-left-group">
          <li className="tab-item" id="link-all" key="link-all">
            <a href="#" className="tab-link">
              All
            </a>
          </li>
          <li className="tab-item" id="link-common" key="link-common">
            <a href="#" className="tab-link">
              Common
            </a>
          </li>
        </div>
        <div className="tab-right-group" key="tab-right-group">
          {Object.keys(props.groups)
            .sort()
            .map(groupName => (
              <li
                className="tab-item"
                id={`link-${groupName}`}
                key={`link-${groupName}`}
              >
                <a className="tab-link" href="#">
                  {groupName[0].toUpperCase() + groupName.slice(1)}
                </a>
              </li>
            ))}
        </div>
      </ul>
    );

    return (
      <div className="docMainWrapper wrapper commandsWrapper">
        <Container className="mainContainer postContainer docsContainer commandsContainer">
          <div className="post">
            <header className="postHeader">
              <h1 id="__docusaurus" className="postHeaderTitle">
                Commands
              </h1>
            </header>
            <Tabs groups={this.state.groups}></Tabs>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Commands;

{
  /* <script
          dangerouslySetInnerHTML={{
            __html: `
        var currentActive = document.querySelector('.filterbar > a.filter-link.active');
        var filterbar = document.querySelector('.filterbar');
        filterbar.onclick = function(event) {
          event.preventDefault();
          let target = event.target;
          console.log(currentActive);
          console.log(event.target);
          if (target !== currentActive) {
            console.log("target !== currentActive");
            target.classList.toggle('active');
          }
          
        };
        `
          }}
        ></script> */
}
