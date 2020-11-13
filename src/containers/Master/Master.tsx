import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps } from 'react-router-dom'; 
import { useRouteMatch } from 'react-router-dom';
import { Header, ListItemLink } from 'components';
import { Items, Item, getExampleItems, AppStore } from 'state';
import InfiniteScroll from 'react-infinite-scroll-component';

export interface MasterProps extends Items {
}

export const MasterContainer: React.FC<MasterProps> = (props) => {
    let { path } = useRouteMatch() as RouteProps;
    let { items } = useSelector((store: AppStore) => getExampleItems(store));
    const fetchData = () => {
        console.log("Load more masters ...")
    }
    const listItems = items.map((item: Item) =>
        <li key={item.id}>
            <ListItemLink 
                to={`${path}/detail/${item.id}`} item={item} />
        </li>
    );
    return (
        <React.Fragment>
            <Header title="Master" hideBackButton={true}/>
            <ul>
            <InfiniteScroll
  dataLength={listItems.length}
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  >
                {listItems}
                </InfiniteScroll>
            </ul>
        </React.Fragment>
    );
};

