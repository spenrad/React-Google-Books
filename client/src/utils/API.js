import axios from "axios";

export default {
    getBooks : function (book) {
        return axios.get("/google")
    }
}
