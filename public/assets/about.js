let description = document.querySelector("#desc")
let img = document.querySelector("#img-container")

const requestUser = async () => {
    //const APILocation = "http://localhost:3000/";
    const APIlocation = "https://apollineg.herokuapp.com/";

    const response = await axios.get(`${APILocation}getUser`);

    try {
        const data = response.data;
        console.log(data)

        description.innerHTML = data.bio;

        img.innerHTML += `<img src="${data.avatar_url}" alt="avatar" id="img" width="100%" height="auto" class="scale-up"/>`;

    }
    catch (err) {
            console.log(err);
    }

}

requestUser();