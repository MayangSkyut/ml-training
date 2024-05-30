/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */
  


function Integer(num){
       if (!Number.isInteger(num)) { 
            throw new Error("Error")  
        }
       else{
        return num;
       }
}

    try{
        const result = Integer("7");
        console.log(result);
    }catch (error){
        console.error(error.message)
    }



