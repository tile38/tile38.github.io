/*
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Hero = () => (
      <Container className="heroContainer">
        <section className="hero">
          <div className="content">
            <div className="textarea">
              <div className="inner">
                <h1 className="w400">
                  <span className="w900">Ultra Fast </span>
                  Geospatial Database &amp;
                  <br className="break" /> Geofencing Server
                </h1>
                <p>
                  Ensure your location-based applications are running at their
                  fullest potential.
                </p>
                <p>
                  <br />
                  <a
                    href="topics/installation"
                    className="tile38NavButton solid"
                  >
                    Get Tile38
                  </a>
                </p>
              </div>
            </div>
            <div className="video-container">
              <div className="group">
                <div className="gradient"></div>
                <video
                  playsInline
                  muted
                  autoPlay
                  _hd="400px"
                  _poster="./img/hero-desktop.jpg"
                  _src="./img/hero-desktop.mp4"
                  _mobile="850px"
                  _mobileposter="./img/hero-mobile.jpg"
                  _mobilesrc="./img/hero-mobile.mp4"
                  _loopdelay="3000ms"
                ></video>
                <script>videoAutoPlay();</script>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );

    const Geofence = () => (
      <Container className="geofenceContainer">
        <section className="geofence">
          <div className="content">
            <div className="text-container">
              <div className="pad-left"></div>
              <div className="text">
                <h1 className="w400">
                  <span className="w900">Real-time</span> Geofencing
                </h1>
                <p>
                  Whether you're monitoring a few data points or millions,
                  Tile38 delivers geofence notifications in a snap. Enhance your
                  application and simplify your architechture with Tile38's
                  geofencing capabilities.
                </p>
              </div>
            </div>
            <div className="video-container">
              <video
                playsInline
                muted
                autoPlay
                _hd="320px"
                _poster="./img/geofences.jpg"
                _src="./img/geofences.mp4"
                _loopdelay="0ms"
              ></video>
              <script>videoAutoPlay();</script>
              <div className="gradient"></div>
              <div className="clear"></div>
            </div>
          </div>
        </section>
      </Container>
    );

    const SpatialIndex = () => (
      <Container className="spatialIndexContainer">
        <section className="basic spatial-index">
          <h1 className="w600">Fast Spatial Index</h1>
          <p>
            Tile38 features a high-performance spatial indexing engine. It
            supports a variety of object types including lat/lon points,
            bounding boxes, xyz tiles, geohashes, and geojson.
          </p>
          <p>
            Includes operations like Intersects, Within, Nearby, and Static
            &amp; Roaming Geofencing.
          </p>
          <div className="cards">
            <div className="row">
              <div>
                <img src="./img/search-intersects.png" />
              </div>
              <div>
                <img src="./img/search-within.png" />
              </div>
              <div>
                <img src="./img/search-nearby.png" />
              </div>
              <div>
                <img src="./img/geofence.gif" />
              </div>
              <div>
                <img src="./img/roaming.gif" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    );

    const GeoEvents = () => (
      <Container className="geoEventsContainer">
        <section className="basic geo-events">
          <h1 className="w600">Automated Events</h1>
          <p>
            Tile38 delivers geospatial event notifications for mission-critical
            applications by pairing with external webhooks and event queues.
          </p>
          <p>There's built-in support for the most popular tools, including:</p>
          <div className="cards">
            <div className="row">
              <div>
                <img
                  src="./img/integrate-nats.png"
                  className="nats"
                  alt="NATS"
                />
              </div>
              <div>
                <img
                  src="./img/integrate-kafka.png"
                  className="kafka"
                  alt="Kafka"
                />
              </div>
              <div>
                <img
                  src="./img/integrate-amazonsqs.svg"
                  className="amazonsqs"
                  alt="Amazon SQS"
                />
              </div>
              <div>
                <img
                  src="./img/integrate-grpc.png"
                  className="grpc"
                  alt="GRPC"
                />
              </div>
            </div>
            <div className="row">
              <div>
                <img
                  src="./img/integrate-redis.png"
                  className="redis"
                  alt="Redis"
                />
              </div>
              <div>
                <img
                  src="./img/integrate-rabbitmq.png"
                  className="rabbitmq"
                  alt="RabbitMQ"
                />
              </div>
              <div>
                <img
                  src="./img/integrate-mqtt.png"
                  className="mqtt"
                  alt="MQTT"
                />
              </div>
              <div>
                <img
                  src="./img/integrate-http2.png"
                  className="http2"
                  alt="HTTP/2"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    );

    const Community = () => (
      <Container className="communityContainer">
        <section className="basic community">
          <h1 className="w600">
            Open Source <div className="with-love"></div>
          </h1>
          <p>Tile38 is 100% Free Open Source Software.</p>
          <p>
            We have an active and growing community where you can ask questions
            and discuss ideas. Connect with us on Github, Twitter, or Slack.
          </p>

          <div className="cards">
            <div className="row">
              <div>
                <a href="https://github.com/tidwall/tile38">
                  <img
                    src="./img/community-github.svg"
                    className="github"
                    alt="Github"
                  />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/tile38db">
                  <img
                    src="./img/community-twitter.svg"
                    className="twitter"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div>
                <a href="https://join.slack.com/t/tile38/shared_invite/enQtMzQ0OTEwMDUxMzc5LTc0NTJjZmM3YjFhOGZiZGU2NDNjOWEwM2Q5ZWE3MzFiYWZkZDIyN2U2ZmUzZDBmODU0MjI1ZjQ0N2Y1M2I1NTg">
                  <img
                    src="./img/community-slack.svg"
                    className="slack"
                    alt="Slack"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div className="mainContainer homeContainer">
        <Hero></Hero>
        <Geofence></Geofence>
        <SpatialIndex></SpatialIndex>
        <GeoEvents></GeoEvents>
        <Community></Community>
      </div>
    );
  }
}

module.exports = Index;
