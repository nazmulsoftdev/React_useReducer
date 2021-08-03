import React,{useContext} from "react";
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Context from "../../Context/Context";

const C = () => {
    

    const context = useContext(Context);

    return (
        <Card className="w-25 mt-5 m-auto">
            <CardBody>
                <CardTitle className="text-primary">This is Global Reducer</CardTitle>
                <CardText>Global Number:{context.count}</CardText>
                   <div className="mt-3 d-flex justify-content-around">
                    <Button onClick={()=>context.CounterDispatch('Plus')}>Plus</Button>
                    <Button onClick={()=>context.CounterDispatch('Minus')}>Minus</Button>
                   </div>
            </CardBody>
       </Card>
    );

}

export default C;