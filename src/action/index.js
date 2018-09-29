import axios from 'axios';

export const IMAGE_DATA='IMAGE_DATA';
export const IMAGE_TERM_DATA='IAMGE_TERM_DATA';
export function getImageData(page){
    let data=axios.get("https://api.unsplash.com/photos/?client_id=107e71895c9750f469c84fbcee30b4dc5231bd3202dee18471253f16d36904d9&page="+page);
    return{
        type:IMAGE_DATA,
        payload:data
    }

}

export function getTermImageData(term,page){
    let data=axios.get("https://api.unsplash.com/search/photos/?client_id=107e71895c9750f469c84fbcee30b4dc5231bd3202dee18471253f16d36904d9&query=" + term + "&page=" +page)
    return{
        type: IMAGE_TERM_DATA,
        payload:data
    }
}
