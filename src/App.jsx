import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveAppBar from "./Components/Header/Navbar";
import Introduction from "./Components/MiddleSection/Introduction";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { app, db } from "./firebase";

import BasicModalDialog from "./Components/formModal";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);



  const [count, setCount] = useState(0);
  useEffect(() => {}, []);

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    let tempArr = [];
    let access1 = query(collection(db, "password"));
    console.log(access1);
    const q = query(collection(db, "products"), orderBy("productDesc", "asc"));
    const unsub = onSnapshot(q, (doc) => {
      tempArr = [];
      doc.forEach((data) => {
        tempArr.push({ ...data.data(), id: data.id });
      });
      setAllProducts(tempArr);
    });
  }, []);
  console.log(allProducts);

  
  return (
    <>
      <div className="bg-white-90">
        <ResponsiveAppBar />
      </div>
      <div className="xl:w-[80%] h-[100vh] mx-auto mt-[8%]">
        <div className="mb-[100px]">
          <Introduction />
        </div>
        <div
          className="text-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-red-500 text-lg">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h1>
          <h1 className="text-gray-700 text-[4rem] font-bold">My Portfolio</h1>
        </div>

        <BasicModalDialog />
        <div className="container flex bg-slate-300">
          {allProducts.map((product, index) => {
            console.log("product", product);
            return (
              <div
                className="card"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                key={product.id}
              >
                <div className="img-container">
                  <img src="http://santoshg.com/codepen/iron_man.jpg" alt="" />
                </div>
                <div className="card-details">
                  <h2>
                    {product.projectName}
                    {product.last}
                  </h2>
                  <p>{product.projectDisc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
