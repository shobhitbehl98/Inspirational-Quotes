
function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  fetch('https://type.fit/api/quotes').then(data=>data.json()).then(Quote=>{
    const t = randomIntFromInterval(0, Quote.length-1)
    const q=Quote[t].text+" - "+Quote[t].author;
    const d=document.getElementById('w')
    d.innerHTML=q;
})