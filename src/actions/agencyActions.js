import axios from 'axios';
import { FETCH_AGENCY } from "../actionTypes";
import {env} from './../env'

export function fetchAgency() {
    return function (dispatch) {
        axios.post(`${env.api_prefix}/agency/detail`, {
            domain: "@agency"
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            dispatch({type: FETCH_AGENCY, payload: response.data.result.data});
        }).catch((error) => {
            console.log(Error);
        })
    }
}