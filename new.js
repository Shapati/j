const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const circle1= document.querySelector('.circle1')
const circle2= document.querySelector('.circle2')
const circle3= document.querySelector('.circle3')
const circle1p= document.querySelector('.p1')
const circle2p= document.querySelector('.p2')
const circle3p= document.querySelector('.p3')
const leg1 = document.querySelector('.leg1')
const leg2 = document.querySelector('.leg2')
const leg3 = document.querySelector('.leg3')

const ne =()=>{
    next.addEventListener('click',()=>{

        circle1.style.border='4px solid rgb(16, 121, 156)'
        leg1.style.border='2px solid rgb(16, 121, 156)'
       
       
       })

    
       
}
const ne2 =()=>{
    next.addEventListener('click',()=>{

        circle1.style.border='4px solid rgb(16, 121, 156)'
        leg1.style.border='2px solid rgb(16, 121, 156)'
       
        circle2.style.border='4px solid rgb(16, 121, 156)'
        leg2.style.border='2px solid rgb(16, 121, 156)'
       
       
       })
      

       

}
const ne3 =()=>{
    next.addEventListener('click',()=>{

        circle1.style.border='4px solid rgb(16, 121, 156)'
        leg1.style.border='2px solid rgb(16, 121, 156)'
       
        circle2.style.border='4px solid rgb(16, 121, 156)'
        leg2.style.border='2px solid rgb(16, 121, 156)'
       
        circle3.style.border='4px solid rgb(16, 121, 156)'
        leg3.style.border='2px solid rgb(16, 121, 156)'
       
       
       })
    
       
       
}

ne();

next.addEventListener('click',()=>{
    ne2();

 next.addEventListener('click', ()=>{
     ne3()
 })
})

