/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const ENTITY = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
function Entities(str: string){
  const ampersandCode = "&amp;";
  const lessThanCode = "&lt;";
  const greaterThanCode = "&gt;";
  const doubleQuotationCode = "&quot;";
  const singleQuotationCode = "&apos;";

  return str.replace(ampersandCode, "&")
             .replace(lessThanCode, "<")
             .replace(greaterThanCode, ">")
             .replace(doubleQuotationCode, `"`)
             .replace(singleQuotationCode, `'`);
}

console.log(Entities("&quot;&lt;&gt;"));