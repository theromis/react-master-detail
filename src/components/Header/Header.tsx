import React from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import { mediaQueries } from 'model';
import './Header.scss';

export interface HeaderProps {
    title: string,
    hideBackButton?: boolean
}

export const headerEmptyTitle = 'No Title';

export const Header: React.FunctionComponent<HeaderProps> = (props) => {

    return (
        <div className="header">

            <Media query={mediaQueries.md}>
                { matches => matches ? (
                    <Link to="../../" className="header__back"
                        style={{ visibility: props.hideBackButton ? 'hidden' : 'visible' }}>
                        Back
                    </Link>
                ): (
                    <div>&nbsp;</div>
                )}
            </Media>

            <h1 data-test="HeaderTitle">
                { props.title || headerEmptyTitle } 
            </h1>

        </div> 
    );
}

Header.defaultProps = {
    hideBackButton: false
};

export default Header;