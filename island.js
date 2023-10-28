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
  const visited = new Set();

  // Initialize count to 0
  let count = 0;

  // Iterate through all indices in matrix
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      // If an index contains a 1 and has not been visited, 
      // increment island count and start traversing neighbors
      if(matrix[i][j] === 1 && !visited.has([i, j].toString())) {
        // DO THE THING (increment island count by 1)
        count++;
        
        // Initialize a stack with current index
        let stack = [[i, j]];

        // Add stringified version of current index to the visited set
        visited.add([i, j].toString());

        // While stack contains elements
        while(stack.length > 0) {
          // Pop element from stack
          let node = stack.pop();
          let [row, col] = node;

          // Get valid neighbors of current element
          let neighbors = getNeighbors(row, col, matrix);

          // Iterate over neigbors
          neighbors.forEach(el => {
            // If neighbor has not been visited
            if(!visited.has(el.toString())) {
              // Add neighbor to stack
              stack.push(el);
              // Mark neighbor as visited
              visited.add(el.toString());

            }

          })

        }
      }
    }
  }
            
  // Return island count
  return count;
  
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