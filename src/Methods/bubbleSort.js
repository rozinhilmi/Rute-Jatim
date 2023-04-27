const bubbleSort = (arr)=> {
  var len = arr.length;
  var isSwapped = false;
  for(let i =0; i < len; i++){
    isSwapped = false;
    for(let j = 0; j < len; j++){
      try {
        if(arr[j].value > arr[j + 1].value){
          var temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
      } catch (error) {
      }
    }
    if(!isSwapped){
      break;
    }
  }
  return (arr)
}
export default bubbleSort