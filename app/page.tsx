import WholeTextThingy from "./components/WholeTextThingy";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const LazyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div>
      <WholeTextThingy />
      <h2>Percent of High School Students who Seriously Considered Suicide </h2>
      <LazyMap />
    </div>
  );
}
