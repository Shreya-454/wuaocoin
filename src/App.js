import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";
import Sec6 from "./components/Sec6";
import Sec7 from "./components/Sec7";
import Sec8 from "./components/Sec8";
import Preloader from "./components/Preloader";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);

  return (
    <div>
      {data ? (
        <div>
         <Preloader/>
        </div>
      ) : (
        <div>
          <div className="lg:bg-[url(./assets/images/header-bg.png)] bg-text-gradient  bg-full bg-no-repeat bg-center">
            <Header />
          </div>
          <Sec2 />
          <Sec3 />
          <div className="bg-[url(./assets/images/sec4-bg.png)] bg-full bg-no-repeat bg-center">
            <Sec4 />
          </div>
          <Sec5 />
          <div className="bg-[url(./assets/images/sec6-bg.png)] bg-full bg-no-repeat bg-center">
            <Sec6 />
          </div>
          <Sec7 />
          <div className="bg-[url(./assets/images/sec8-bg.png)] bg-full bg-no-repeat bg-center">
            <Sec8 />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
