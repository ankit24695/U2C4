// write js code here corresponding to matches.html

const parent = document.querySelector('tbody');

var arr = JSON.parse(localStorage.getItem("schedule"));

var favarr = JSON.parse(localStorage.getItem("favourites"))||[];

display(arr);

function display(arr){
parent.innerHTML="";

arr.forEach(function(ele){
const box = document.createElement('tr');

const matnum = document.createElement('td');
matnum.innerText = ele.matnum;

const teamA = document.createElement('td');
teamA.innerText = ele.teamA;

const teamB = document.createElement('td');
teamB.innerText = ele.teamB;

const date = document.createElement('td');
date.innerText = ele.date;

const venue = document.createElement('td');
venue.innerText = ele.venue;


const fav = document.createElement('td');
fav.innerText = "Add to Favourites";
fav.style.color="green"
fav.style.cursor="pointer"
fav.addEventListener("click",function(){
    favfun(ele);
})

box.append(matnum, teamA, teamB, date, venue, fav)

parent.append(box);

})

function favfun(ele){
favarr.push(ele);
localStorage.setItem("favourites",JSON.stringify(favarr))
}

}

const filter = document.querySelector('#filterVenue');

filter.addEventListener("change",filfun)

function filfun(){
  
    var x= filter.value;
    if(x=="none"){
        display(arr);
   window.location.reload;
    }
    else{
        var newarr = arr.filter(function(ele){
            return ele.venue==x
       })
       display(newarr);
       window.location.reload;
    }
    
   
}