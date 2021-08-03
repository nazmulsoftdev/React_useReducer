import React, { useEffect, useReducer } from 'react';
import { Card,CardBody,CardText} from 'reactstrap';


const initialState = {
    Loading: true,
    Post: {},
    Error:''
}

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'SUCCESS':
            return {
                Loading: false,
                Post: action.result,
                Error:''
            }
        case 'ERROR':
            return {
                Loading: false,
                Post:{},
                Error:'Dear, we are getting Error'
            }
        default:
            return state
        
    }

    
}


const FetchReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => dispatch({type:'SUCCESS',result:data}))
            .catch(() => dispatch({ type:'ERROR'}))

    },[]);


    return (
        <Card className="w-25 mt-2 m-auto">
            <CardBody>
                <h5 className="mb-2">This is Fetch data by useReducer</h5>
                <CardText>
                {state.Loading ? 'Loading...' : state.Post.title}
                {state.Error || null}
               </CardText>
            </CardBody>
        </Card>
    );
    
}


export default FetchReducer;