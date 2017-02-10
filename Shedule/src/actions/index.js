import { CLEAR_ALL_TIME, CLEAR_DAY_TIME, FILL_DAY_TIME } from './types';
import * as ClearShedule from '../data/clear_shedule.json';

export function clearAllTime() {
    return{
        type: CLEAR_ALL_TIME,
        payload: ClearShedule
    }

}
export function clearDayTime(day) {
    return{
        type: CLEAR_DAY_TIME,
        day: day,
        payload: []
    }
}

export function fillDayTime(day){
    const fullDay = [
        {
            "bt": 0,
            "et": 1439
        }
    ];

    return{
        type: FILL_DAY_TIME,
        day: day,
        payload: fullDay

    }
}