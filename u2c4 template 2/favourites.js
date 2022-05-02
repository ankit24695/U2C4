// write js code here corresponding to favourites.html


const parent = document.querySelector('tbody');

var arr = JSON.parse(localStorage.getItem("favourites"))

display(arr)

function display(arr){

arr.forEach(function(ele,ind){
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

const del = document.createElement('td');
del.innerText = "Delete";
del.style.cursor = "pointer"
del.addEventListener("click",function(){
    delfun(ele,ind)
})

box.append(matnum, teamA, teamB, date, venue,del)

parent.append(box);
})

}

function delfun(ele,ind){
    arr.splice(ind,1);
    localStorage.setItem("favourites",JSON.stringify(arr))
    window.location.reload();
}