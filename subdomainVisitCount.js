// 811. Subdomain Visit Count

// A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

// Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

// We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

// Input:
// ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// Output:
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
// Explanation:
// We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

// Solution 1

var subdomainVisits = function(cpdomains) {
  let visitCounts = {};
  for (let i = 0; i < cpdomains.length; i++) {
      const [visits, domains] = cpdomains[i].split(" ");

      let subdomains = domains.split(".");

      while(subdomains.length) {
          let subdomain = subdomains.join('.');

          visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
              Number(visitCounts[subdomain]) + Number(visits) :
              visits;

          subdomains.shift();
      }
  }

  return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
};
