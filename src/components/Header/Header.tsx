import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';

export const Header = (props: any) => {
    var btnBackClasses = classNames(
        'header__back',
        {
          'header__back--is-hidden': props.hideBackButton
        }
      );
    return (
        <div className="header">

            <Link to="../../" className={btnBackClasses}>
                Back
            </Link>

            <h1>
                { props.title || 'Nothing Selected' }
            </h1>

        </div> 
    );
}

export default Header;