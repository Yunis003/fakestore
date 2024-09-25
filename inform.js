const container=document.querySelector('.container')
const clothesName=new URLSearchParams(location.search).get('name')
// const clothesPic=new URLSearchParams(location.search).get('image')
// const clothesPrice=new URLSearchParams(location.search).get('price')
// console.log(clothesName);
// console.log(clothesPic);
// console.log(clothesPrice);


function fethData(){
  fetch(`https://fakestoreapi.com/products/title/${clothesName}`)
  .then((res)=> res.json())
  .then((data) => {
    console.log(data)
  })
}
fethData()







