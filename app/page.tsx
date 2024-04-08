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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="section flex-center column">
        <h1>General Ways to Help </h1>
        <h3>
          Raise Awareness: Educate yourself and others about the warning signs of suicide, mental health issues, and
          available resources for help.
        </h3>
        <h3>
          Destigmatize Mental Health: Encourage open conversations about mental health to reduce stigma. Normalize
          seeking help for mental health struggles.
        </h3>
        <h3>
          Know the Resources: Familiarize yourself with local and national mental health resources, including hotlines,
          support groups, and counseling services, and share them with those in need.
        </h3>
        <h3>
          Advocate for Policies: Advocate for policies and funding that support mental health services, suicide
          prevention programs, and access to affordable healthcare.
        </h3>
        <h3>
          Promote Positive Coping Mechanisms: Encourage healthy coping mechanisms like problem-solving, seeking social
          support, and engaging in activities that bring joy and fulfillment.
        </h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="section flex-center column">
        <h1>Ways to Help Someone Who is Suicidal:</h1>
        <h3>
          If you’re worried about someone who is suicidal, don’t be too direct: social stigma and other issues may make
          them hide their situation. Instead, try to build up a conversation to lead up to the eventual question if they
          are suicidal or not.
        </h3>
        <h3>
          Take their feelings seriously: Avoid dismissing or minimizing their feelings. Even if you don't understand why
          they feel the way they do, acknowledge their pain and let them know you're there for them.
        </h3>
        <h3>
          Listen without judgment: Create a safe space for them to express their feelings openly. Let them talk without
          interrupting or offering unsolicited advice. Sometimes, simply being heard can provide immense relief.
        </h3>
        <h3>
          Express empathy and understanding: Show that you care and empathize with what they're going through. Phrases
          like "I can't imagine how difficult this must be for you" or "I'm here for you, no matter what" can convey
          your support.
        </h3>
        <h3>
          Encourage professional help: Encourage them to seek help from a mental health professional such as a
          therapist, counselor, or psychiatrist. Offer to assist them in finding resources or making appointments if
          needed. Remember - when people are feeling physically unwell, they go to the doctor. When people are feeling
          unwell mentally, why not get help? Assure them that help is not something to be afraid of and talk about how
          it is ok not to be ok.
        </h3>
        <h3>
          Follow up: Check in on them regularly and continue to offer your support. Let them know that you're there for
          them, even after the immediate crisis has passed.
        </h3>
        <h3>If you’re very worried, you can tell them to call 988 or call 911 for them.</h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div id="citations" className="center">
        <h3>Citations</h3>
        <br />
        <br />

        <br />
        <br />
        <a href="https://afsp.org/suicide-statistics/">
          <sup>1</sup> https://afsp.org/suicide-statistics/
        </a>
      </div>
      
    </div>
  );
}
