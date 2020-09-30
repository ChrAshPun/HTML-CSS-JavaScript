// Tip Controller
var tipController = (function() {

 return {

  getTipData: function(bill, percent, people) { // calculate tip data

   return {
    totalTip: bill * percent/100,
    tipPerPerson: bill * percent/100 / people,
    totalPerPerson: bill/people + bill * percent/100 / people,
    totalBillAmount: parseFloat(bill) + parseFloat(bill * percent/100)
   }
  },

  roundTipData: function(totaltip, tipperperson, totalperperson, totalbillamount) { // round tip data before displaying on UI

   arr = [totaltip, tipperperson, totalperperson, totalbillamount];
   for (i = 0; i < arr.length; i++) {
    if ( Number.isInteger(Number(arr[i]))) { // if value is an integer, remove all decimal places 
     arr[i] = arr[i].toFixed(0);
    }
    else {
     arr[i] = arr[i].toFixed(2); // if value is not an integer, round 2 decimal places
    }
   }

   return {
    totalTip: arr[0],
    tipPerPerson: arr[1],
    totalPerPerson: arr[2],
    totalBillAmount: arr[3]
   }
  }
 }
})();

// UI Controller
var UIController = (function() {

 var DOMstrings = {
  inputBill: 'tip-bill-input',
  inputPercent: 'tip-percent-input',
  inputPeople: 'tip-people-input',
  inputSubmit: '.submit-btn',
  addTotalTip: '.add-totaltip',
  addTipPerPerson: '.add-tipperperson',
  addTotalPerPerson: '.add-totalperperson',
  addTotalBillAmount: '.add-totalbillamount'
 };

 return {

  roundInput: function() {
   if ( !(Number.isInteger(Number(document.getElementById(DOMstrings.inputBill).value)))) { // if inputBill isn't an integer, round 2 decimal places
    document.getElementById(DOMstrings.inputBill).value = Number(document.getElementById(DOMstrings.inputBill).value).toFixed(2);
   }
   else if ( !(Number.isInteger(Number(document.getElementById(DOMstrings.inputPercent).value)))) { // round 2 decimal places
    document.getElementById(DOMstrings.inputPercent).value = Number(document.getElementById(DOMstrings.inputPercent).value).toFixed(2);
   }
  },

  getInput: function() { // get input values
   return {
    bill: document.getElementById(DOMstrings.inputBill).value,
    percent: document.getElementById(DOMstrings.inputPercent).value,
    people: document.getElementById(DOMstrings.inputPeople).value
   };
  },

  displayTipData: function(totaltip, tipperperson, totalperperson, totalbillamount) { // add tip data to UI
   document.querySelector(DOMstrings.addTotalTip).innerText = '$' + totaltip;
   document.querySelector(DOMstrings.addTipPerPerson).innerText = '$' + tipperperson;
   document.querySelector(DOMstrings.addTotalPerPerson).innerText = '$' + totalperperson;
   document.querySelector(DOMstrings.addTotalBillAmount).innerText = '$' + totalbillamount;   
  },

  clearAllFields: function() { 
   document.getElementById(DOMstrings.inputBill).value = "";
   document.getElementById(DOMstrings.inputPercent).value = "";
   document.getElementById(DOMstrings.inputPeople).value = "";
   document.querySelector(DOMstrings.addTotalTip).innerText = "";
   document.querySelector(DOMstrings.addTipPerPerson).innerText = "";
   document.querySelector(DOMstrings.addTotalPerPerson).innerText = "";
   document.querySelector(DOMstrings.addTotalBillAmount).innerText = "";   
  },

  getDOMstrings: function() { // exposing the DOMstrings object to the controller module
   return DOMstrings;
  }
 };

})();

// Global App Controller
var controller = (function(tipCtrl, UICtrl) {

 var setupEventListeners = function() { //this is the initialization function which stores the EventListeners
 
  document.getElementById("tip-submit-btn").addEventListener("click", ctrlTipItem); // invoke ctrlTipItem() when user clicks "Calculate Tip"   
  document.addEventListener("keypress", function(event) {  // invoke ctrlTipItem() when user presses Enter
   if (event.keyCode === 13 || event.which === 13) {
    ctrlTipItem();
   }
  });
 }

 var ctrlTipItem = function() {

  var DOM = UICtrl.getDOMstrings(); // get DOMstrings from the UI Controller

  // if bill value is empty || below zero || above 20,000 return false
  if (document.getElementById(DOM.inputBill).value === "" || document.getElementById(DOM.inputBill).value < 0 || document.getElementById(DOM.inputBill).value > 20000) {
   UICtrl.clearAllFields();
   return false;
  }

  // if percent value is empty || below zero || above 100 return false
  else if (document.getElementById(DOM.inputPercent).value === "" || document.getElementById(DOM.inputPercent).value < 0 || document.getElementById(DOM.inputPercent).value > 100) {
   UICtrl.clearAllFields();
   return false;
  }

  // if people value is empty || less than 1 || above 200 || not an integer
  else if (document.getElementById(DOM.inputPeople).value === "" || document.getElementById(DOM.inputPeople).value < 1 || document.getElementById(DOM.inputPeople).value > 100 || !(Number.isInteger(Number(document.getElementById(DOM.inputPeople).value)))) {
   UICtrl.clearAllFields();
   return false;
  }
 
  UICtrl.roundInput();
  var input = UICtrl.getInput();   // get field input data
  var tipData = tipCtrl.getTipData(input.bill, input.percent, input.people); // calculate the tip
  var tipData = tipCtrl.roundTipData(tipData.totalTip, tipData.tipPerPerson, tipData.totalPerPerson, tipData.totalBillAmount); // round tipData 
  UICtrl.displayTipData(tipData.totalTip, tipData.tipPerPerson, tipData.totalPerPerson, tipData.totalBillAmount); // display calculations on the UI
 }

 return {
  init: function() {
   setupEventListeners();
  }
 }

})(tipController, UIController);

controller.init(); // initialize EventListeners