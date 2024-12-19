function lengthOfLongestSubstring(s) {
    let maxLength = 0; // To store the maximum length
    let start = 0; // Start index of the sliding window
    const seenChars = new Map(); // Map to store the characters and their last seen index

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the map and its index is within the current window
        if (seenChars.has(currentChar) && seenChars.get(currentChar) >= start) {
            // Move the start of the window to the right of the last occurrence
            start = seenChars.get(currentChar) + 1;
        }

        // Update the character's last seen index
        seenChars.set(currentChar, end);

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3 ("abc")
