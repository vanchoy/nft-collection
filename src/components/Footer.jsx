import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>This project is made for fun <FontAwesomeIcon className="footer-container_icon" icon={solid('grin-alt')} size="1x" /> | Developed by <a target="_blank" rel="noopener noreferrer" href="http://istoyanov.herokuapp.com/">Ivan Stoyanov</a></p>
    </footer>
  );
}

export default Footer;
