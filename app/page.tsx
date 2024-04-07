import LinePlot from "./components/LinePlot";
import WholeTextThingy from "./components/WholeTextThingy";
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});


export default function Home() {
 
  return (
    <div>
      <WholeTextThingy />
      <h2 className="center">Percent of High School Students who Seriously Considered Suicide </h2>
      <LazyMap />
      <LinePlot ></LinePlot>
      <div id="citations">

      </div>
    </div>
  );
}
