// import {bubbleSort} from "./bubbleSort"
const djikstra = (map,start,finish) =>{
  let v = {
    "y" : "",
    "list_variable" : []
  };
  let result = [];
  let l = [];
  for (let variable of map) {
    if(variable.city_name === start){
      v.y = {
        "variable_name" : variable.city_name,
        "value" : 0,
        "route" : [variable.city_name],
        "neighbor_cities": variable.neighbor_cities
      }
      l.push(
        variable.city_name
      )
    }
    else{
      v.list_variable.push(
        {
          "variable_name" : variable.city_name,
          "value" : 91919191919,
          "route" : [],
          "neighbor_cities": variable.neighbor_cities
        }
      )
    }
  }

  while(!l.includes(finish)) {
    for(let node_of_y of v.y.neighbor_cities){
      for (let variable of v.list_variable) {
        if( node_of_y.city_name === variable.variable_name && !l.includes(variable.variable_name) && !v.y.route.includes(variable.variable_name)){
          let w = 91919191919;
          for(let city of v.y.neighbor_cities){
            if(city.city_name === variable.variable_name && city.is_active === true){
              w = city.distance;
              break;
            }
          }
          if( variable.value === 91919191919 && w === 91919191919){
          }
          else if(variable.value >=  ( v.y.value +  w)){
            variable.value = ( v.y.value +  w)
            variable.route = []
            for (let node of v.y.route) {
              variable.route.push(node)
            }
            variable.route.push(variable.variable_name)
            if(variable.route[variable.route.length -1 ]  === finish){
              let route = "";
              for (let node of variable.route) {
                route += node+"-";
              }
              result.push({
                "route" : route.slice(0,-1),
                "distance" : variable.value
              });
            }
          }
          break;
        }
      }
    }
      
    v.list_variable = bubbleSort(v.list_variable)
    v.y = v.list_variable[0]
    l.push(v.list_variable[0].variable_name)
    v.list_variable.shift()
  }
  result = result.reverse()
  return result;
}
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

export default djikstra