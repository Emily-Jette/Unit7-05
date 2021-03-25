// This code checks what the user inputs as their age and the day to see what it is time for them to do. 
let day = null 
let age = 0

document.getElementById('button').addEventListener('click', timeTo)

function timeTo () {
  age = document.getElementById('age').value
  age = parseInt(age)
  day = document.getElementById('day').value
  if (age < 18 && day !== 'sunday' && day !== 'saturday') {
    document.getElementById('answer').innerHTML = 'Time to go to school!'
  } else if (age >= 18 && day !== 'sunday' && day !== 'saturday'){
    document.getElementById('answer').innerHTML = 'Time to go to work!'
  } else {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  }
}
