const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

function License(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer postContainer docsContainer licenseContainer">
        <div className="post">
          <header className="postHeader">
            <h1 id="__docusaurus" className="postHeaderTitle">
              Tile38 license and trademark information
            </h1>
          </header>
          <article>
            <p>
              Tile38 is open source software released under the terms of the MIT
              license. Most of the Tile38 source code was written and is
              copyrighted by Josh Baker. A list of other contributors can be
              found on the{" "}
              <a href="https://github.com/tidwall/tile38/graphs/contributors">
                Github Contributors Page
              </a>
              . The Tile38 trademark and logo are copyrighted by Tile38, LLC.
              Permission is required to use the tradmark and logo for commercial
              purposes.
            </p>

            <h2>MIT License</h2>

            <p>Copyright &copy; 2016 Josh Baker</p>

            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the &ldquo;Software&rdquo;), to deal in the Software
              without restriction, including without limitation the rights to
              use, copy, modify, merge, publish, distribute, sublicense, and/or
              sell copies of the Software, and to permit persons to whom the
              Software is furnished to do so, subject to the following
              conditions:
            </p>

            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>

            <p>
              THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </article>
        </div>
      </Container>
    </div>
  );
}

module.exports = License;
