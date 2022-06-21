class Picture{
    constructor(){
        this.axiosObj = axios.create({
            baseURL : "https://api.unsplash.com",
            headers : {
                Authorization: "Client-ID VQzf9auDQ4dEBS9hVY-gdT_NepK7sCdUqq9uEMzOu80",
            },
            params: {
                query : "funny"
            }

        });
    }

async getApicture(){

    const result = await this.axiosObj.get("/photos/random");
    console.log(result.data.urls["regular"]);
    return result.data.urls["regular"];
    

}    
}