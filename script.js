document.getElementById('option-Click1').addEventListener('click',function(){
   const text=document.getElementById('option-1-h').innerText
//    console.log(text)
   let listId =document.getElementById('list-Id')
//    console.log(listId)
   let li=document.createElement('li')
   li.innerText=text
   listId.appendChild(li)
   let productPriceString=document.getElementById('product-price-1').innerText
  let productPrice=parseFloat(productPriceString)
//  console.log(productPrice)
   let currentPriceString=document.getElementById('current-Price').innerText
   // console.log(currentPriceString)
let currentPrice=parseFloat(currentPriceString)
let total=productPrice + currentPrice
// console.log(total)
document.getElementById('current-Price').innerText= total.toFixed(2)
let finalTotalamntString=document.getElementById('final-total-amount').innerText
let finalTotalamnt=parseFloat(finalTotalamntString)
document.getElementById('final-total-amount').innerText=parseFloat(total).toFixed(2)
if (currentPrice>=161){
   document.getElementById('apply-button').removeAttribute("disabled")
}
if(currentPrice>-39){
   document.getElementById('purchase-button').removeAttribute("disabled")
}

})

document.getElementById('option-Click2').addEventListener('click',function(){
    const text=document.getElementById('option-2-h').innerText
 //    console.log(text)
    let listId =document.getElementById('list-Id')
 //    console.log(listId)
    let li=document.createElement('li')
    li.innerText=text
    listId.appendChild(li)
    let productPriceString=document.getElementById('product-price-2').innerText
  
  let productPrice=parseFloat(productPriceString)
 //  console.log(productPrice)
    let currentPriceString=document.getElementById('current-Price').innerText
 //    console.log(currentPriceString)
 
 let currentPrice=parseFloat(currentPriceString)
 let total=productPrice + currentPrice
//  console.log(total)
  
 document.getElementById('current-Price').innerText= total.toFixed(2)

let finalTotalamntString=document.getElementById('final-total-amount').innerText
let finalTotalamnt=parseFloat(finalTotalamntString)
document.getElementById('final-total-amount').innerText= parseFloat(total).toFixed(2)
if (currentPrice>=161){
   document.getElementById('apply-button').removeAttribute("disabled")
}
if(currentPrice>-39){
   document.getElementById('purchase-button').removeAttribute("disabled")
}

 
 })
 document.getElementById('option-Click3').addEventListener('click',function(){
    const text=document.getElementById('option-3-h').innerText
 //    console.log(text)
    let listId =document.getElementById('list-Id')
 //    console.log(listId)
    let li=document.createElement('li')
    li.innerText=text
    listId.appendChild(li)
    let productPriceString=document.getElementById('product-price-3').innerText
  
  let productPrice=parseFloat(productPriceString)
 //  console.log(productPrice)
    let currentPriceString=document.getElementById('current-Price').innerText
 //    console.log(currentPriceString)
 
 let currentPrice=parseFloat(currentPriceString)
 let total=productPrice + currentPrice
//  console.log(total)
  
 document.getElementById('current-Price').innerText= total.toFixed(2)
 let finalTotalamntString=document.getElementById('final-total-amount').innerText
let finalTotalamnt=parseFloat(finalTotalamntString)
document.getElementById('final-total-amount').innerText=parseFloat(total).toFixed(2)
if (currentPrice>=161){
   document.getElementById('apply-button').removeAttribute("disabled")
}
if(currentPrice>-39){
   document.getElementById('purchase-button').removeAttribute("disabled")
}
 
 })
 document.getElementById('option-Click4').addEventListener('click',function(){
    const text=document.getElementById('option-4-h').innerText
 //    console.log(text)
    let listId =document.getElementById('list-Id')
 //    console.log(listId)
    let li=document.createElement('li')
    li.innerText=text
    listId.appendChild(li)
    let productPriceString=document.getElementById('product-price-4').innerText
  
  let productPrice=parseFloat(productPriceString)
 //  console.log(productPrice)
    let currentPriceString=document.getElementById('current-Price').innerText
 //    console.log(currentPriceString)
 
 let currentPrice=parseFloat(currentPriceString)
 let total=productPrice + currentPrice
//  console.log(total)
  
 document.getElementById('current-Price').innerText= total.toFixed(2)
 let finalTotalamntString=document.getElementById('final-total-amount').innerText
let finalTotalamnt=parseFloat(finalTotalamntString)
document.getElementById('final-total-amount').innerText=parseFloat(total).toFixed(2)
if (currentPrice>=161){
   document.getElementById('apply-button').removeAttribute("disabled")
}
if(currentPrice>-39){
   document.getElementById('purchase-button').removeAttribute("disabled")
}
 
 })
 document.getElementById('option-Click5').addEventListener('click',function(){
    const text=document.getElementById('option-5-h').innerText
 //    console.log(text)
    let listId =document.getElementById('list-Id')
 //    console.log(listId)
    let li=document.createElement('li')
    li.innerText=text
    listId.appendChild(li)
    let productPriceString=document.getElementById('product-price-5').innerText
  
  let productPrice=parseFloat(productPriceString)
 //  console.log(productPrice)
    let currentPriceString=document.getElementById('current-Price').innerText
 //    console.log(currentPriceString)
 
 let currentPrice=parseFloat(currentPriceString)
 let total=productPrice + currentPrice
//  console.log(total)
  
 document.getElementById('current-Price').innerText= total.toFixed(2)
 let finalTotalamntString=document.getElementById('final-total-amount').innerText
let finalTotalamnt=parseFloat(finalTotalamntString)
document.getElementById('final-total-amount').innerText=parseFloat(total).toFixed(2)
if (currentPrice>=161){
   document.getElementById('apply-button').removeAttribute("disabled")
}
if(currentPrice>-39){
   document.getElementById('purchase-button').removeAttribute("disabled")
}
 
 })
 document.getElementById('option-Click6').addEventListener('click',function(){
    const text=document.getElementById('option-6-h').innerText
 //    console.log(text)
    let listId =document.getElementById('list-Id')
 //    console.log(listId)
    let li=document.createElement('li')
    li.innerText=text
    listId.appendChild(li)
    let productPriceString=document.getElementById('product-price-6').innerText
  
  let productPrice=parseFloat(productPriceString)
 //  console.log(productPrice)
    let currentPriceString=document.getElementById('current-Price').innerText
 //    console.log(currentPriceString)
 
 let currentPrice=parseFloat(currentPriceString)
 let total=productPrice + currentPrice
//  console.log(total)
  
 document.getElementById('current-Price').innerText= total.toFixed(2)
 {
 let finalTotalamntString=document.getElementById('final-total-amount').innerText
let finalTotalamnt=parseFloat(finalTotalamntString)
document.getElementById('final-total-amount').innerText=parseFloat(total).toFixed(2)
if (currentPrice>=161){
   document.getElementById('apply-button').removeAttribute("disabled")
}
if(currentPrice>-39){
   document.getElementById('purchase-button').removeAttribute("disabled")
}
 
}})




// apply button 
 document.getElementById('apply-button').addEventListener('click',function(){
   let inputField =document.getElementById('input-Field').value
   let discountPercentage=20;
if (inputField=="SELL200"){
  let currentPriceString= document.getElementById('current-Price').innerText
  let currentPrice=parseFloat(currentPriceString)
  let discountTotalAmount = (currentPrice * discountPercentage) / 100;
  let discountAmountString=document.getElementById('discount-amount').innerText
  let discountAmount=parseFloat(discountAmountString)
  document.getElementById('discount-amount').innerText=discountTotalAmount.toFixed(2);
 let finalTotalAmountString=document.getElementById('final-total-amount').innerText
 let totalAmount=parseFloat(finalTotalAmountString)
 let finalPrice=currentPrice-discountTotalAmount
 document.getElementById('final-total-amount').innerText=finalPrice.toFixed(2)
}
 })