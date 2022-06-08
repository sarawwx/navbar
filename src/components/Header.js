import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__content}>
            <div>
                <span className={styles.logo}>La la land</span>
            </div>
            <div>
                <nav className={styles.nav}>
                    <a className={styles.nav__item} href={"./"}> 
                        Page One
                    </a>
                    <a className={styles.nav__item} href={"./"}> 
                        Page Two
                    </a>
                    <a className={styles.nav__item} href={"./"}> 
                        Page Three
                    </a>
                </nav>
            </div>
            <div>
                <div className={styles.header__button__container}></div>
                <button className={styles.header__button__toggler}></button>
            </div>
        </div>
    </div>
  )
}

export default Header