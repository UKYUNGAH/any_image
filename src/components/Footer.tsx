import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_wrap">
                <div className="top">
                    <div className="left">
                        <img src="/images/logo_footer.png" alt="" />
                        <strong>Your project deserves more than AI</strong>
                    </div>
                    <div className="right">
                        <div className="service service1">
                            <Link to="/">[Terms of Service]</Link>
                        </div>
                        <div className="service service2">
                            <Link to="/">[Privacy Policy]</Link>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p>&copy; 2025 Any Image to Code. All rights reserved.</p>
                    <address>
                        Contact us: <a href="mailto:support@anyimagetocode.com">support@anyimagetocode.com</a>
                    </address>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
