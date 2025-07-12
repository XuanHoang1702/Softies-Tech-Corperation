import { useNavigate } from 'react-router-dom';
import '../styles/css/Header.css';
import Logo from '../styles/images/Logo-STC.png';

const HeaderLayout = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/');
    };
    return (
        <div>
            <header className="site-header">
                <div className="container">
                    <h1 className="logo" onClick={handleLogoClick}><img className="logo-img" src={Logo}/> Softies</h1>
                        <nav className="main-nav">
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
