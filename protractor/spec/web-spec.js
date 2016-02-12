describe('angularjs homepage', function () {
    beforeEach(function () {
        browser.get(browser.baseUrl);
    });

    it('should retrieve the title using browser', function () {
        return browser.getTitle().then(function (title) {
            expect(title).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
        });
    });

    it('should add a todo', function() {
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});