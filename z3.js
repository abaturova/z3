let arr = [14, 20, 5, 10, 2, 0, 17, 25]
let l = arr.length - 1
console.log(arr)

// 1 Сортировка выбором
/*let min
for(let i=0; i<l;i++){
	min = i
	for(let j=i+1; j<l;j++){
		if(arr[min] > arr[j]){
			min = j
		}
	}
	let min2 = arr[i]
	arr[i] = arr[min]
	arr[min] = min2

}
console.log(arr)

// 2 Сортировка пузырьком
let b
for(let i=0; i<l; i++){
	for(let j=0; j<l-1;j++){
		if(arr[j] > arr[j+1]){
			b = arr[j]
			arr[j] = arr[j+1]
			arr[j+1] = b
		}
	}
}
console.log(arr)

// 3 Сортировка вставками
for (let i=1; i<arr.length; i++){ 
    let m = arr[i]
    let j = i
    while(j > 0 && arr[j-1] > m){
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = m; 
}
console.log(arr)*/

// 4 Сортировка слиянием
let arr1 = []
let arr2 = []
let mid = arr.length/2

const mergeSort = (arrL,arrR) => {
	let arrS = []
	let i = j = 0
	while(i<arrL.length && j<arrR.length){
		if(arr1[i] < arr2[j]){
			arrS.push(arr1[i++])
		}else arrS.push(arr2[j++])
	}
	return arrS
}

for(let i=0; i<mid;i++){
	arr1.push(arr[i])
}
for(let i=mid; i<arr.length;i++){
	arr2.push(arr[i])
}

console.log(mergeSort(arr1,arr2))