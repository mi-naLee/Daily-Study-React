import { useCallback, useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
              };
        case 'RESET':
            return Object.keys(state).reduce((acc, current)=> {
                // Object.keys(객체) : 객체의 키를 반화
                acc[current] = ''; 
                return acc;
            },{});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    // setState 대신 reducer 이용하기

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        // setForm(form => ({...form, [name]: value}));
        // set 대신 reducer(dispatch 이용)
        dispatch({type:'CHANGE', name, value});
    },[]);

    // const reset = useCallback(() => setForm(initialForm), [initialForm]);
    // set 처리 대신 dispatch
    const reset = useCallback(() => dispatch({type:'RESET'}),[]);
    
    return [form, onChange, reset];
}

export default useInputs;