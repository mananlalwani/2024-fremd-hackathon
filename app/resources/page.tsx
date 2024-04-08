export default function Home() {
  return (
    <div className="flex-center column gradient">
      <h1>You are <strong style={{color:"#87cefa"}}>not alone.</strong></h1>
      <h1>Help is available.</h1>
      <blockquote>
        "Life does have its ups and downs. Sometimes more downs than ups. But, there is a point where it gets better and
        better and better." - Anonymous
      </blockquote>
      <blockquote>
        "Physically sick patients get help from doctors, so there's nothing wrong getting professional help when you're in a crisis"  - Anonymous
      </blockquote>
      <div>
        <h2>For immediate help, call 911.</h2>
      </div>
      <h3>
        <a href="/ai">Talk to an AI for assistance</a>
      </h3>
      <br />
      <h1>List of 24/7 Resources:</h1>
      <div>
        <div className="bordered">
          <h3><a href="https://www.crisistextline.org/" style={{ textDecoration: "none" }}>Crisis Text Line</a></h3>
          <p>Support run by crisis counselors. Text HOME to the text number for support. </p>
          <br />
          <ul>
            <li>
              <a href="sms:741741">Text</a>
            </li>
            <li>
              <a href="https://connect.crisistextline.org/chat?utm_source=findahelpline">Chat Online</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=14437877678&">Whatsapp</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="bordered">
          <h3><a href="https://www.samhsa.gov/find-help/988" style={{ textDecoration: "none" }}>988 Crisis Line</a></h3>
          <p>Government run Lifeline for preventing suicide.</p>
          <br />
          <ul>
            <li>
              <a href="sms:988">Text</a>
            </li>
            <li>
              <a href="tel:988">Call</a>
            </li>
            <li>
              <a href="https://988lifeline.org/chat/">Online Chat</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="bordered">
          <h3><a href="https://www.thetrevorproject.org/get-help/" style={{ textDecoration: "none" }}>Trevor Project Lifeline</a></h3>
          <p>National Organizations providing support for LGBTQ people. Text START to text number for support.</p>
          <br />
          <ul>
            <li>
              <a href="sms:678678">Text</a>
            </li>
            <li>
              <a href="tel:(866) 488-7386">Call</a>
            </li>
            <li>
              <a href="https://www.thetrevorproject.org/get-help/">Chat Online</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="bordered">
          <h3><a href="https://translifeline.org/hotline/" style={{ textDecoration: "none" }}>Trans Lifeline</a></h3>
          <p>Organizations providing support for Trans/Nonbinary people.</p>
          <br />
          <ul>
            <li>
              <a href="tel:(877) 565-8860">Call</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="bordered">
          <h3>
            <a href="https://www.veteranscrisisline.net/" style={{ textDecoration: "none" }}>
              Veterans Crisis Line
            </a>
          </h3>
          <p>Crisis support for veterans</p>
          <br />
          <ul>
            <li>
              <a href="sms:838255">Text</a>
            </li>
            <li>
              <a href="https://www.veteranscrisisline.net/get-help-now/chat/">Chat Online</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="bordered">
          <h3 >
            <a href="https://www.samhsa.gov/find-help/national-helpline">SAMSHA Hotline</a>
          </h3>
          <p>Hotline for people facing mental/substance abuse disorders. Provides referrals to local treatment facilities, support groups, and community-based organizations.</p>
          <br />
          <ul>
            <li>
              <a href="sms:435748">Text</a>
            </li>
            <li>
              <a href="tel:1-800-662-4357">Call</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="bordered">
          <h3 >
            <a href="https://www.theyouthline.org/">YouthLine</a>
          </h3>
          <p>Teen support by teens. Text teen2teen to the text number for support.</p>
          <br />
          <ul>
            <li>
              <a href="sms:839863">Text</a>
            </li>
            <li>
              <a href="tel:1-877-968-8491">Call</a>
            </li>
            <li>
              <a href="https://www.theyouthline.org/">Chat</a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <h3>
          <a href="/">Back</a>
        </h3>
      </div>
    </div>
  );
}
