
var to = 'Maii iuu';
var gift_url = 'https://www.facebook.com/profile.php?id=100030473166446';
var gift_image_url = 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/149692514_474007460291689_4200247817533908744_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=d7FYTCfCc_sAX_yQ6YW&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8HEyRDKBAPbb8x-NB4Bs_afkS2k2LnLIbRsh4uOOy8DQ&oe=637E985D';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

