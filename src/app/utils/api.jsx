const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '073a5720bamshdc40f0fd6da158fp1fa778jsnbcfa67516b99',
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