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
   <a class="card1" href="#">
    <p>This is heading</p>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
</div>



`
});

document.querySelector(".cardSection").innerHTML= cardHtml;