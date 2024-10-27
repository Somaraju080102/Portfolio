import { Typography } from "@mui/material";
import { ProfileSummary } from "./ProfileSummary";

export function ProfileContact(){
    return(
      <div id="contact">
        <h3 className="text-white ms-4 mt-4 text-center">CONTACT</h3>

        {/* Center the content of the contact section */}
        <div className="d-flex justify-content-center align-items-center text-white">
          <div className="text-center" style={{ maxWidth: '600px' }}>
            <p>I craft seamless web applications using React and Spring Boot, powered by the reliability of PostgreSQL. I enjoy turning complex ideas into functional solutions, driven by a passion for coding and problem-solving.</p>
          </div>
        </div>
      </div>
    );
}
