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
<div class="cardImageContainer">
    <img src="${info.photo}" alt="">
</div>
<div class="card-details">
    <p class="text-title">${info.title}</p>
    <p class="text-body">${info.description}</p>
</div>
<button class="card-button">Learn More</button>
</div>

`
});

document.querySelector(".cardSection").innerHTML= cardHtml;