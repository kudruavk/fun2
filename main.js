let b=+prompt('vvedite storony kvadrata')
let kvad=document.querySelector('.b2')
let plosha=document.querySelector('.b1')
let st=document.querySelector('.blu')
st.value=b
kvad.addEventListener("click",function(){
    kvad.value=b*4
})
plosha.addEventListener('click',function(){
    plosha.value= b*b
})
