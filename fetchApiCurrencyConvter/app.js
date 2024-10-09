// const url = "https://catfact.ninja/facts";
// const root = document.querySelector(".root");
// const btn = document.querySelector("#btn");
// const getFacts = async () => {

//     try {
//         console.log("getting data");
//         let response = await fetch(url);
//         let data = await response.json();
//         root.innerText = data.data[0].fact;
        
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };
// btn.addEventListener(for (const se of object) {
    
// }"click",getFacts);
const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_OqGuVSsBMYwYkGG6QZlv04CMcqshCJLRx7ioHVYI";
const dropdown = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button") 
const fromCurr = document.querySelector('select[name="from"]');
const toCurr = document.querySelector('select[name="to"]');
const msg = document.querySelector(".msg");
 

for (const select of dropdown) {
    for (currencyCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (select.name === "from" && currencyCode === "USD") {
            newOption.selected = "selected";
           
        }else if (select.name === "to" && currencyCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption)
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const updateFlag = (element)=>{
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let url = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img =  element.parentElement.querySelector("img");
    img.src = url;
};
// 

const getdata = async(toCurr,amount) =>{
    let response = await fetch(BASE_URL);
    let data = await response.json();  
    let toCurrdata = await data.data[toCurr];
    let convertedAmount = amount * toCurrdata.value;
    let currencyName = toCurrdata.code;
    msg.innerText = ` USD  ${amount}  * ${currencyName} =  ${convertedAmount}`
    
    
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountval = amount.value;
    let todata  = toCurr.value;
    if (amountval === "" || amountval < 1) {
        amountval = 1
        amount.value = "1"
    }
    
    getdata(todata,amountval);
    //  msg.innerText = msgshow
    

    // msg.innerText(`1 usd = `)

    
    // const url =     `${BASE_URL}/${fromdata}/${todata}`;
    // console.log(url);
    
})
