import React from 'react';
import {useDispatch} from 'react-redux';
function A(props) {
    const dispatch = useDispatch();
    const aClick = () => {
        const aType = document.getElementById("aType");
        console.log(aType.value);
        dispatch({type: 'A', payload: aType.value});
        aType.value = '';
    }
    return (
        <div>
            <p>User A</p>
            <input id="aType" type="text" placeholder="send a message..."/>
            <button onClick={aClick}>Send</button>
        </div>
    );
}

export default A;