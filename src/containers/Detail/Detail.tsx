import React from 'react';
import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { Header } from 'components';
import { getExampleById, Item, AppStore } from 'state';
import './Detail.scss';

export interface DetailProps {
    item: Item | null
}

export const DetailContainer: React.FunctionComponent<DetailProps> = (props) => {
    const { id } = useParams();
    const { item } = useSelector((store: AppStore) => getExampleById(store, id))
    
    return (
        <section className="detail">
            <Header title={ item ? item.title : 'Detail'} />
            <main className="detail__main">
                <div className="detail__content-text">
                    <h1>
                        {item ? item.title : 'Nothing Selected'}
                    </h1>
                    <h2>
                        Detail Page
                    </h2>
                </div>
            </main>
        </section>  
    );
};
