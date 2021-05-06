export const requestServer = async (path) => {
    //const APILocation = "http://localhost:3000/"
    const APILocation = "https://apollineg.herokuapp.com/";

    const response = await axios.get(`${APILocation}${path}`)

    try {
        return response
    } catch (err) {
        console.log("error request.js"+ err)
    }
}