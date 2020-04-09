import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        <Fragment>
            {  
                robots.map((robot,index) => (
                    <Card key={index} id={index} name={robot.name} email={robot.email} />
                ))
            }         
        </Fragment>
    )
}

export default CardList;