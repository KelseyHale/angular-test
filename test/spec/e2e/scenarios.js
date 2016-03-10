// describe('menu items navigation', function() {
//   it('navigate to the correct menu item page', function() {
//     browser.get('https://angularjs.org');
//
//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();
//
//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });

'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Navigate to each page with the nav bar', function() {
  it('should have the correct title', function() {
    browser.get('/#/');
    element(by.linkText("One")).click();
    expect(element(by.css('h1')).getText()).toEqual('One');
  });
  it('should have the correct title', function() {
    browser.get('/#/');
    element(by.linkText("Two")).click();
    expect(element(by.css('h1')).getText()).toEqual('Two');
  });
  it('should have the correct title', function() {
    browser.get('/#/');
    element(by.linkText("Three")).click();
    expect(element(by.css('h1')).getText()).toEqual('Three');
  });
  it('should have the correct title', function() {
    browser.get('/#/');
    element(by.linkText("Four")).click();
    expect(element(by.css('h1')).getText()).toEqual('Four');
  });
  it('should have the correct title', function() {
    browser.get('/#/');
    element(by.linkText("Five")).click();
    expect(element(by.css('h1')).getText()).toEqual('Five');
  });
  it('should have the correct title', function() {
    browser.get('/#/');
    element(by.linkText("Six")).click();
    expect(element(by.css('h1')).getText()).toEqual('Six');
  });
  it('should have the correct title', function() {
    browser.get('/#/');
    element(by.linkText("Home")).click();
    expect(element(by.css('h1')).getText()).toEqual('Home');
  });
});
