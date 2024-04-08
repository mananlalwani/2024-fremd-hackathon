import dynamic from "next/dynamic";
import LinePlot from "./components/LinePlot";
import WholeTextThingy from "./components/WholeTextThingy";

const LazyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
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
        <h3>Citations</h3>
        <br />
        <br />
        
        <br /><br />
        <a href="https://afsp.org/suicide-statistics/"><sup>1</sup> https://afsp.org/suicide-statistics/</a>
      </div>
      <section className="section flex-center column">
        <h1>How to Help</h1>
        <h2></h2>
      </section>
    </div>
  );
}
