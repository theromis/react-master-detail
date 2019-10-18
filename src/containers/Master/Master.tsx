import React from 'react';
import { connect } from 'react-redux'; 
import { useRouteMatch, withRouter } from 'react-router-dom';
import { Header, ListItemLink } from '../../components/';
import { Items, getExampleItems } from '../../state';
import './Master.scss';
    
const Master = (props: Items) => {
    let { path } = useRouteMatch() as any;
    
    const listItems = props.items.map((item: any) =>
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
}

export const MasterContainer = withRouter(connect(
    getExampleItems
)(Master));

