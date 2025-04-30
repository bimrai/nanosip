import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="main-content">
      <div className="about-container">
        <h1>My Dev Journey So Far...</h1>

        <div >
          <h4 className="education-list">As of recent I have started doing mini Arduino projects to enhance my skills in robotics too. Check it out on these social platforms!</h4>
          <div className="social-row">
                  <a href="https://youtube.com/@thecodebim" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                  <a href="https://instagram.com/thecodebim" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                </div>
        </div>
        
        <div className="education-list">
          <div className="education-item">
            <h2>BSc Computer Science</h2>
            <p>University of London</p>
            <p>1st Year - Discrete Mathematics, Computational Mathematics, Programming I & II, Algorithm Data Structures I, Fundamentals of Computer Science, Web Development, How Computers Work (RPL)</p>
            <p>2nd Year - Object Orientated Programming</p>
          </div>
          <div className="education-item">
            <h2>Google IT Support Professional Certificate</h2>
            <p>Hardware, Troubleshooting, Networking, Operating Systems, System Administration, Security</p>
          </div>
          <div className="education-item">
            <h2>Meta Front End Developer Professional Certificate</h2>
            <p>HTML, CSS, JavaScript, React.js, Git, Figma - UX/UI, Responsive Web Design, Test Driven development</p>
          </div>
        </div>
      </div>
    </div>
  );
}
