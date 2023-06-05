// Create a matrix with supply and demand values
var matrix = [  [5, 7, 8, 6],   // supply values
  [8, 6, 4, 7],   // demand values
];

// Initialize variables
var i = 0;    // row index
var j = 0;    // column index
var allocation = [];   // matrix to store the allocations

// Loop until all cells are allocated
while (i < matrix.length && j < matrix[0].length) {
  // Allocate as much as possible to the current cell
  var quantity = Math.min(matrix[i][j], matrix[i][matrix[0].length-1], matrix[matrix.length-1][j]);
  allocation.push([i, j, quantity]);

  // Update supply and demand values
  matrix[i][j] -= quantity;
  if (matrix[i][j] == 0) i++;
  if (matrix[i-1][j] == 0) j++;
}

// Print the allocation matrix
console.log(allocation);
