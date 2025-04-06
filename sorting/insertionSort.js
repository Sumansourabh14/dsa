// INSERTION SORT
// pick an element, check if smaller than previous, shift to left.

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      // swap
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;

      j--;
    }
  }

  return arr;
}

console.log(insertionSort([13, 46, 24, 52, 20, 9]));

// Time complexity - O(n^2) - Average, worst

// BEST time complexity - O(n)
// - when array is already sorted. Will check that on the first pass itself.
