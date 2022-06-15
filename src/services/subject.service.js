import API from "../config/axios";

const URL = "Subject";

export class SubjectService {
    /**
     * index function
     * @returns
     */
    static index() {
        const config = {
            params: {},
        };

        return API()
            .get(`${URL}`, config)
            .then((response) => response.data)
            .catch((error) => error.message);
    }
}
