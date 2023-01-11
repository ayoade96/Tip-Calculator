
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


// Getting number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText)
// ** Calculating the total bill per person **
const calculateBill = () => {
  // get billing from user input & convert it into a number
  const bill = Number(billInput.value)


  // getting the tip from user & convert it into a percentage (divide by 100)
  const tipPercentage = Number(tipInput.value) / 100


  // getting the total tip amount
  const tipAmount = bill * tipPercentage

  // calculating the total (tip amount + bill)
  const total = tipAmount + bill


  // calculating the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople


  // updating the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// ** Splitting the bill between more people **
const increasePeople = () => {
  // incrementing the amount of people
  numberOfPeople += 1

  // updating the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople


  // calculating the bill based on the new number of people
  calculateBill()
}

// ** Splitting the bill between fewer people **
const decreasePeople = () => {
  
  if (numberOfPeople <= 1) {
    return
  }

  // decrementing the amount of people
  numberOfPeople -= 1

  // updating the DOM with the new number of people

  numberOfPeopleDiv.innerText = numberOfPeople
  // calculating the bill based on the new number of people
  calculateBill()
}