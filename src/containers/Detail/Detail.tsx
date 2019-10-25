import React from 'react';
import { useSelector } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import { Header } from 'components';
import { getExampleById, Item, AppStore } from 'state';
import styles from './Detail.module.scss';

export interface DetailProps {
    item: Item | null
}

export const DetailContainer: React.FC<DetailProps> = (props) => {
    const { id } = useParams();
    const { item } = useSelector((store: AppStore) => getExampleById(store, id))
    
    return (
        <section className={styles.component}>
            <Header title={item ? item.title : 'Detail'} />
            <main className={styles.main}>
                <div className={styles.text}> 
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
