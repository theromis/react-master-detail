import React from 'react'; 
import { Item } from 'state';
import './ListItem.scss';

export interface ListItemProps {
    item: Item
};

export const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
    
    return (
        <div className="list-item__component">

            <div className="list-item__inner">

                <h1>
                    { props.item.title }
                </h1>

                <h2>
                    { props.item.description ?  props.item.description : 'No description' }
                </h2>

                <p>
                    { props.item.description ?  props.item.description : 'No description' } 
                </p>

                <p>
                    { props.item.description ?  props.item.description : 'No description' }
                </p>

            </div>

        </div> 
    );
};

export default ListItem;