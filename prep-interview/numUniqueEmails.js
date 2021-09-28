/**
 * We can use a Set to store all unique emails.
 * Steps:
 *  1. traverse through the emails array
 *  2. split each email into localName and domainName
 *  3. normalize (remove '.' and '+') the localName
 *  4. concat normalized localName with domainName
 *  5. add the email to the Set
 *  6. return the Size of the Set
 */

// time O(n*m) n the length of the emails array and m the length of each email

/**
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
  const unique = new Set();

  for (const email of emails) {
    const [localName, domainName] = email.split("@");
    let normalized = trimEmail(localName);

    normalized = normalized.concat("@", domainName);
    unique.add(normalized);
  }

  return unique.size;
}

/**
 *
 * @param {string} localName
 * @returns {string}
 */
function trimEmail(localName) {
  const { 0: head } = localName.split("+");
  return head.replace(/\./g, "");
}

const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];

const uniqueEmailsCount = numUniqueEmails(emails);

console.log(uniqueEmailsCount);

// test.email+alex@leetcode.com => testemail@leetcode.com
// test.e.mail+bob.cathy@leetcode.com => testemail@leetcode.com
// testemail+david@lee.tcode.com => testemail@lee.tcode.com
