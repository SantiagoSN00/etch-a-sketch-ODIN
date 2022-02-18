const container = document.querySelector('.container')
console.log(container)

function createDivs(size){
    container.setAttribute('style','grid-template-columns:repeat('+size+',minmax(5px, 10px)) ')
    for(let i=0;i<size*size;i++){
        let div = document.createElement('div')
        div.classList.add('container-columns')
        div.classList.add('cells')
        container.appendChild(div)
    }
}
createDivs(30)
console.log(container)

function getRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

let celdas = document.querySelectorAll('.cells')
celdas.forEach(celda => {
    celda.addEventListener('mouseover',function(e){
        console.log(e.target)
        if(!e.target.hasAttribute('style')){
        e.target.setAttribute('style','background-color:#'+getRandomColor())
    }
})});

let button = document.querySelector('.btn-clear')
button.addEventListener('click',function (e){
    celdas.forEach(celda =>{
        celda.removeAttribute('style','background-color')
        console.log(celda.attributes);
    })
})
