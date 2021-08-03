import React,{useReducer} from 'react';
import { Card,CardBody,CardText} from 'reactstrap';
import SimpleTitle from './SimpleTitle';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const initialState = 0;

const reducer = (state, action) => {
    
     switch (action) {
         case 'Increment':
             return state + 1;
         case 'Decrement':
             return state - 1;
         default:
             return state;
    }
}

 
const SimpleReducer = () => {


    const [state, dispatch] = useReducer(reducer, initialState);

    
    return (
        <Card className="w-25 mt-2 m-auto">
            <CardBody>
                <SimpleTitle />
                <CardText>Count Number: {state}</CardText>
                 <div className="d-flex justify-content-around">

                    <ButtonComponent HandleClick={()=>dispatch('Increment')}
                        color="success">Increment +</ButtonComponent>                    
             
                    <ButtonComponent
                        HandleClick={()=>dispatch('Decrement')}
                        color="danger">Decrement</ButtonComponent>
                
                </div>
            </CardBody>
        </Card>
    );

}


export default SimpleReducer;