import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ProcessTypes } from './Actions';

export const fetchProcessSuccess = (state,{process}) => ({
    ...state,
    process,
})
export const fetchProcessDetailSuccess = (state,{processDetail}) => ({
    ...state,
    processDetail,
}) 
export const fetchListProcessSuccess = (state,{ListProcess}) => ({
    ...state,
    ListProcess,
})
export const reducer = createReducer(INITIAL_STATE, {

    [ProcessTypes.FETCH_PROCESS_SUCCESS]: fetchProcessSuccess,
    [ProcessTypes.FETCH_PROCESS_DETAIL_SUCCESS]: fetchProcessDetailSuccess,
    [ProcessTypes.FETCH_LIST_PROCESS_SUCCESS]: fetchListProcessSuccess
})