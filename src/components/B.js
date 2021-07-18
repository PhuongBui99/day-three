import React from 'react';
import {useDispatch} from 'react-redux';
function B(props) {
    const dispatch = useDispatch();
    const bClick = () => {
        const bType = document.getElementById("bType");
        console.log(bType.value);
        dispatch({type: 'B', payload: bType.value});
        bType.value = '';
    }
    return (
        <div>
            <p>User B</p>
            <input id="bType" type="text" placeholder="send a message..."/>
            <button onClick={bClick}>Send</button>
        </div>
    );
}

export default B;