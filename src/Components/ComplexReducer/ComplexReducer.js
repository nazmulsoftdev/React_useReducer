import React,{useReducer} from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const initialState = {
    counter1: 0,
    counter2:0
}

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'Increment2':
            return { ...state, counter1: state.counter1 + action.value };
        case 'Decrement2':
            return { ...state, counter1: state.counter1 - action.value };
            case 'Increment3':
                return { ...state, counter2: state.counter2 + action.value };
            case 'Decrement3':
               return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
}

const ComplexReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Card className="w-25 mt-5 m-auto">
            <CardBody>
                <CardTitle className="text-danger">This is Complex Reducer state</CardTitle>
                <CardText>Two:{state.counter1}</CardText>
                <CardText>Three:{state.counter2}</CardText>
                <div className="mb-3 d-flex justify-content-around">

                    <ButtonComponent
                        HandleClick={()=>dispatch({type:'Increment2',value:2})}
                        color="success"
                    >{'+ by 2'}</ButtonComponent>

                    <ButtonComponent
                        HandleClick={()=>dispatch({type:'Decrement2',value:2})}
                     color="danger"
                    >{'- by 2'}</ButtonComponent>
                </div>

                <div className="d-flex justify-content-around">
                    <ButtonComponent
                      HandleClick={()=>dispatch({type:'Increment3',value:3})}   
                      color="success"
                    >{'+ by 3'}</ButtonComponent>

                     <ButtonComponent
                      HandleClick={()=>dispatch({type:'Decrement3',value:3})}
                      color="danger"
                    >{'- by 3'}</ButtonComponent>
                </div>
            </CardBody>
        </Card>
    );

}


export default ComplexReducer;