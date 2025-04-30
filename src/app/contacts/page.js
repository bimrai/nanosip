import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa";
import { Document, Page } from 'react-pdf';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Stay up to date with me on...</h1>
      <div className="social-row">
        <a href="https://www.linkedin.com/in/bimitrai/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/br-117" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/thecodebim" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com/@thecodebim" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://instagram.com/thecodebim" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
      </div>
    </div>
  );
}
