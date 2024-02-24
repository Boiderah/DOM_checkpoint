let items = document.querySelectorAll('.item')


function calculatetotal() {
    let subtotal =document.querySelector('.Subtotal')
    let tax =document.querySelector('.vats')
    let grandtotal =document.querySelector('.gtotal')
    let sub=0
    items.forEach(item => {
        const total =item.querySelector('.total')
        sub+=parseFloat(total.innerHTML)
    }) 
    subtotal.innerHTML = `$${sub}`
    grandtotal.innerHTML = `$${sub+ parseFloat(vats.innerHTML)}`
}




items.forEach(item => {
   
    const amut = parseFloat(item.querySelector('.amut').innerHTML)
    const decrement = item.querySelector('.decrement')
    const increment = item.querySelector('.increment')
    const total = item.querySelector('.total')
    const quant = item.querySelector('.quant')
    let quantity = parseInt(item.querySelector('.quant').innerHTML)

    increment.addEventListener("click", ()=>{
        quantity++
        quant.innerHTML = quantity
        total.innerHTML = `${amut*quantity}`
    })
    decrement.addEventListener('click', ()=>{
        quantity--
        quant.innerHTML = quantity
        total.innerHTML = `${amut*quantity}`
    })
});