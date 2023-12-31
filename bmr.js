

var metric = document.getElementById('metric');
var imperial = document.getElementById('imperial');
var feet = document.getElementById('feet');
var inches = document.getElementById('inches');
var weight = document.getElementById('weight').value;
var sex = document.getElementById('gender').value;
var eq = document.getElementById('percent').value;
var age = document.getElementById('age').value;
var calculate = document.getElementById('calc');


imperial.style.backgroundColor = 'white';
imperial.style.color = 'black';

var calories = 0;
var pweight = 0;
var height = 0;
var heightUnits = 0;
var bmr = 0;
var katch = 0;
var units_x = 'EN';

// change units to metric scale 
metric.addEventListener('click', () => {
    feet.placeholder = 'Meters';
    inches.placeholder = 'Centimeters';
    document.getElementById('weight').placeholder = 'Kilograms';
    metric.style.backgroundColor = 'white';
    metric.style.color = 'black';
    imperial.style.backgroundColor = '#C60000';
    imperial.style.color = 'white';
    units_x = 'IN';


})

// change units to imperial scale 
imperial.addEventListener('click', () => {
    feet.placeholder = 'Feet';
    inches.placeholder = 'Inches';
    document.getElementById('weight').placeholder = 'Pounds';
    imperial.style.backgroundColor = 'white';
    imperial.style.color = 'black';
    metric.style.backgroundColor = '#C60000';
    metric.style.color = 'white';
    units_x = 'EN';
})

// calculate function 
calculate.addEventListener('click', () => {

    metric = document.getElementById('metric');
    imperial = document.getElementById('imperial');
    feet = document.getElementById('feet');
    inches = document.getElementById('inches');
    weight = document.getElementById('weight').value;
    sex = document.getElementById('gender').value;
    eq = document.getElementById('percent').value;
    age = document.getElementById('age').value;
    

    height = 0;
    heightTens = 0;
    heightUnits = 0;
    weights = 0;
    katch = 20/100;


    heightTens = parseInt(feet.value);
    if (inches.value == '') {
        heightUnits = 0;
    } else {
        heightUnits = parseInt(inches.value);
    }

    if (units_x == "EN") {
        height = ((heightTens * 30.48) + (heightUnits * 2.54));
    } else if (units_x == 'IN' ){
        height = (heightTens * 100) + heightUnits;
    }

    if (units_x == "EN") {
        weight = (weight * 0.453592);
    }

    if (sex == "M") {
        if (eq == "no"){
            bmr = Math.round(5 + (weight * 10) + (height * 6.25) - (age * 5));
        }else if (eq == "yes"){
           bmr = Math.round(370+21.6*(1-katch)*weight);
        }	  
      } 
      else {
          if (eq == "no"){
            bmr = Math.round((weight * 10) + (height * 6.25) - (age * 5));
            bmr = (bmr - 161);	
           }else if (eq == "yes"){
           bmr = Math.round(370+21.6*(1-katch)*weight);
         }		
      }
    
    document.getElementById('bmr').innerHTML = 'Your BMR Result: ' + bmr ;
    document.getElementById('result1').innerHTML = Math.round(bmr*1.2);
    document.getElementById('result2').innerHTML = Math.round(bmr*1.375);
    document.getElementById('result3').innerHTML = Math.round(bmr*1.466);
    document.getElementById('result4').innerHTML = Math.round(bmr*1.55);
    document.getElementById('result5').innerHTML = Math.round(bmr*1.725);
    document.getElementById('result6').innerHTML = Math.round(bmr*1.9);
})

function changeDefault(event) {
    event.preventDefault();
}

const form = document.getElementById('myForm');
form.addEventListener('submit', changeDefault);
