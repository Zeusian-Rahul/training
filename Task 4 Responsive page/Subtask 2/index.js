
 const task= async()=>{
    const response=await fetch('./index.json');
    const data= await response.json();
    console.log(data[0].Teacher[0]);
    for(let i=0;i<data.length;i++)
    {
    const {Heading,Subject,Grade,Bonus,Units,Teacher,Lessons,Topics,Students,Date,Image,Star,Preview,Manage,Submission,Report}=data[i];
    
    const pickup=`
    <div class="item1">
    <div class="content">
    <img src="${Image}">
    <div class="info">
        <h3>${Heading}</h3>
        <p>${Subject}<span>&nbsp&nbsp | &nbsp&nbsp</span>Grade ${Grade}<span style="color: green;">+${Bonus}</span></p>
        ${Units===null?'':`<p><b style="color: #222222;">${Units}</b>&nbspUnits&nbsp<b style="color:#222222;">${Lessons}</b>&nbspLessons&nbsp<b style="color:#222222;">${Topics}</b>&nbspTopics</p>`}
        <select name="sorting" id="sorting">
            <option class="opt" value="name">
            ${
                i===0?Teacher[0]:i===1?Teacher[3]:i===2?Teacher[2]:i===3?Teacher[1]:Teacher[1]
            }
            </option>
            </select>
            ${Students===null?'':`<p>${Students} Students<span>&nbsp&nbsp&nbsp${Date!==""?'|':''}&nbsp&nbsp&nbsp</span>${Date}</p>`}
        </div>
        <div class="favourite">
        <img src="${Star}" alt="" style="${i===3?"filter:grayscale(100%)":'' }" >
    </div>
</div>
<div class="cardbtns">
<img src="${Preview}">
<img src="${Manage}" class=${i===2 || i===1?"fade":""}>
<img src="${Submission}" class=${i===2 || i===1?"fade":""}>
<img src="${Report}">
</div>
</div>
    `;
    document.querySelector(".container").innerHTML+=pickup;
    }
}

task().then(()=>{
    console.log("Fetching successful",);
}).catch((err)=>{
    console.log(err);
});