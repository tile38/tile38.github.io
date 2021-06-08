const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const DocsSidebar = require("../../core/DocsSidebar.js");
const OnPageNav = require("../../core/nav/OnPageNav.js");
const translation = require("../../server/translation.js");
const {
  idx,
  getGitLastUpdatedTime,
  getGitLastUpdatedBy
} = require("../../core/utils.js");

const url = require("url");
const path = require("path");

class Commands extends React.Component {
  render() {
    // console.log(this.props.config);
    // console.log(Metadata);
    const { config } = this.props;

    const commandGroups = this.props.config.commandGroups;
    const allCommands = this.props.config.allCommands;

    const metadata = {
      id: "commands/index",
      title: "Commands",
      sidebar_label: "Commands",
      source: "commands/index.md",
      permalink: "commands/index.html",
      localized_id: "commands/index",
      language: "en",
      sidebar: "docs",
      category: "Getting Started",
      subcategory: null,
      order: 7,
      previous_id: "topics/replication",
      previous: "topics/replication",
      previous_title: "Replication",
      next_title: "Geofencing",
      next_id: "topics/geofencing",
      next: "topics/geofencing"
    };

    /* code borrowed from DocsLayout.js so that a similar layout can be used without invoking DocsLayout here: the Docusaurus DocsLayout Component would not render the dynamic filterbar properly within its Doc Component */
    const content = this.props.children;
    const i18n = translation[metadata.language];

    const hasOnPageNav = this.props.config.onPageNav === "separate";

    const previousTitle =
      idx(i18n, ["localized-strings", "docs", metadata.previous_id, "title"]) ||
      idx(i18n, ["localized-strings", "previous"]) ||
      metadata.previous_title ||
      "Previous";

    const nextTitle =
      idx(i18n, ["localized-strings", "docs", metadata.next_id, "title"]) ||
      idx(i18n, ["localized-strings", "next"]) ||
      metadata.next_title ||
      "Next";

    const getRelativeURL = (from, to) => {
      const extension = this.props.config.cleanUrl ? "" : ".html";
      const relativeHref = path
        .relative(`${from}.html`, `${to}.html`)
        .replace("\\", "/")
        .replace(/^\.\.\//, "")
        .replace(/\.html$/, extension);
      return url.resolve(
        `${this.props.config.baseUrl}${metadata.permalink}`,
        relativeHref
      );
    };
    /* end borrowed Docusaurus component initiation code */

    const FilterBar = props => (
      <div className="filterbar">
        {props.groups.sort().map(groupName => (
          <a
            className={`link-${groupName === "all" ? "" : groupName}`}
            key={`link-${groupName}`}
            href={`#${groupName === "all" ? "" : groupName}`}
          >
            {groupName[0].toUpperCase() + groupName.slice(1)}
          </a>
        ))}
      </div>
    );

    const CommandsList = props => (
      <div className="commands-list">
        {Object.keys(props.commands)
          .sort()
          .map(command => (
            <a
              className={`command grp-${props.commands[command].group}`}
              key={`cmd-${command}`}
              href={`${props.config.baseUrl}commands/${props.commands[command].fileName}`}
            >
              <div className="nameargs">
                <span className="name">{command}</span>
              </div>
              <div className="summary">{props.commands[command].summary}</div>
            </a>
          ))}
      </div>
    );

    return (
      <div className="docMainWrapper wrapper">
        <DocsSidebar
          collapsible={this.props.config.docsSideNavCollapsible}
          metadata={metadata}
        ></DocsSidebar>
        <Container className="mainContainer docsContainer">
          <div className="post">
            <header className="postHeader">
              <h1 className="postHeaderTitle">Commands</h1>
            </header>
            <article className="commandtable">
              <FilterBar groups={commandGroups}></FilterBar>
              <hr></hr>
              <CommandsList
                commands={allCommands}
                config={config}
              ></CommandsList>
            </article>
          </div>
          {/* code borrowed from Docusaurus DocsLayout Component for rendering 'previous' and 'next' navigation buttons */}
          <div className="docs-prevnext">
            {metadata.previous_id && (
              <a
                className="docs-prev button"
                href={getRelativeURL(
                  metadata.localized_id,
                  metadata.previous_id
                )}
              >
                <span className="arrow-prev">← </span>
                <span
                  className={
                    previousTitle.match(/[a-z][A-Z]/) &&
                    "function-name-prevnext"
                  }
                >
                  {previousTitle}
                </span>
              </a>
            )}
            {metadata.next_id && (
              <a
                className="docs-next button"
                href={getRelativeURL(metadata.localized_id, metadata.next_id)}
              >
                <span
                  className={
                    nextTitle.match(/[a-z][A-Z]/) && "function-name-prevnext"
                  }
                >
                  {nextTitle}
                </span>
                <span className="arrow-next"> →</span>
              </a>
            )}
          </div>
        </Container>
        {hasOnPageNav && (
          <nav className="onPageNav">
            <OnPageNav rawContent={content} />
          </nav>
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var llink = null
            function hashed(){
              var h = ""
              var all = document.querySelectorAll(".commandtable .command")
              if (window.location.hash.length > 0){
                h = window.location.hash.slice(1)
              }
              if (h != ""){
                for (var i=0;i<all.length;i++){
                  all[i].style.display = 'none';
                }
                var items = document.querySelectorAll(".commandtable .command.grp-"+h)
                for (var i=0;i<items.length;i++){
                  items[i].style.display = '';
                }
              } else{
                for (var i=0;i<all.length;i++){
                  all[i].style.display = '';
                }
              }
              if (llink){
                llink.style.fontWeight = 400;
              }
              var link = document.querySelector(".link-"+h)
              if (link){
                link.style.fontWeight = 700
                llink = link;
              }
            }
            window.addEventListener("hashchange", function(){ hashed(); })
            hashed()
            var bar = document.querySelector(".commandtable .filterbar")
            if (bar){
              bar.style.display = 'flex';
            }`
          }}
        ></script>
      </div>
    );
  }
}

Commands.title = "Commands";

module.exports = Commands;
