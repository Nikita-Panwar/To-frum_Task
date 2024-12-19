function countCombinations(coins, target) {
  // Create a DP array initialized to 0
  const dp = Array(target + 1).fill(0);

  // Base case: There is 1 way to make a target of 0 (by choosing no coins)
  dp[0] = 1;

  // Iterate over each coin
  for (let coin of coins) {
      // Update dp array for all amounts that can be formed using the current coin
      for (let amount = coin; amount <= target; amount++) {
          dp[amount] += dp[amount - coin];
      }
  }

  // The result is stored in dp[target]
  return dp[target];
}

// Example usage
const coins = [5, 2, 4];
const target = 13;
console.log("Count Combinations(coins, target) = "+countCombinations(coins, target)); // Output: 3
