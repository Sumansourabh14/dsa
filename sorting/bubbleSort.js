// BUBBLE SORT
// pushes max to the last by using "adjacent swaps"
// no need of any min/max element

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let didSwap = 0;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // adjacent swapping
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;

        didSwap = 1;
      }
    }

    // for best time complexity
    if (didSwap === 0) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9])); // O(n^2)
console.log(bubbleSort([1, 0, 0, 0, 1])); // O(n^2)
console.log(bubbleSort([1, 4, 9, 22, 55])); // O(n)

// Time complexity - O(n^2) - Average, worst

// BEST time complexity - O(n)
// - when array is already sorted. Will check that on the first pass itself.
