import React from "react";
import { Button} from 'reactstrap';


const ButtonComponent = ({children,color,HandleClick}) => {
    
    return <Button onClick={HandleClick}  color={color}>{children}</Button>

}



export default ButtonComponent;