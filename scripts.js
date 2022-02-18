const tabla = document.querySelector('table');

let isDown = false
function downFalse(){
    isDown = false
}
function downTrue(){
    isDown = true
}

tabla.addEventListener('mousedown',downTrue)
tabla.addEventListener('mouseup',downFalse)


function addCells(num){
    // First we make top cells, the th
    let rowHeader = document.createElement('tr')
    for(let k=0;k<num;k++){
        let theader = document.createElement('th')
        rowHeader.appendChild(theader)
    }
    tabla.appendChild(rowHeader)

    // Then we can do the rest of the cells
    // The reason we don't have everything be more concise
    // is because the header has a 'th' tag, while the body a 'td'
    for(let i=0;i<num-1;i++){
        let row = document.createElement('tr')
        for(let j=0;j<num;j++){
            let theader = document.createElement('td')
            row.appendChild(theader)
        }
        tabla.appendChild(row)
    }
}

addCells(200);

for(x of tabla.children){
    for(i of x.cells){
        i.addEventListener('mouseover',function(e){
            if(!isDown) return;
            e.target.classList.add('bg-black')
        })
    }
}

let btn = document.querySelector('.btn-clean')
btn.addEventListener('click',function(e){
    for(x of tabla.children){
        for(i of x.cells){
                i.classList.remove('bg-black')
            }}})
        