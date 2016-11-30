
function updateInventory(arr1, arr2) {
var longitud = 0;
var arreglo = [];
var arr = [];

    if(arr1.length === 0 || arr2.length === 0){
      if(arr1.length === 0){
        return sortArr(arr2);
      }else{
        return sortArr(arr1);
      }
    }

    if (arr2.length > arr1.length) {
      longitud = arr1.length;
      arreglo = arr1;
      arr = arr2;
    }else{
      longitud = arr2.length;
      arreglo = arr2;
      arr = arr1;
    }


  for (var i = 0; i < longitud; i++) {
    var count = 0;

    var index = 0;
    for (var j = 0; j < arr.length; j++) {
      index = arreglo[j].indexOf(arr[i][1]);

      if(index !== -1){

        arreglo[j][0] = arreglo[j][0] + arr[i][0];
      }else{
        count++;
      }
    }

    if(count === arr.length){
      arreglo.push([arr[i][0],arr[i][1]]);
    }
  }

    return sortArr(arreglo);
}


function sortArr(arr){
  arr.sort(function(a, b) {
      if (a[1] < a[1]) {
          return -1;
      }
      else if (a[1] > b[1]) {
          return 1;
      }
      return 0;
  });

  return arr;
}
