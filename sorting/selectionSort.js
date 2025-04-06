// SELECTION SORT
// finding minimum and swapping it to left
// 2 'for' loops

const arr = [13, 46, 24, 52, 20, 9];
// const arr = [1, 0, 0, 0, 1];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[min];
        arr[min] = temp;
      }
    }
  }

  return arr;
}

console.log(selectionSort(arr));

// Time complexity - O(n^2) - Best, average, worst
