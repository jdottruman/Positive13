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
<div class="card"></div>


`
});

document.querySelector(".cardSection").innerHTML= cardHtml;