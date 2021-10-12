import React from "react";
import "./Product.css";
import "antd/dist/antd.css";
import { PageHeader } from "antd";
import { ProductList } from "../config/Configs.js";
import ReactGA from 'react-ga';
import { ThreekitProvider, } from 'threekit';
import { Player, Form } from 'threekit/components'


let clicked = false;

const hideHand = () => {

  document.getElementById("hand-indicator") == undefined
    ? console.log('nothing')
    : (document.getElementById("hand-indicator").style = "display: none");
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      loaded: false,
    };
  }
  componentDidMount() {
    const productId = this.props.match.params.productId;
    const product = ProductList[productId];

    ReactGA.initialize("UA-63905846-9");
    ReactGA.set({ dimension1: "Quickdemo" });
    ReactGA.pageview(product.name);

    if (clicked == false) {
      document
        .getElementById("threekit-container")
        .addEventListener("mousedown", function () {
          // document.getElementById("hand-container").remove();
          hideHand();
        });

      document
        .getElementById("threekit-container")
        .addEventListener("touchstart", function () {
          // document.getElementById("hand-container").remove();
          hideHand();
        });
    }

    // !product
    //   ? console.log("no product")
    //   : // Put player here
    // window
    //   .threekitPlayer({
    //     authToken: "5e77ace3-f6b4-4b44-b2f6-520a60b76986",
    //     el: document.getElementById("player"),
    //     assetId: `${product.threekit}`,
    //     stageId: `${product.scene}`,
    //     initialConfiguration: product.initialConfig,
    //     showAR: product.showAR,
    //     showLoadingThumbnail: true,
    //     showLoadingProgress: true,
    //     showConfigurator: product.showConfig,
    //   })
    //   .then(async (api) => {
    //     window.player = api;
    //     window.configurator = await api.getConfigurator();

    //     api.on(window.player.scene.PHASES.RENDERED, () => {
    //       this.setState({ loaded: true })
    //       document.getElementById("hand-container").style.display = 'flex'
    //     }
    //     );
    //   });
  }
  render() {
    const productId = this.props.match.params.productId;
    const product = ProductList[productId];

    return (
      <ThreekitProvider
        config={{
          el: document.getElementById("player"),
          assetId: `${product.threekit}`,
          stageId: `${product.scene}`,
          initialConfiguration: product.initialConfig,
          showAR: product.showAR,
          showLoadingThumbnail: true,
          showLoadingProgress: true,
          showConfigurator: product.showConfig,
          orgId: "63a9e2db-8fc2-40df-9021-cded10d89791",
        }
        }
      >
        <div>
          {!product ? (
            <div>
              Invalid product URL. Please navigate <a href="/">home</a>
            </div>
          ) : (
            <div>
              <PageHeader
                style={{
                  border: "1px solid rgb(235, 237, 240)",
                }}
                onBack={() => window.location.assign("/")}
                title={product.name}
              />

              <div id="threekit-container">
                {/* {this.state.loaded ? ( */}
                <div className="stage" id="hand-container" style={{ display: 'none' }}>
                  <div id="hand-indicator" className="hand bounce-2">
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src="https://solutions-engineering.s3.amazonaws.com/media/web-assets/hand.png"
                    />
                  </div>
                </div>
                {/* ) : (
                <p></p>
              )} */}

                <Player />
                <Form></Form>

              </div>
            </div>
          )}
        </div>
      </ThreekitProvider >
    );
  }
}

export default Product;
