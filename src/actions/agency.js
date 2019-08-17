import axios from 'axios';


export function agency(dispatch) {
    return function (dispatch) {
        axios.post('', {}, {}).then((response) => {
            dispatch({type: '', payload: response.data});
        }).catch((error) => {

        })
    }
}