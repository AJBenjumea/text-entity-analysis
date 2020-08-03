import axios from 'axios';

let getEntities = async (url1, url2) => {
  return axios.post(API_PATH,  {
      urlA: url1,
      urlB: url2
    })
    .then(function (response) { 
      let urlA = response.data[0].slice(0,10);
      let urlB = response.data[1].slice(0,10);
      return [urlA, urlB]
    })
    .catch(function (error) {
      console.log(error);
    })
}

export default  getEntities;