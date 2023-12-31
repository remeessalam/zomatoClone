import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./src/component/Home";
import Error from "./src/component/Error";
import Contact from "./src/component/Contact";
import About from "./src/component/About";
import Footer from "./src/component/Footer";
import Header from "./src/component/Header";
import Collection from "./src/component/Collection/Collection";
import foodType from "./src/utils/FoodTypeContext";
const AppLayout = () => {
  const [currentFoodType, setCurrentFoodType] = useState("hai");
  return (
    <>
      <foodType.Provider value={{ currentFoodType, setCurrentFoodType }}>
        <Header />
        <Outlet />
        <Footer />
      </foodType.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const appRouteree = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/about", // parentPath/{path} => localhost:1244/about
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <About />
//           </Suspense>
//         ),
//         children: [
//           {
//             path: "profile", // parentPath/{path} => localhost:1244/about/profile
//             element: <Profile />,
//           },
//         ],
//       },
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/restaurant/:resId",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "/instamart",
//         element: (
//           <Suspense fallback={<Shimmer />}>
//             <Instamart />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);
