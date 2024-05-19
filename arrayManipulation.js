function processArray(arr) {
    
    let result = [];
    
    
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] % 2 === 0) {
            
            result.push(arr[i] * arr[i]);
        } else {
            
            result.push(arr[i] * 3);
        }
    }
    
    
    return result;
}


function formatArrayStrings(stringsArray, numbersArray) {
    
    if (stringsArray.length !== numbersArray.length) {
        throw new Error("Arrays must have the same length.");
    }

    
    let formattedArray = [];
    
    
    for (let i = 0; i < stringsArray.length; i++) {
        
        if (numbersArray[i] % 2 === 0) {
            
            formattedArray.push(stringsArray[i].toUpperCase());
        } else {
            
            formattedArray.push(stringsArray[i].toLowerCase());
        }
    }
    
    
    return formattedArray;
}


const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); 

const stringsArray = ["apple", "Banana", "cherry", "DURIAN", "Elephant"];
const formattedStringsArray = formatArrayStrings(stringsArray, processedArray);
console.log(formattedStringsArray); 