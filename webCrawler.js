// 1236. Web Crawler

// Given a url startUrl and an interface HtmlParser, implement a web crawler to crawl all links that are under the same hostname as startUrl.

// Return all urls obtained by your web crawler in any order.

// Your crawler should:

// Start from the page: startUrl
// Call HtmlParser.getUrls(url) to get all urls from a webpage of given url.
// Do not crawl the same link twice.
// Explore only the links that are under the same hostname as startUrl.

// As shown in the example url above, the hostname is example.org. For simplicity sake, you may assume all urls use http protocol without any port specified. For example, the urls http://leetcode.com/problems and http://leetcode.com/contest are under the same hostname, while urls http://example.org/test and http://example.com/abc are not under the same hostname.

// The HtmlParser interface is defined as such:

// interface HtmlParser {
//   // Return a list of all urls from a webpage of given url.
//   public List<String> getUrls(String url);
// }
// Below are two examples explaining the functionality of the problem, for custom testing purposes you'll have three variables urls, edges and startUrl. Notice that you will only have access to startUrl in your code, while urls and edges are not directly accessible to you in code.

// Input:
// urls = [
//   "http://news.yahoo.com",
//   "http://news.yahoo.com/news",
//   "http://news.yahoo.com/news/topics/",
//   "http://news.google.com",
//   "http://news.yahoo.com/us"
// ]
// edges = [[2,0],[2,1],[3,2],[3,1],[0,4]]
// startUrl = "http://news.yahoo.com/news/topics/"
// Output: [
//   "http://news.yahoo.com",
//   "http://news.yahoo.com/news",
//   "http://news.yahoo.com/news/topics/",
//   "http://news.yahoo.com/us"
// ]

// Solution 1

var crawl = function(startUrl, htmlParser) {
  let res = [startUrl];
  let seen = new Set();
  seen.add(startUrl);
  let originalHostname = startUrl.split('/')[2];
  let allUrls = htmlParser.getUrls(startUrl);
  let stack = [];
  for (let url of allUrls) {
      let hostname = url.split('/')[2];
      if (hostname === originalHostname) {
          stack.push(url);
      }
  }
  while (stack && stack.length > 0) {
      let current = stack.pop();
      if (seen.has(current)) continue;
      seen.add(current);
      res.push(current);
      let urls = htmlParser.getUrls(current);
      for (let i = 0; urls && i < urls.length; i++) {
          let localHostName = urls[i].split('/')[2];
          if (!seen.has(urls[i]) && localHostName === originalHostname) {
              stack.push(urls[i]);
          }
      }
  }
  return res;
};
