import LinePlot from "./components/LinePlot";
import WholeTextThingy from "./components/WholeTextThingy";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LazyMap from "./components/Map";

// import {Spinner} from "@nextui-org/react";

//const LazyMap = dynamic(() => import("./components/Map"), {
//  ssr: false,
//  loading: () => <p>Loading...</p>,
//});

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>
  }>
      <div>
        <WholeTextThingy />
        <br />
        <br />
        <h2 className="center">Percent of High School Students who Seriously Considered Suicide </h2>
        <LazyMap />
        <h2 className="center">Suicide Rates per 100,000 by Age</h2>
        <div>
          <LinePlot />
        </div>
        <br />
        <br />
        <div id="citations" className="center">
          <sup>1</sup><a href="data"></a>
        </div>
      </div>
    </Suspense>
  );
}
