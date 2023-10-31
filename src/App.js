    import React, { Children } from "react";
import ReactDom from "react-dom/client" 
import  Header from "./components/Header"
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/Restaurantmenu";

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"


  

//   const resObj = {                    
    
//     "type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//     "info": {
//       "id": "303103",
//       "name": "KFC",
//       "city": "18",
//       "slugs": {
//         "restaurant": "kfc-the-one-rnt-south-tukoganj",
//         "city": "indore"
//       },
//       "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
//       "address": "KFC The One RNT - Indore (Sapphire foods India Pvt Ltd)Unit No.  GF 1, 2 & 3, Ground Floor, The One, Plot No. 5, RNT Marg- Indore 452001",
//       "locality": "RNT Marg",
//       "areaName": "South Tukoganj",
//       "costForTwo": "40000",
//       "costForTwoMessage": "₹400 FOR TWO",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food"
//       ],
//       "avgRating": 3.9,
//       "feeDetails": {
//         "restaurantId": "303103",
//         "fees": [
//           {
//             "name": "BASE_DISTANCE",
//             "fee": 2400
//           },
//           {
//             "name": "BASE_TIME"
//           },
//           {
//             "name": "ANCILLARY_SURGE_FEE"
//           }
//         ],
//         "totalFee": 2400,
//         "title": "Delivery Charge",
//         "amount": "2400"
//       },
//       "avgRatingString": "3.9",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 21,
//         "minDeliveryTime": 21,
//         "maxDeliveryTime": 21,
//         "lastMileTravel": 1.9,
//         "serviceability": "SERVICEABLE",
//         "rainMode": "RAIN_MODE_NONE",
//         "slaString": "21 MINS",
//         "lastMileTravelString": "1.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "opened": true,
//         "restaurantClosedMeta": {
          
//         }
//       },
//       "badges": {
        
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50",
//         "discountCalloutInfo": {
//           "message": "Free Delivery",
//           "logoCtx": {
//             "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//           }
//         }
//       },
//       "ratingSlab": "RATING_SLAB_4",
//       "orderabilityCommunication": {
//         "title": {
          
//         },
//         "subTitle": {
          
//         },
//         "message": {
          
//         },
//         "customIcon": {
          
//         }
//       },
//       "cartOrderabilityNudgeBanner": {
//         "parameters": {
          
//         },
//         "presentation": {
          
//         }
//       }
//     },
//     "analytics": {
//       "screenName": "explore",
//       "context": "{\"tid\":\"af059c46-9045-f551-6c09-ac94101bef07\",\"grid\":\"ac5dd004-c470-4b2a-a735-7d8733fd2126\",\"queryUniqueId\":\"734f0298-6e85-c3f6-5b29-ae1670ea29b2\",\"query\":\"kfc\"}",
//       "objectValue": "303103",
//       "clickObjectName": "click-restaurant"
//     },
//     "ctaWithParams": {
//       "link": "swiggy://menu",
//       "type": "DEEPLINK",
//       "params": {
//         "sourceRequestId": "64ec51a3c32ab04b6c09b09ad31b903c",
//         "restaurant_id": "303103",
//         "query": "kfc",
//         "sourceSessionId": "90c899f1-3176-45fc-ad84-166733cdbd2e",
//         "source": "SEARCH",
//         "isSld": "false"
//       }
//     }
//   }
 
const AppLayout = () => {
return (
    <div className="app">
   
<Header/> 
<Outlet/>
{/* <Body/> */}

    </div>
)
}
// const appRouter = createBrowserRouter([
//     {
//        path : "/",
//         element: <AppLayout />,
//         children: [ {
//             path: "/",
//             element: <Body/>,
//         },
//             {
//                 path : "/about" ,
//                 element: <About />,
//              },
            
//                 {
//                     path : "/contact",
//                     element: <contact />,  
//                     },
//                     {
//                         path : "/restaurants/:resID",
//                         element: <RestaurantMenu/> ,  
//                         },
                  
//         ],
//          errorElement :<Error/>
//         },
// ]);
const appRouter = createBrowserRouter([
   {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
         {
            path: "/restaurants/:resID",
            element: <RestaurantMenu />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
       
    ],
    errorElement: <Error />,
},
,
]);



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>)