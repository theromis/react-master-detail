import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { ListItem } from '../ListItem/ListItem';
import './ListItemLink.scss';

export const ListItemLink = (props: any) => {  
    return (
        <NavLink exact to={props.to}
            className="list-item-link"
            activeClassName='list-item-link--is-active'>
            <ListItem {...props} />
        </NavLink>
    );
};

export default ListItemLink;