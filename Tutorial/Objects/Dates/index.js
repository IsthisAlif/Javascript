// date object = Objects that contain values that represent dates and times
//               These date objects can be changed and formatted

const date = new Date();

// Date(year, month, day, hour, minute, second, ms)
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);

const date2 = new Date("2024-01-02T12:00:00Z");

const date3 = new Date(1700000000000);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

date.setFullYear(2024);
date.setMonth(0);

console.log(date);
console.log(year);
console.log(month);
console.log(day);

// Compare dates
const date4 = new Date("2023-12-31");
const date5 = new Date("2024-01-01");

if(date5 > date4){
    console.log("Happy new year");
}