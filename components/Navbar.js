import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>

            <ThemeToggle />

            {/* <style jsx>{`
                .navbar {
                    display: flex;
                    align-items: center;
                    list-style: none;
                    height: 80px;
                    background-color: lightcyan;
                }
                .navbar li {
                    margin: 0 10px;
                    font-weight: 700;
                    font-size: 24px;
                }
            `}
            </style> */}
        </nav>

    )
}

export default Navbar
