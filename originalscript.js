const mySet = new Set();
mySet.add("attendee A");
mySet.add("attendee B");
mySet.add("attendee C");

const object1 = {
    title: "meeting 1",
    date: new Date("2024-05-11"),
    
    location: "Hall A",
    attendees: mySet
            
}


const mySet2 = new Set();
mySet2.add("attendee A2");
mySet2.add("attendee B2");
mySet2.add("attendee C2");

const object2 = {
    title: "meeting 2",
    date: 130524,
    

    location: "Hall B",
    attendees: mySet2

}

const mySet3 = new Set();
mySet3.add("attendee A3");
mySet3.add("attendee B3");
mySet3.add("attendee C3");

const object3 = {
    title: "meeting 3",
    date: 150524,
    

    location: "Hall C",
    attendees: mySet3

}

const mySet4 = new Set();
mySet4.add("attendee A4");
mySet4.add("attendee B4");
mySet4.add("attendee C4");

const object4 = {
    title: "meeting 4",
    date: 170524,
    

    location: "Hall D",
    attendees: mySet4

}

const mySet5 = new Set();
mySet5.add("attendee A5");
mySet5.add("attendee B5");
mySet5.add("attendee C5");

const object5 = {
    title: "meeting 5",
    date: 180524,
    

    location: "Hall E",
    attendees: mySet5

}

const mySet6 = new Set();
mySet6.add("attendee A6");
mySet6.add("attendee B6");
mySet6.add("attendee C6");

const object6 = {
    title: "meeting 6",
    date: 190524,
    

    location: "Hall F",
    attendees: mySet6

}

const mySet7 = new Set();
mySet7.add("attendee A7");
mySet7.add("attendee B7");
mySet7.add("attendee C7");

const object7 = {
    title: "meeting 7",
    date: 200524,
    
    location: "Hall G",
    attendees: mySet7

}

const mySet8 = new Set();
mySet8.add("attendee A8");
mySet8.add("attendee B8");
mySet8.add("attendee C8");

const object8 = {
    title: "meeting 8",
    date: 210524,
    

    location: "Hall H",
    attendees: mySet8

    }

let objects = [object1, object2, object3, object4, object5, object6, object7, object8];

let newArray = objects.filter(function(num) {
    return objects.indexOf(num) <= 6;
}
)




const newArray2 = newArray.map(function(num2) {
    return objects.indexOf(num2) <= 6;
}
)



const weakmap = new WeakMap();
const meeting1 = {};
const organizerName = "Miguel";
weakmap.set(meeting1, organizerName);

const weakmap2 = new WeakMap();
const meeting2 = {};
const organizerName2 = "Miguel The Second";
weakmap2.set(meeting2, organizerName2);

const weakmap3 = new WeakMap();
const meeting3 = {};
const organizerName3 = "Miguel The Third";
weakmap3.set(meeting3, organizerName3);



const weakmap4 = new WeakMap();
const meeting4 = {};
const organizerName4 = "Miguel The Fourth";
weakmap4.set(meeting4, organizerName4);


const weakmap5 = new WeakMap();
const meeting5 = {};
const organizerName5 = "Miguel The Fifth";
weakmap5.set(meeting5, organizerName5);


const weakmap6 = new WeakMap();
const meeting6 = {};
const organizerName6 = "Miguel The Sixth";
weakmap6.set(meeting6, organizerName6);

const weakmap7 = new WeakMap();
const meeting7 = {};
const organizerName7 = "Miguel The Seventh";
weakmap7.set(meeting7, organizerName7);

const weakmap8 = new WeakMap();
const meeting8 = {};
const organizerName8 = "Miguel The Eighth";
weakmap8.set(meeting8, organizerName8);


const tbody=document.querySelector('#data-table tbody');


objects.forEach(({ title, date, location }) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>${date}</td>
      <td>${location}</td>
    `;
    tbody.appendChild(row);
  });

function addAttendee(title, name){
    let x = mySet;
    if (title === meeting1){
        let x = mySet;
    }
    else if (title === meeting2){
        let x = mySet2;
    }
    else if (title === meeting3){
        let x = mySet3;
    }
    else if (title === meeting4){
        let x = mySet4;
    }
    else if (title === meeting5){
        let x = mySet5;
    }
    else if (title === meeting6){
        let x = mySet6;
    }
    else if (title === meeting7){
        let x = mySet7;
    }
    else {
        let x = mySet8;
    }
    x.add(name);
}



function changeArray (arrayname){
    let jsonString = JSON.stringify(arrayname);
    return jsonString;
}


console.log(object1.date);


  
//   // Using Object.keys() to get the keys of the object
//   const keysArray = Object.keys(objects);
//   console.log('Keys:', keysArray);
  
//   // Using Object.values() to get the values of the object
//   const valuesArray = Object.values(objects);
//   console.log('Values:', valuesArray);
  
//   // Using Object.entries() to get key-value pairs as an array
//   const entriesArray = Object.entries(objects);
//   console.log('Entries:', entriesArray);
  
//   // Displaying keys and values using Object.entries() and forEach loop
//   console.log('Keys and Values:');
//   entriesArray.forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//   });
  
//   console.log(objects.formattedDate);
