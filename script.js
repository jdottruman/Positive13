const card = [

  {  photo:"Photos/slider3.png",
    title:"flkfmlsf",
    description:"ejfkfnsk"}
    
    ,

    {  photo:"Photos/slider3.png",
    title:"flkfmlsf",
    description:"ejfkfnsk"}
    
    ,
    {  photo:"Photos/slider3.png",
      title:"flkfmlsf",
      description:"ejfkfnsk"}
      
      ,
      {  photo:"Photos/slider3.png",
      title:"flkfmlsf",
      description:"ejfkfnsk"}
      

];

let cardHtml =``;
card.forEach((info,index)=>{
cardHtml+= `

<div class="card">
    <div class="content">
    <p class="logo">Digital Way</p>
      <div class="h6">Data &amp; Infrastructure Agility</div>
      <div class="hover_content">
        <p>mParticle’s customer data platform empowers you to Integrate all of your data and orchestrate it across channels, partners, and systems.</p>
      </div>
    </div>
  </div>       


`
});

document.querySelector(".cardSection").innerHTML= cardHtml;