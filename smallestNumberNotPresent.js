/**
 * 
 * @param {array}} input | Input array
 * @returns | The smallest positive integer
 */
const missingPositiveInteger = (input = []) => {
  return input.reduce(smallestVal => {
   if (input.indexOf(smallestVal) !== -1) {
     smallestVal++;
   }

   return smallestVal;
  }, 1);
};
