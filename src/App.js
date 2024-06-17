import React, { lazy, Suspense, useEffect } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
const Grocery=lazy(()=>import("./components/Grocery"));


const AppLayout=()=>(
  <Provider store={appStore}>
  <div className="app">
  <Header/>
  <Outlet/>
  <Footer/>
  </div>
  </Provider>
)

const Approuter=createBrowserRouter([
  {
   path:"/",
   element:<AppLayout/>,
   children:[
    {
      path:"/",
      element:<Body flag={()=>{
        useEffect();
      }}/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<ContactUS/>
    },
    {
      path:"/grocery",
      element:<Suspense><Grocery/></Suspense>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/cart",
      element:<Cart/>
    }
   ],
   errorElement:<Error/>
  },
  
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Approuter}/> );