// 535. Encode and Decode TinyURL

// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

// Solution 1 - storing all encoded strings in hash map

let shortLongStringMap = new Map();
let encodedNumber = 0;

// Encodes a URL to a shortened URL.
var encode = function(longUrl) {
    let encodedString = 'http://tinyurl.com/' + ++encodedNumber;
    shortLongStringMap.set(encodedString, longUrl);
    return encodedString;
};

// Decodes a shortened URL to its original URL.

var decode = function(shortUrl) {
    if (shortLongStringMap.has(shortUrl)) {
        return shortLongStringMap.get(shortUrl);
    }
    return '';
};
