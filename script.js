const card = [

  {  photo:"Photos/slider3.png",
    title:"Our Mission",
    description:"ejfkfnsk"}
    
    ,

    {  photo:"Photos/slider3.png",
    title:"Our Programs",
    description:"ejfkfnsk"}
    
    ,
    {  photo:"Photos/slider3.png",
      title:"Get Involved",
      description:"ejfkfnsk"}
      
      ,
      {  photo:"Photos/slider3.png",
      title:"Our Impact",
      description:"ejfkfnsk"}
      

];

let cardHtml =``;
card.forEach((info,index)=>{
cardHtml+= `

<div class="card">
   <a class="card1" href="#">
    <p>${info.title}</p>
    <br>
    <p class="small">${info.description}</p>
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