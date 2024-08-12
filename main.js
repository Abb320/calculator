const buttons = document.querySelectorAll('button')
const current = document.querySelector('h1')
let one = ''
let two = ''
let op = undefined
buttons.forEach(button => {
  button.addEventListener('click', () => {

    



    if (!isNaN(Number(button.textContent))){
      if(op === undefined){
        one += button.textContent
        console.log(Number(one))
        current.textContent = one
      } else {
        two += button.textContent
        console.log(Number(two))
        current.textContent = two
      }

    } else {
      if(button.textContent === '='){
        switch(op){
          case '+':
            result = (Number(one)+Number(two))
            break
          case '-':
            result = (Number(one)-Number(two))
            break
        }
        console.log(result)
        current.textContent = result
        one = ''
        two = one
        op = undefined
      } else {
        op = button.textContent
        console.log(op)
        current.textContent = op
      }
    }
  })
})