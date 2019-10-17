import React from 'react'; 
import './ListItem.scss';

export function ListItem(props: any) {
    
    return (
        <div className="list-item__component">

            <div className="list-item__inner">

                <h1>
                    { props.title }
                </h1>

                <h2>
                    { props.description ?  props.description : 'nope' }
                </h2>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

            </div>

        </div> 
    );
}

export default ListItem;