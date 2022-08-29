
// set cookie according to you
var cookieName= "FarmMobi";
var cookieValue="Agricultural Technology Solutions";
var cookieExpireDays= 30;

// when users click accept button
let acceptCookie= document.getElementById("acceptCookie");
acceptCookie.onclick= function(){
    createCookie(cookieName, cookieValue, cookieExpireDays);
}

// function to set cookie in web browser
 let createCookie= function(cookieName, cookieValue, cookieExpireDays){
  let currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
  let expires = "expires=" + currentDate.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  if(document.cookie){
    document.getElementById("cookiePopup").style.display = "none";
  }else{
    alert("Unable to set cookie. Please allow all cookies site from cookie setting of your browser");
  }

 }

// get cookie from the web browser
let getCookie= function(cookieName){
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// check cookie is set or not
let checkCookie= function(){
    let check=getCookie(cookieName);
    if(check==""){
        document.getElementById("cookiePopup").style.display = "block";
    }else{
        
        document.getElementById("cookiePopup").style.display = "none";
    }
}
checkCookie();

// when users click cancel button
let cancelCookie= document.getElementById("cancelCookie");
cancelCookie.onclick= function(){
    deleteCookie(cookieName, cookieValue, cookieExpireDays);
}

// check cookie is set or not
let deleteCookie= function(){
  let cancel=document.getElementById("cookiePopup").style.display = "none";

}
//checkCookie();
console.log("Cookie created successfully")




// Back to top button
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


