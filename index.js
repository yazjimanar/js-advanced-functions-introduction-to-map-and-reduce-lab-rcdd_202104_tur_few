// Your code here
const mapToNegativize = (sourceArray) => {
                let arr = [];
                for (let i = 0; i < sourceArray.length; i++){
                                arr.push((-1 * sourceArray[i]));
                }
                return arr;
};