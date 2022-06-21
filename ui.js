class Ui{
    constructor(){
        this.btn = document.querySelector("#btn")
        this.btn.addEventListener("click",()=>this.getTheJoke());
    }

    async getTheJoke(){
        const joke =  await new Joke().getAjoke();

        this.addUi(joke);
    }

    addUi(joke,pic){
        const screen = document.querySelector(".jog-screen")

        screen.innerHTML=
        `<div class="inner">
        <div class="img">
        <img src="${"https://i.insider.com/5c799c56eb3ce834ad57b632?width=600&format=jpeg&auto=webp"}" alt="">
        </div>
        <div class="p1"><p>${joke}</p></div>
        </div>
      
    `

    }
}