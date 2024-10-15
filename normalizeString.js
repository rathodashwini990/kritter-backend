function normalizeString(input) {
    if (typeof input !== 'string' || input.trim().length === 0) {
      return "";
    }
  
    let normalized = input.trim();
    normalized = normalized.replace(/[^a-zA-Z0-9 ]/g, "");
    normalized = normalized.replace(/\s+/g, " ");
    normalized = normalized
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  
    return normalized;
  }
 
  console.log(normalizeString(" Hello! World@ This is a Test!. "));  // Output: "Hello World This Is A Test"
  console.log(normalizeString(" 123 Test with123 numbers !! "));     // Output: "123 Test With123 Numbers"
  console.log(normalizeString("MULTIPLE   Spaces   and SPECIALS!")); // Output: "Multiple Spaces And Specials"