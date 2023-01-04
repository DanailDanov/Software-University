function equalArrays(arr1, arr2) {

    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < arr1.length; i++) {

        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);

        if(arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            return;
       }
       
       sum += arr1[i];
        
      }
      
      console.log(`Arrays are identical. Sum: ${sum}`);
     
}

equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
