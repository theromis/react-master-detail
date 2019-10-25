import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router-dom'; 
import { useRouteMatch } from 'react-router-dom';
import { Header, ListItemLink } from 'components/';
import { Items, Item, getExampleItems, AppStore } from 'state';
import './Master.scss';

export interface MasterProps extends Items {
}

export const MasterContainer: React.FC<MasterProps> = (props) => {
    let { path } = useRouteMatch() as RouteProps;
    let { items } = useSelector((store: AppStore) => getExampleItems(store));
    const listItems = items.map((item: Item) =>
        <li key={item.id}>
            <ListItemLink 
                to={`${path}/detail/${item.id}`} item={item} />
        </li>
    );
    return (
        <div className="master">
            <Header title="Master" hideBackButton={true}/>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

