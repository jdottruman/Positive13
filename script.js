const card = [
  {
    photo: "Photos/slider3.png",
    title: "Our Mission",
    
    description: `We are dedicated to empowering youth and families through mentorship, community outreach, and acts of goodwill. We strive to bring positivity, hope, and unity to our neighborhoods by serving those in need and inspiring the next generation of leaders.`,
    link:"ourmisision.html" 
  },
  {
    photo: "Photos/slider3.png",
    title: "Our Programs",
    description: `From food drives and clothing giveaways to youth mentorship and family support, we organize community-based programs that make a lasting difference. Each event is built on teamwork, compassion, and the belief that even small acts can create big change.`,
  link:"#",},
  {
    photo: "Photos/slider3.png",
    title: "Get Involved",
    description: `Join us in making a positive impact! Volunteer your time, donate resources, or partner with us to expand our reach. Every contribution — big or small — helps us serve more families and spread hope across our communities.`,
    link:"#",
  },
  {
    photo: "Photos/slider3.png",
    title: "Our Impact",
    description: `Since 2018, we’ve helped hundreds of families through acts of kindness and mentorship. Our foundation continues to grow thanks to community support, proving that together, we can build a stronger, more positive future.`,
    link:"#",
  }
];

let cardHtml =``;
card.forEach((info,index)=>{
cardHtml+= `

<div class="card">
   <a class="card1" href="${info.link}" target=_blank">
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