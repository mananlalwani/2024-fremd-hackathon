export default function Home() {
  return (
    <div className="flex-center column gradient">
      <h1>You are not alone.</h1>
      <h1>Help is available.</h1>
      <br />
      <h1>List of 24/7 Resources:</h1>
      <div>
        <div className="bordered">
          Crisis Text Line
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
          988 Crisis Line
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
          Trevor Project Lifeline
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
          Veterans Crisis Line
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
          SAMSHA Hotline
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
        <br />
        <div>
          <h2>For immediate help, call 911.</h2>
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
