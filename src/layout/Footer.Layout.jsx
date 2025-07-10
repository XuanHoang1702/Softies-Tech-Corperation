import '../styles/css/Footer.css';
const FooterLayout = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                    <div className="footer-brand">
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <address>
                        <div>info@mysite.com</div>
                        <div>123-456-7890</div>
                        <div>500 Terry Francine Street,</div>
                        <div>San Francisco, CA 94158</div>
                    </address>
                </div>

                <div className="footer-follow">
                    <h3>Follow</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-tiktok"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-x-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <p className="footer-copy">
                © 2035 by Mosphere Technologies. Built on{" "}
                <a href="https://www.wix.com/studio" target="_blank" rel="noreferrer">
                    Wix Studio
                </a>
                </p>
            </div>

            <div className="footer-section">
                <h3>Navigate</h3>
                <nav className="footer-nav">
                    <a href="#">About</a>
                    <a href="#">Research & Technology</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Accessibility Statement</a>
                </nav>
            </div>

            <div className="footer-section">
                <h3>Subscribe</h3>
                <p className="subscribe-text">
                    Stay at the forefront of innovation. Sign up for our newsletter and receive exclusive insights, project updates, and industry news delivered straight to your inbox.
                </p>
                <form className="subscribe-form">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" placeholder="Enter your email" required />

                    <label className="checkbox">
                        <input type="checkbox" /> Yes, subscribe me to your newsletter.
                    </label>

                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </footer>
    );
}

export default FooterLayout;
