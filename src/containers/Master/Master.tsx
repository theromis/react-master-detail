import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, ListItem } from '../../components/';
import { Item } from '../../model/';
import './Master.scss';
    
export function Master(props: { items: Item[] }) {
    let { path } = useRouteMatch() as any;
    
    const listItems = props.items.map((item: any) =>
        <li>
            <Link to={`${path}/detail/${item.id}`}>
                <ListItem title={item.title} description={item.description} />  
            </Link>
        </li>
    );
    return (
        <div>
            <Header title="Master"/>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
