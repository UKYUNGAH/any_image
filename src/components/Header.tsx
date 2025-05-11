import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// *component: 헤더 컴포넌트
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const mHeaderRef = useRef<HTMLDivElement>(null);
    const hamBtnRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                mHeaderRef.current &&
                !mHeaderRef.current.contains(e.target as Node) &&
                hamBtnRef.current &&
                !hamBtnRef.current.contains(e.target as Node)
            ) {
                closeMenu();
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img src="/images/logo.png" alt="Logo" />
                    </Link>
                </h1>

                <div className="right">
                    <ul className="gnb">
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/start-project">How It Works & Quote</Link>
                        </li>
                    </ul>

                    {/* 햄버거 버튼 */}
                    <button className={`ham_btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} ref={hamBtnRef}>
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            <div className="m_header" ref={mHeaderRef} style={{ display: menuOpen ? 'block' : 'none' }}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about-us" onClick={closeMenu}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/start-project" onClick={closeMenu}>
                                How It Works & Quote
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
