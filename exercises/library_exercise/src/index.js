import {showNumber as sample} from './calculator'
import addDiv, {addDiv} from './helpers/addDiv'

const div = document.getElementById('calculator')
const calcBtn = document.querySelector('.calcBtn')

calcBtn.addEventListener('click', function() {
  addDiv(div)
  console.log(whatever)
})

// lot more fns down here