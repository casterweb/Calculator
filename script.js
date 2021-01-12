let numbers = document.querySelectorAll('.item_number'),
    operations = document.querySelectorAll('.item_operation'),
    decimall = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clean'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById ('display'),
    MemoryCurrentNumber = 0,
    isNewNumber = false,
    MemoryPendingOperation = '',
    MememoryErrorMessage = 'На ноль делить нельзя';
   
for (let i=0; i < numbers.length; i++) {
  let number = numbers [i];
    number.addEventListener('click', function (e) {
    numberPress(e.target.outerText);
    });
};
    
for (let i=0; i < operations.length; i++) {
  let operationBtn = operations [i];
    operationBtn.addEventListener('click', function (e) {
    calcProcedure(e.target.outerText);
    });
};
      
for (let i=0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns [i];
    clearBtn.addEventListener('click', function (e) {
    clear (e.srcElement.id)   
    });
};

decimall.addEventListener('click', decimal);
resultBtn.addEventListener('click', result);

function numberPress(number) {
  if (isNewNumber) {
    display.value = number;
    isNewNumber = false
   } else {
     if (display.value === '0') {
       display.value = number;
     } else {
       display.value += number;
     };
   };
} ; 
function calcProcedure(operation) {
  let localOperationMemory = display.value;
    if (isNewNumber && MemoryPendingOperation !== '=' ) {
      display.value = MemoryCurrentNumber;
    } else {
      isNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/' && parseFloat(localOperationMemory) != 0) {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/' && parseFloat(localOperationMemory) == 0) {
      MemoryCurrentNumber = MememoryErrorMessage;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    };
      display.value = MemoryCurrentNumber;
      MemoryPendingOperation = operation;
   };
};
  
function decimal(argument) {
  let localDecimalMemory = display.value;
    if (isNewNumber) {
      localOperationMemory = '0.';
      isNewNumber = false;
    } else {
      if (localDecimalMemory.indexOf('.') === -1 ) {
        localDecimalMemory += '.';
      };   
     };
   display.value = localDecimalMemory;   
};
 
function clear(id) {
  if (id === 'ce' || id === 'c') {  
    display.value = '0';
    isNewNumber = true ;    
  } else if (Id === 'c') {
    MemoryCurrentNumber = 0;
    MemoryPendindOperation = '';      
  };
};
