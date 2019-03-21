import React from 'react';

const Spinner=(props)=>{
    return(
        <div>
        <div class="ui active dimmer">
        <div class="ui indeterminate text loader">{props.message}</div>
        </div>
        </div>
    )
}
Spinner.defaultProps={
    message:"Loading .."
}

export default Spinner;