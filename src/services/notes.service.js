import API from '../config/axios'

const URL = "/notes"

export class NoteService { 

    /**
     * index function
     * @param {*} _class 
     * @param {*} _subject 
     * @returns 
     */
    static index(_class, _subject) {
        /**
         * variable config
         * config contient les parametres a envoyer au backend 
         */
        const config = {
            params : {
                class : _class,
                subject : _subject
            }
        }
        /**
         * @returns API function
         * type : get 
         * then = ensuite
         * catch = si erreur
         */
        return API()
        .get(`${URL}`, config)
        .then(response => response.data)
        .catch(error => error.message)
    }




    static store() {
        return API()
        .post(`${URL}/store`)
    }

    static destroy() {

    }

    static find() {

    }

}