/**
 * API
 */
import API from '../config/axios'


const URL = "calendar"
/**
 * Class CalendarService
 */
export class CalendarService { 

    /**
     * index function
     * Cette fonction sert a faire appel a l'URL de l'API /index
     */
    static index() {
        /**
         * config
         */
        const config = { 
            params : { 

            }
        }
        return API()
        .get(`${URL}`,  config)
        .then((response) => response.data)
    }

    static store() {

    }

    static destroy() {
        
    }
}