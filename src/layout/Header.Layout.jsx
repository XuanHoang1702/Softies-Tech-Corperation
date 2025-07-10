import { useNavigate } from 'react-router-dom';
import '../styles/css/Header.css';

const HeaderLayout = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };
    return (
        <div>
            <header class="site-header">
                <div class="container">
                    <h1 class="logo" onClick={handleLogoClick}>🎯 Logo của tôi</h1>
                        <nav class="main-nav">
                        <a href="/about">About</a>
                        <a href="/technology">Research & Technology</a>
                        <a className="contact" href="#k">Contact</a>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default HeaderLayout;
