// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

// Solution 1 with 2 stacks

class BrowserHistory {
  constructor(homepage) {
      this.backArr = [homepage];
      this.forwardArr = [];
  }
  visit(url) {
      this.forwardArr = [];
      this.backArr.push(url);
  }
  back(steps) {
      while(steps && this.backArr.length > 1) {
          this.forwardArr.push(this.backArr.pop());
          steps--;
      }
      return this.backArr[this.backArr.length - 1];
  }
  forward(steps) {
      while(steps && this.forwardArr.length > 1) {
          this.backArr.push(this.forwardArr.pop());
          steps--;
      }
      return this.backArr[this.backArr.length - 1];
  }
}

// Solution 2

var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.curr = 0;
};

BrowserHistory.prototype.visit = function(url) {
    this.history = this.history.slice(0, this.curr + 1);
    this.history.push(url);
    this.curr = this.history.length - 1;
};

BrowserHistory.prototype.back = function(steps) {
    this.curr = Math.max(0, this.curr - steps);
    return this.history[this.curr];
};

BrowserHistory.prototype.forward = function(steps) {
    this.curr = Math.min(this.history.length - 1, this.curr + steps);
    return this.history[this.curr];
};

// Solution 3

var BrowserHistory = function(homepage) {
    this.page = {
        url: homepage,
        back: null,
        next: null,
    };
};

BrowserHistory.prototype.visit = function(url) {
    this.page.next = {
        url,
        back: this.page,
        next: null
    };
    this.page = this.page.next;
};

BrowserHistory.prototype.back = function(steps) {
    while (this.page.back && steps) {
        this.page = this.page.back;
        steps--;
    }

    return this.page.url;
};

BrowserHistory.prototype.forward = function(steps) {
    while (this.page.next && steps) {
        this.page = this.page.next;
        steps--;
    }

    return this.page.url;
};
