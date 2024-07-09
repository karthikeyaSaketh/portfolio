import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Correct path to your CSS module
import { getImageUrl } from '../../utils'; // Assuming utility function for image URLs

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>
                <img src={getImageUrl('nav/logo3.png')} alt='logo' className={styles.navImg}/>
            </a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
                    onClick={toggleMenu}
                    alt='menu-button'
                    style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li style={{ '--index': 0 }}><a href='#about' onClick={toggleMenu}>About</a></li>
                    <li style={{ '--index': 2 }}><a href='#experience' onClick={toggleMenu}>Experience</a></li>
                    <li style={{ '--index': 4 }}><a href='#projects' onClick={toggleMenu}>Projects</a></li>
                    <li style={{ '--index': 6 }}><a href='#contact' onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
