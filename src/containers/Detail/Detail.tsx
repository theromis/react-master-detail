import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components';
import './Detail.scss';

export function Detail(params: any) {
    let { id } = useParams();
    return (
        <div>
            <Header title="Master"/>
            Hello Detail {id}
        </div>  
    );
}

export default Detail;