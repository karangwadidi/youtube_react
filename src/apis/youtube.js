import Axios from 'axios';

const KEY= 'AIzaSyCU2LoNi1cyNIjJxNBTeyu1_PtqME2FLaY';

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})