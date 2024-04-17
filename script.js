function bubbleSort(arr) {
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if ((arr[j] !== undefined && arr[j + 1] !== undefined && arr[j] > arr[j + 1]) || (arr[j] === undefined && arr[j + 1] !== undefined)) {
                comparisons++;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                swaps++;
            }
        }
    }

    console.log(`Bubble Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}


function selectionSort(arr) {
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[j] !== undefined && (arr[minIndex] === undefined || arr[j] < arr[minIndex])) || (arr[j] === undefined && arr[minIndex] === undefined)) {
                comparisons++;
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
            swaps++;
        }
    }

    console.log(`Selection Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}

function insertionSort(arr) {
    let comparisons = 0;
    let swaps = 0;

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && ((arr[j] === undefined && current !== undefined) || (arr[j] !== undefined && arr[j] > current))) {
            comparisons++;
            arr[j + 1] = arr[j];
            j--;
            swaps++;
        }

        arr[j + 1] = current;
    }

    console.log(`Insertion Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}

function shellSort(arr) {
    let comparisons = 0;
    let swaps = 0;
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;

            while (j >= gap && ((arr[j - gap] === undefined && temp !== undefined) || (arr[j - gap] !== undefined && arr[j - gap] > temp))) {
                comparisons++;
                arr[j] = arr[j - gap];
                j -= gap;
                swaps++;
            }

            arr[j] = temp;
        }
    }

    console.log(`Shell Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}

function quickSort(arr) {
    let comparisons = 0;
    let swaps = 0;

    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        if (start >= end) continue;

        let pivot = arr[end];
        let i = start - 1;

        for (let j = start; j < end; j++) {
            if (arr[j] <= pivot) {
                comparisons++;
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
                swaps++;
            }
        }

        [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]; // Swap

        let pivotIndex = i + 1;

        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }

    console.log(`Quick Sort: Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}



const SortingLibrary = {
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
    quickSort
};


const arr = Array.from({ length: 100 }, (_, i) => i % 2 === 0 ? undefined : Math.floor(Math.random() * 100));

console.log("Original sparse array:", arr);


console.log("Bubble Sort:", SortingLibrary.bubbleSort([...arr]));
console.log("Selection Sort:", SortingLibrary.selectionSort([...arr]));
console.log("Insertion Sort:", SortingLibrary.insertionSort([...arr]));
console.log("Shell Sort:", SortingLibrary.shellSort([...arr]));
console.log("Quick Sort:", SortingLibrary.quickSort([...arr]));

