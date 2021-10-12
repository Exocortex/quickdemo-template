import KitchenConfig from "./products/kitchenaid";

// Use this form if there are no custom elements - empty div
import Null from "./products/null";

const ProductList = {
  1: {
    type: "3D",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/61CVcwZ4SrL._SL1500_.jpg",
    threekit: "20c9764a-51a1-46d5-afe7-b04c016c17b3",
    name: "Stand Up Mixer",
    scene: "4e27bf05-52f3-42eb-9d95-7501e1bd9f08",
    initialConfig: {},
    showAR: true,
    showConfig: false,
    brand: "Kitchen Appliances",
    form: KitchenConfig,
  },
  2: {
    type: "3D",
    imageURL:
      "https://solutions-engineering.s3.amazonaws.com/quickdemo/quickdemo2/luggage.png",
    threekit: "898a9f30-e6c6-463c-bb75-5fa4345dcbbe",
    name: "Travel King",
    scene: "c5c2ad1b-56f0-4eca-9275-ddbdce9c6501",
    initialConfig: {
      "Front Cover Color": {
        assetId: "27a5d9fc-212a-4553-bdad-e2018f980553",
        configuration: "",
        type: "item",
      },
      "Center Case Color": {
        assetId: "46f423af-e038-4ab9-b2c1-f34f0ef28467",
        configuration: "",
        type: "item",
      },
      "Back Color Cover": {
        assetId: "27a5d9fc-212a-4553-bdad-e2018f980553",
        configuration: "",
        type: "item",
      },
    },
    showAR: true,
    showConfig: true,
    brand: "Luggage",
    form: Null,
  },
  3: {
    type: "3D",
    imageURL: "https://admin.threekit.com/api/files/c5138a88-f8ee-4a34-bf13-fa36f2313bf8/content",
    threekit: "0b6492eb-6e78-42e8-9436-64191a6d92b7",
    name: "Watch",
    scene: "",
    initialConfig: { Finish: "Silver", Glass: "Yes", Engraving: "" },
    showAR: false,
    showConfig: true,
    brand: "Jewelry & Accessories",
    form: Null,
  },
  // 4: {
  //   type: "3D",
  //   imageURL:
  //     "https://solutions-engineering.s3.amazonaws.com/quickdemo/quickdemo2/chair.png",
  //   threekit: "3a6b3404-2476-4d8e-b188-1027863f1678",
  //   name: "Task Chair",
  //   scene: "7f26e162-968b-4411-990e-5e790c3c85c0",
  //   initialConfig: {
  //     Fabric: {
  //       assetId: "8a13cbba-f130-4c26-a788-17ecf240183f",
  //       configuration: "",
  //       type: "item",
  //     },
  //     Mesh: "Black",
  //     Frame: "Black/Chrome",
  //   },
  //   showAR: true,
  //   showConfig: true,
  //   brand: "Furniture",
  //   form: Null,
  // },
};
export { ProductList };
