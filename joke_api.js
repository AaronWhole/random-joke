class Joke{
    constructor(){
        this.baseUrl = 'https://api.chucknorris.io/';
        this.axiosObj = axios.create({
            baseURL : this.baseUrl,
        });
    }

async getAjoke(){

  const result = await this.axiosObj.get("jokes/random");
  console.log(result.data.value);
  return result.data.value;

}

}