import React from 'react'; 
import { Item } from 'state';
import './ListItem.scss';

export interface ListItemProps {
    item: Item
};

export const listItemNoDataMessage = 'No Data';

export const ListItem: React.FC<ListItemProps> = (props) => {
    
    return (
        <div className="list-item__component">

            <div className="list-item__inner">

                <h1 data-test="ListItemHeading">
                    { props.item.title ? props.item.title : listItemNoDataMessage  }
                </h1>

                <h2 data-test="ListItemSubHeading">
                    { props.item.description ?  props.item.description : listItemNoDataMessage }
                </h2>

                <p >
                    { props.item.description ?  props.item.description : listItemNoDataMessage } 
                </p>

                <p>
                    { props.item.description ?  props.item.description : listItemNoDataMessage }
                </p>

            </div>

        </div> 
    );
};

export default ListItem;