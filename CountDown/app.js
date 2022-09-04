const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');
const items=document.querySelectorAll('.deadline-format h4');

let tempDate= new Date();
let tempYear=tempDate.getFullYear();
let tempMonth=tempDate.getMonth();
let tempDay=tempDate.getDate();


//let futureDate= new Date(2022,7,2,20,30,0);
const futureDate= new Date(tempYear,tempMonth,tempDay+10, 20, 30, 0);



const year=futureDate.getFullYear();
const hours=futureDate.getHours();
const minutes=futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date=futureDate.getDate();
const weekDay=weekdays[futureDate.getDay()];


giveaway.textContent=`Giveaway ends on ${weekDay}, ${date} ${month} ${year} 
${hours}:${minutes}pm`;


//future time in ms
const futureTime=futureDate.getTime();



const getRemainingTime= ()=>{

const today= new Date().getTime();
const t= futureTime - today;

// values in ms
const oneDay= 24*60*60*1000;
const oneHour= 60*60*1000;
const oneMinute= 60*1000;
// 1s=1000ms

let days= t/oneDay;
days=Math.floor(days);

let hours= (t % oneDay) / oneHour;
hours=Math.floor(hours);

let minutes = (t % oneHour) / oneMinute;
minutes=Math.floor(minutes);

let seconds= Math.floor((t % oneMinute) / 1000);

//set values array;
const values=[days,hours,minutes,seconds];

const format=item=>{
  if(item < 10){
    return item= `0${item}`;
  }

  return item;
}

items.forEach((item, index)=>{
item.innerHTML= format(values[index]);
});

if(t<0){
  clearInterval(countdown);
  deadline.innerHTML=`<h4 class="expired">Sorry, this giveaway has expired</h4>`;
}
 
}

//CountDown
let countdown= setInterval(getRemainingTime,1000);
getRemainingTime();
