import React from 'react'; 

export interface SimpleProps {
    description: string
};

export const Simple: React.FunctionComponent<SimpleProps> = (props) => {
    return (
        <h1> { props.description } </h1>
    );
};

export default Simple;