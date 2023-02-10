import React from "react";
import ReactDOM from "react-dom/client";

// Component composition
const Title = () => <h1 classNames="title">Rotlo</h1>;

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "356276",
      name: "GUPTA SANDWICH AND JUICE CENTER",
      uuid: "ec5bc2e8-a537-4072-9aa8-ff89ff546952",
      city: "5",
      area: "Raigad",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "pdmwikevgwwfio4fkmxt",
      cuisines: ["Pizzas", "Beverages", "Juices"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "gupta-sandwich-and-juice-center-ulwe-ulwe",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "SHOP NO 02 OM SAI SHRISTI PLOT NO 31  SECTOR 17 ULWE , Panvel (Rural), Raigad,  Maharashtra-410206",
      locality: "Ulwe",
      parentId: 91831,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5802652~p=1~eid=00000186-3b01-c030-290f-a5ac004e0166",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "356276",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "213693",
      name: "The Pizza Time",
      uuid: "f3fd80a9-1e4a-4762-9f35-3a4afe10d985",
      city: "5",
      area: "Ulwe",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ypae29yceddauesmhawq",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "pizza-time-ulwe-ulwe",
        city: "mumbai",
      },
      cityState: "5",
      address: "Sector 18, Ulwe, Navi Mumbai, Maharashtra, India",
      locality: "Ulwe",
      parentId: 212660,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "213693",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "127499",
      name: "Al Lazeez",
      uuid: "c29f8b6e-c2eb-48e4-9bdf-649decbffc27",
      city: "5",
      area: "Ulwe",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "trwobkaoe7hanpnbi7ue",
      cuisines: ["Arabian"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "al-lazeez-ulwe-ulwe",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Al Lazeez , Plot No.69, Sector 18, Ulwe, Navi Mumbai, Maharashtra 410206KN Gharat Marg, Ulwe, Navi Mumbai, Maharashtra 410206",
      locality: "Sector 18",
      parentId: 7170,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "127499",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "133433",
      name: "Kolkata Rolls",
      uuid: "2b35e2d1-e70e-4662-8b56-470c120e1f69",
      city: "5",
      area: "Ulwe",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "exxim0c9jzkahyyfd20h",
      cuisines: ["Snacks", "Biryani", "Rajasthani"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "kolkata-rolls-ulwe-ulwe",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "SHOP 11, PLOT 166, S.M. VISION, SECTOR 09, ULWE, PANEL(RURAL), RAIGAD, MAHARASHTRA 410206",
      locality: "Sm Vision",
      parentId: 2493,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5837216~p=4~eid=00000186-3b01-c030-290f-a5ad004e0452",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "133433",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "179830",
      name: "Sunjus Chinese Corner",
      uuid: "66fff798-a474-49ba-9fe1-d70dcbc51702",
      city: "5",
      area: "Ulwe",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "yzdvhshmmbf0wfddj3rx",
      cuisines: ["Chinese", "Beverages", "Indian", "Tandoor"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "sanjus-chinese-corner-ulwe-ulwe",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Shp 6, Sai Orchid, plt 21, sector 17, Near Ramshet Thakur Sports Complex, Ulwe, 410206",
      locality: "Sector 17",
      parentId: 197152,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "179830",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "136644",
      name: "Havmor Ice Cream",
      uuid: "bb7df00f-418c-4d38-b2cc-87797d37498c",
      city: "5",
      area: "Ulwe",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "xujfv2l5fma2chyicivx",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 12,
      minDeliveryTime: 12,
      maxDeliveryTime: 12,
      slaString: "12 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "havmor-ice-cream-parlour-ulwe-ulwe",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Havmor Ice Cream Parlour, shp 2, brij bhoomi height, plt 35, sec 17, Ulwe, 410206",
      locality: "Brij Bhoomi Height",
      parentId: 6969,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "136644",
        deliveryTime: 12,
        minDeliveryTime: 12,
        maxDeliveryTime: 12,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "113211",
      name: "Malvan Tadka",
      uuid: "069673db-a4fd-4c88-b7ac-a2c50cfe5964",
      city: "5",
      area: "Ulwe",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ww43jo4pihhspsvpcmvu",
      cuisines: [
        "Indian",
        "Chinese",
        "North Indian",
        "Biryani",
        "Mangalorean",
        "Maharashtrian",
        "Mughlai",
        "Goan",
        "Punjabi",
        "South Indian",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "malvan-tadka-ulwe-ulwe",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Malvan Tadka, Shp 8, Shyam Swatik, Sec 19, plt 4, Ulwe, Panvel, 410206",
      locality: "Ulwe",
      parentId: 130977,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5831696~p=10~eid=00000186-3b25-8b5e-2937-9df500e30a47",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "113211",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  console.log(cloudinaryImageId);
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <div id="name">{name}</div>
      <div id="cuisine">{cuisines.join(", ")}</div>
      <div id="rating">
        <span>{avgRating}</span> stars
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="cards">
      {restaurantList.map((restaurant) => (
        <RestaurantCard {...restaurant.data} />
      ))}
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[0].data} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <Title />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(<AppLayout />);
