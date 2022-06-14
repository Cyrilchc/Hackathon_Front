/**
 * API
 */
import API from '../config/axios'


const URL = "/calendar"
/**
 * Class CalendarService
 */
export class CalendarService { 

    /**
     *  index function
     * @param {*} _appointements
     * @returns 
     */
    static index(_appointements) {
        /**
         * config
         */
        const config = { 
            params : { 
                appointments : _appointements,
            }
        }
        
        return API()
        .get(`${URL}`,  config)
        .then((response) => response.data)
        .catch(error => error.message)
    }

    static store() {
        return API()
        .post(`${URL}/store`)
    }

    static destroy() {
        
    }
}