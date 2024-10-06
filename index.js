let arr = [34,55,66,87,2,4,6,11]

let count =0;
for(let i = 0 ; i<arr.length ; i++){

    for(let j = 1 ; j <= arr[i] ; j++){
        if(arr[i] % j == 0){
            count++;
        }
    }
}
if(count <= 2){
    console.log(arr[i] ,"is a prime number ");
}