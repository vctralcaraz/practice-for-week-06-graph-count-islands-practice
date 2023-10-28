function getNeighbors(row, col, matrix) {
  let neighbors = [];
  let top = row - 1;
  let right = col + 1;
  let bottom = row + 1;
  let left = col - 1;

  // Check top
  if(top >= 0 && matrix[top][col] === 1)
    neighbors.push([top, col]);

  // Check top right
  if(top >= 0 && right < matrix[top].length && matrix[top][right] === 1) 
    neighbors.push([top, right]);

  // Check right
  if(right < matrix[row].length && matrix[row][right] === 1) 
    neighbors.push([row, right]);

  // Check bottom right
  if(bottom < matrix.length && 
      right < matrix[bottom].length && 
      matrix[bottom][right] === 1)
    neighbors.push([bottom, right]);

  // Check bottom
  if(bottom < matrix.length && matrix[bottom][col] === 1)
    neighbors.push([bottom, col]);

  // Check bottom left
  if(bottom < matrix.length && left >= 0 && matrix[bottom][left] === 1)
    neighbors.push([bottom, left]);

  // Check left
  if(left >= 0 && matrix[row][left] === 1)
    neighbors.push([row, left]);

  // Check top left
  if(top >= 0 && left >= 0 && matrix[top][left] === 1)
    neighbors.push([top, left]);

  // Return neighbors
  return neighbors;
  // Your code here
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];