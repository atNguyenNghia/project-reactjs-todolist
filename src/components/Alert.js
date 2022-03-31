import React , {useEffect} from "react";

const Alert = ({type , messages , removeAlert , list}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    })
    return (
       <p className={`alert alert-${type}`}>{messages}</p>
    )
}
export default Alert;