import React from 'react';
import { CardText } from 'reactstrap';


const SimpleTitle = () => {

    return (
        <div>
            <CardText className="text-success">This is Simple Reducer state</CardText>
        </div>
    );

}


export default React.memo(SimpleTitle);
