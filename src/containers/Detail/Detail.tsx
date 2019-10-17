import React from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import { Header } from '../../components';
import { getExampleById, Item } from '../../state';
import './Detail.scss';

const Detail = (params: any | { item: Item }) => {
    return (
        <section className="detail">
            <Header title="Master" className="detail__header" />
            <main className="detail__main">
                <div className="detail__content-text">
                    <h1>
                        {params.item ? params.item.title : 'Nothing Selected'}
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