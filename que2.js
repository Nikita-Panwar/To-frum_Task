function maxPathSum(M) {
  const n = M.length;      // Number of rows
  const m = M[0].length;   // Number of columns
  
  // Initialize the dp table with the values from the last row of the matrix
  let dp = Array.from({ length: n }, () => Array(m).fill(0));
  
  // Fill the dp table starting from the last row
  for (let j = 0; j < m; j++) {
      dp[n - 1][j] = M[n - 1][j]; // The last row is the base case, the values remain the same
  }

  // Traverse the matrix from the second last row upwards
  for (let i = n - 2; i >= 0; i--) {
      for (let j = 0; j < m; j++) {
          // Initialize the maximum path sum for the current cell
          let down = dp[i + 1][j]; // Move down
          let leftDiagonal = (j > 0) ? dp[i + 1][j - 1] : 0; // Move diagonally left
          let rightDiagonal = (j < m - 1) ? dp[i + 1][j + 1] : 0; // Move diagonally right
          
          // Update dp[i][j] with the maximum of the three possible moves
          dp[i][j] = M[i][j] + Math.max(down, leftDiagonal, rightDiagonal);
      }
  }
  
  // The result is the maximum value in the first row of dp table
  let result = Math.max(...dp[0]);
  
  return result;
}

// Example usage:
const M = [
  [12, 22, 5, 0, 20, 18],
  [0, 2, 5, 25, 18, 17],
  [12, 10, 5, 4, 2, 1],
  [3, 8, 2, 20, 10, 8]
];

console.log(maxPathSum(M)); // Output: 70
