import React from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import { Header } from 'components';
import { getExampleById, Item } from 'state';
import './Detail.scss';

export interface DetailProps {
    item: Item | null
}

export const Detail: React.FunctionComponent<DetailProps> = (props) => {
    return (
        <section className="detail">
            <Header title={props.item ? props.item.title : 'Detail'} />
            <main className="detail__main">
                <div className="detail__content-text">
                    <h1>
                        {props.item ? props.item.title : 'Nothing Selected'}
                    </h1>
                    <h2>
                        Detail Page
                    </h2>
                </div>
            </main>
        </section>  
    );
};

export const DetailContainer = withRouter(connect(
    getExampleById
)(Detail));