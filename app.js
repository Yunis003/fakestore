//! DrpDown
let button=document.getElementById('button')
let options=document.querySelector('#options')
button.addEventListener('click', function(){
  if(options.style.display=='none'){
    options.style.display='block'
  }
  else{
    options.style.display='none'
  }
})

//! Main Data From Api

let input=document.getElementById('input')
let container=document.getElementById('data')
// let count=document.querySelector('.count')
let clothesData; 
function clothes(){
   fetch('https://fakestoreapi.com/products')
   .then((response)=> response.json())
   .then((data) => {
    console.log(data);
      clothesData=data
      displayClothes(data)
    } )
}

clothes()
function displayClothes(clothes) {
   container.innerHTML = "";
   clothes.forEach((cloth) => {
     // console.log(cloth);
     let displayCard = document.createElement("div");
     displayCard.innerHTML = `
    
     <div class="card"'>
     <a href='/fakestore/inform.html?name=${cloth.title}'>
     <img src="${cloth.image}" alt="product-img">
     </a>
     <h2 class="product-name">${cloth.title}</h2>
     <span class="price">${cloth.price} $</span>
 </div>
     
     `;
     container.append(displayCard);
   });
 }

 //! Search

 input.addEventListener('input', function(){
  // console.log(countryData);
 let datamain= clothesData.filter((cloth)=>
     cloth.title.toLowerCase().includes(input.value.toLowerCase())
  )
displayClothes(datamain)
console.log(datamain);

let count=document.querySelector('.count')
count.textContent=datamain.length
})

//! Filter
let item=document.querySelector('.item')
let item2=document.querySelector('.item2')
let item3=document.querySelector('.item3')
let item4=document.querySelector('.item4')
let item5=document.querySelector('.item5')
const arr = [item,item2,item3,item4,item5]
console.log(arr);
arr.forEach((e)=>{
  e.addEventListener('click',function(bumble){
    if(e.textContent=='all'){
      clothes()
    }
    else{
      fetch(`https://fakestoreapi.com/products/category/${e.textContent}`)
      .then((response)=> response.json())
      .then((data) => {
       console.log(data);
         clothesData=data
         displayClothes(data)
       } )
    }
  })
})
// console.log(arr);

// arr.forEach((e)=>{
//   e.addEventListener('click', function(){
//     if(e.textContent=='All'){
//       clothes()
//     }
//     else{
//       fetch(`https://fakestoreapi.com/products`)
//    .then((response)=> response.json())
//    .then((data) => {
//     console.log(data);
//       clothesData=data
//       displayClothes(data)
//     } )
//     }
//   })
// })






