const sketchBoard=document.querySelector('.sketch_board')

const button=document.querySelector('button')

let firstBoard=40
createBoard(firstBoard,sketchBoard)
button.addEventListener('click',()=>{
    let boardSize=prompt('Enter square size(100 max)')
    if(boardSize<=100 && boardSize >=1)
    {
        sketchBoard.innerHTML=''
        createBoard(boardSize,sketchBoard)
    }
    else{
        alert("Wrong size")
    }
})





function createBoard(boardSize,board){
    let squareSize=sketchBoard.offsetWidth/boardSize
    for(let i=0;i<boardSize;i++)
    {
        const row=document.createElement('div')
        row.setAttribute('class','row')
        for(let k=0;k<boardSize;k++)
        {
            const square=document.createElement('div')
            square.setAttribute('class','square')
            square.style.width=`${squareSize}px`
            square.style.height=`${squareSize}px`
            square.addEventListener('mouseover',() => {
                square.style.backgroundColor='black'
            })
            row.appendChild(square)
        }
        board.appendChild(row)
    }
    
}