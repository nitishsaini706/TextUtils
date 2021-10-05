import React from 'react'

export default function Alert(props) {
    return (
        //we are doing this so that our layout should not shift when alert shows
        // it is called cls context layout shift and it should be minimum
        <div style={{height:'30px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible  show" role="alert"`}>
            <strong>{props.alert.type}</strong>  : {props.alert.msg} 
        </div>}
        </div>
    )
}
