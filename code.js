//Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.
const addOne=(arr)=>{
    let newArr=[];
    arr.forEach((value=>{
        let val =value+1;
        newArr.push(val)
    }))
    return newArr
};

//Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.
const addExclamation=(arr)=>{
    let newarr=[];
    arr.forEach((element=>{
        newarr.push(`${element}!`)
    }))
    return newarr
};

//Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.
const allUpperCase=(arr)=>{
    let newarr=[];
    arr.forEach((value=>{
        newarr.push(value.toUpperCase())   
    }))
    return newarr
}

//Write a function named raisedToTheThird that takes in an array of numbers and returns a new array of each of those numbers raised to the 3rd power (hint: look up Math.pow())
const raisedToTheThird=(arr)=>{
    let newArr=[];
  arr.map((value=>{
    newArr.push(Math.pow(value,3))    
  }))
  return newArr 
}

//Write a function named addOne that, given an array of numbers, uses map to return a new array with each value simply incremented by 1.
const addOne =(arr)=>{
let newarr=[];
arr.map((value=>{
    newarr.push(value+1)  
}))
return newarr
}


//Write a function named addQuestion that, given an array of strings, uses map to return a new array containing each string followed by a question mark character.
const addQuestion=(arr)=>{
    let newarr=[];
    arr.map((element=>{
        newarr.push(`${element}?`)
    }))
    return newarr
}

//Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.
//You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.
//For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.


const forLoopTwoToThe =(arr)=>{
    let newArr=[];
    for (let i = 0; i < arr.length; i++) {
       let newVal=Math.pow(2,arr[i])
       newArr.push(newVal)
    }
    return newArr
}


//rite a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4, but uses forEach instead of a for loop.

const forEachTwoToThe=(arr)=>{
    let newArr=[];
    arr.forEach((value=>{
        let newValue=Math.pow(2,value)
        newArr.push(newValue)
    }))
    return   newArr
}

///rite a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4, but uses forEach instead of a for loop.

const forEachTwoToThe=(arr)=>{
const newArr=[]
arr.map((value=>{
    newArr.push(Math.pow(2,value))  
}))
return newArr
}

//Write a function called addTwo that takes in an array and adds two to every value using a for loop. Place the new value in a new array. Return the new array.

const addTwo=(arr)=>{
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
      let newValue=arr[i]+2
      newArr.push( newValue)    
    }
    return newArr
}
////filter:
//Write a function named typeNum that, given an array as input, uses filter to return an array containing only the numbers.
const typeNum=(arr)=>{
return (arr.filter(item=>(typeof(item)==='number')))
}

//type string:
const typeStr=(arr)=>{
    return(arr.filter(item=>(typeof(item)==='string')
        ))
}

//Write a function named containsAnd that, given an array of strings as input, uses filter to return an array containing only strings that contain 'and' within the string.
//For example, containsAnd(['panda', 'ran', 'and']) returns ['panda', 'and'].
const containsAnd=(arr)=>{
    return(arr.filter(item=>item.includes('and')))
}

//Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.
//For example, oddValues([1,2,3]) returns [1,3].

const oddValues=(arr)=>{
return(arr.filter(item=>(item%2 !==0)))
}

//CHALLENGE 5
//Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.
//For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
const notInFirstArray=(values,arr)=>{
    return(arr.filter(item=>!values.includes(item)))
}

//reduce//aplice//reveres//split//sort


//Write a function called sortNames that takes an array of names and sorts them alphabetically. Capital letters should come before lowercase letters.
//For example: 'Cat' would come before 'apple'
const sortNames=(arr)=>{
    return(arr.sort())
}


//Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, largest to smallest.

const sortBackwards=(arr)=>{
    return(arr.sort((a,b)=>b-a))
}

//Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted,smallest to largest.
const  sortBackwards=(arr)=>{
    return(arr.sort((a,b)=>a-b))
}

//Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.
//In this alphabetization, capital letters come before lower case letters.
//For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
const alphabetize =(arr)=>{
   return(arr.sort()) 
}

//code challenge:
//using 1.str=>array
//wordsor charac
//reverse using to reverse the array
//join using array=>string 

//CHALLENGE 1
/*Write a function that will return a reversed string
example: "Hello World"
Output: "dlroW olleH"*/

const reverseString = (str) => {

let split=str.split('')
let reverse=split.reverse()
let joinStr=reverse.join('')
return joinStr

}

//Write a function named joinArray that takes an array and joins all of the elements together in one string on a space.

const joinArray=(arr)=>{
    let jionstr=arr.join('')
    return jionstr
}


//CHALLENGE 5
//Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.
//For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
const wordsToCharList=(str)=>{
    let spilt=str.split('')
    return spilt
}


/*CHALLENGE 2
Write a function named addInTheMiddle that will be receive an array and value.
You will require to add that value in the middle of the array
examples:
Input: [1,2,4,5], 3
Output: [1,2,3,4,5]
Input: ['a','b','c','e','f'], 'd'
Output: ['a','b','c','d','e','f']*/

const addInTheMiddle =(arr,value)=>{
    let middle=Math.ceil(arr.length/2)
    arr.splice(middle,0,value) 
    return arr
   
}

//Write a function named removeThree that takes an index and an array. The function should removes three items in the array starting with the value at the index.

const removeThree=(idx,arr)=>{
arr.splice(idx,3)
return arr
}

//slice:
/*Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.
As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.
Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.
For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].*/

const howMuchPencil=(str)=>{
    let result=[]
    for (let i = 0; i < array.length; i++) {
       
        result.push(str.slice(i))  
    }
    return result
}


//reduce:

/*Write a function named addValues that, given an array of numbers as input, uses reduce to add the values in the array.
------------------------------------------------------------------------------------------------ */

const addValues = (arr) => {
  // Solution code here...
  const adding=  arr.reduce((acc,value)=>
    acc+=value
  ,0);
  return adding;
};