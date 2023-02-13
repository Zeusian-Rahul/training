//One way

// const task = async () => {
//     const response = await fetch('./index.json');
//     const data = await response.json();
//     for (let i = 0; i < data.length; i++) {
//         const {
//             heading,
//             subject,
//             grade,
//             bonus,
//             units,
//             teacher,
//             lessons,
//             topics,
//             students,
//             date,
//             image,
//             star,
//             preview,
//             manage,
//             submission,
//             report
//         } = data[i];

//         const pickup = `
//     <div class="item1">
//     <div class="content">
//     <img src="${image}">
//     <div class="info">
//         <h3>${heading}</h3>
//         <p>${subject}<span>&nbsp&nbsp | &nbsp&nbsp</span>Grade ${grade}<span style="color: green;">+${bonus}</span></p>
//         ${units===null?'':`<p><b style="color: #222222;">${units}</b>&nbspUnits&nbsp<b style="color:#222222;">${lessons}</b>&nbspLessons&nbsp<b style="color:#222222;">${topics}</b>&nbspTopics</p>`}
//         <select name="sorting" id="sorting">
//             <option class="opt" value="name">
//             ${
//                 i===0?teacher[0]:i===1?teacher[3]:i===2?teacher[2]:i===3?teacher[1]:teacher[1]
//             }
//             </option>
//             </select>
//             ${students===null?'':`<p>${students} Students<span>&nbsp&nbsp&nbsp${date!==""?'|':''}&nbsp&nbsp&nbsp</span>${date}</p>`}
//         </div>
//         <div class="favourite">
//         <img src="${star}" alt="" style="${i===3?"filter:grayscale(100%)":'' }" >
//     </div>
// </div>
// <div class="cardbtns">
// <img src="${preview}">
// <img src="${manage}" class=${i===2 || i===1?"fade":""}>
// <img src="${submission}" class=${i===2 || i===1?"fade":""}>
// <img src="${report}">
// </div>
// </div>
//     `;
//         document.querySelector(".container").innerHTML += pickup;
//     }
// }

// task().then(() => {
//     console.log("Fetching successful", );
// }).catch((err) => {
//     console.log(err);
// });

//another way

// iife function josn also changed to object of arrays


( ()=> {
    fetch('index.json')
        .then((response) => {
            console.log(response.json);
            return response.json();
        })
        .then((result) => {
            let data = result.cardDetails;
            for (let i = 0; i < data.length; i++) {
                document.querySelector(".Container").innerHTML += `
        <div class="item1">
        <div class="content">
        <img src="${data[i].image}">
        <div class="info">
            <h3>${data[i].heading}</h3>
            <p>${data[i].subject}<span>&nbsp&nbsp | &nbsp&nbsp</span>Grade ${data[i].grade}<span style="color: green;">+${data[i].bonus}</span></p>
            ${data[i].units===null?'':`<p><b style="color: #222222;">${data[i].units}</b>&nbspUnits&nbsp<b style="color:#222222;">${data[i].lessons}</b>&nbspLessons&nbsp<b style="color:#222222;">${data[i].topics}</b>&nbspTopics</p>`}
            <select name="sorting" id="sorting">
                <option class="opt" value="name">
                ${
                    i===0?data[i].teacher[0]:i===1?data[i].teacher[3]:i===2?data[i].teacher[2]:i===3?data[i].teacher[1]:data[i].teacher[1]
                }
                </option>
                </select>
                ${data[i].students===null?'':`<p>${data[i].students} Students<span>&nbsp&nbsp&nbsp${data[i].date!==""?'|':''}&nbsp&nbsp&nbsp</span>${data[i].date}</p>`}
            </div>
            <div class="favourite">
            <img src="${data[i].star}" alt="" style="${i===3?"filter:grayscale(100%)":'' }" >
        </div>
    </div>
    <div class="cardbtns">
    <img src="${data[i].preview}">
    <img src="${data[i].manage}" class=${i===2 || i===1?"fade":""}>
    <img src="${data[i].submission}" class=${i===2 || i===1?"fade":""}>
    <img src="${data[i].report}">
    </div>
    </div>
        `;
            }
        }).catch((err) => console.log(`Error found that is ${err}`));
})();