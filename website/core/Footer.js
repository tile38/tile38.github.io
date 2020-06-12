/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div className="legal">
            <section className="copyright">
              {this.props.config.copyright}
              <a href={this.docUrl("license")}>MIT License</a>
            </section>
          </div>

          <div className="docs">
            <h5>Docs</h5>
            <a href={this.docUrl("topics/installation")}>Getting Started</a>
            <a href={this.docUrl("topics/geofencing")}>Geofences</a>
            <a href={this.docUrl("commands/")}>Commands</a>
          </div>
          <div className="community">
            <h5>Community</h5>
            {/* <a href={this.pageUrl("users.html", this.props.language)}>
              User Showcase
            </a> */}
            <a
              href="https://stackoverflow.com/search?q=tile38"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://tile38.com/slack">Slack</a>
            <a href="https://twitter.com/tile38db" rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div className="more">
            <h5>More</h5>
            {/* BLOG */}
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            {/* GITHUB  */}
            <a href="https://github.com/tidwall/tile38">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/tidwall/tile38/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>

            {/* SOCIAL: TWITTER & FACEBOOK */}
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
