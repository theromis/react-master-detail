import React from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import { Header } from '../../components';
import { getExampleById, Item } from '../../state';
import './Detail.scss';

const Detail = (params: any | { item: Item }) => {
    return (
        <div>
            <Header title="Master"/>
            Hello {params.item ? params.item.title : 'World'}
        </div>  
    );
};

export const DetailContainer = withRouter(connect(
    getExampleById
)(Detail));