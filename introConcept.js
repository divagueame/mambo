export default function introConcept(targetDom) {
    

const informationBits = [
    {
        type: "card",
    cardTitle: "Regla general",
    cardTitleTranslated: "",
    cardText: "lorem adsfsda fasdf asdf sdf sd sd",
    cardTextTranslated: "asasdfasdfasd",
    img: "guitar.jpg"
    },    {
        type: "card",
    cardTitle: "Regla general",
    cardText: "lorem adsfsda fasdf asdf sdf sd sd",
    img: "piano.jpg"
    }
];

    let html = `    
    <div class="row blue lighten-2">
    <div class="col s8 m6 offset-s2">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#"><i class="tiny material-icons">translate</i></a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>`;

  targetDom.innerHTML += html;


    informationBits.forEach((x)=>{
 
    })

 

}