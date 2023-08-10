const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7c692b4610msh0341fc7d4e6d90ap18132ejsne6c470489792',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchApi = async (url) => {
    try {
        const response = await fetch(`${BASE_URL}/${url}`, options);
        const result = await response.json();
        // console.log("api data",result);
        return result
    } catch (error) {
        console.error(error);
    }
}