import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID IZMUuiBaba5AC-blGn7KgDAE2MFxvRufajXgVVe81hk"
    }

})