import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2>navbar</h2>
            </div>
            <nav className={classes.header__content__nav}>
                <ul>
                    <li>
                        <a href='/'>PageOne</a>
                    </li>
                    <li>
                        <a href='/'>PageTwo</a>
                    </li>
                    <li>
                        <a href='/'>PageThree</a>
                    </li>
                </ul>
                <button>CTA Page</button>
            </nav>
            
  </header>
  );
};

export default Header