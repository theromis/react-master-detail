import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';

export interface HeaderProps {
    title: string,
    hideBackButton?: boolean
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
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
                { props.title } 
            </h1>

        </div> 
    );
}

Header.defaultProps = {
    hideBackButton: false
};

export default Header;