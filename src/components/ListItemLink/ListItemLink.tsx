import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemProps } from '../ListItem/ListItem';
import './ListItemLink.scss';

export interface ListItemLinkProps extends ListItemProps {
    to: string
}

export const ListItemLink: React.FC<ListItemLinkProps> = (props) => {  
    return (
        <NavLink exact to={props.to}
            className="list-item-link"
            activeClassName='list-item-link--is-active'>
            <ListItem {...props} />
        </NavLink>
    );
};

export default ListItemLink;