const initialState = {
    message: [{
        user: '',
        text: ''
    }]
}

function Reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type){
        case 'A':
            return { message: [...state.message,{user: 'A',text: payload}]};
        case 'B':
            return {message: [...state.message,{user: 'B',text: payload}]};
        default:
            return state;
    }
}

export default Reducer;