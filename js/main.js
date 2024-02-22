let items = document.querySelectorAll('.item')


items.forEach(item => {
   
    const amut = parseFloat(item.querySelector('.amut').innerHTML)
    const decrement = item.querySelector('.decrement')
    const increment = item.querySelector('.increment')
    const total = item.querySelector('.total')
    const quant = item.querySelector('.quant')
    let quantity = parseInt(document.querySelector('.quantity').innerHTML)

    increment.addEventListener("click", ()=>{
        quantity++
        quant.innerHTML = quantity
        total.innerHTML = `$${amut*quantity}`
    })
    decrement.addEventListener('click', ()=>{
        total.innerHTML = `$${amut*quantity}`
    })
});