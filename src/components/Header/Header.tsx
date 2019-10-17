import React from 'react';
import './Header.scss';

export function Header(props: any) {
    
    return (
        <div className="header">

            {/* <div class="__back" [routerLink]="[backRoute]"
            [style.visibility]="showBack && !breakpointService.isDesktop ? 'visible' : 'hidden'">

            <ion-icon name="arrow-back"></ion-icon>

            <span class="__back-text">
                Back
            </span>

            </div> */}

            <h1>
                { props.title || 'Nothing Selected' }
            </h1>

        </div> 
    );
}

export default Header;