// jest test code



describe("A simple test", () => {
    test("Test case 1",() => {

        //the test comes here
        const text = "hello";
        const result = text.toUpperCase();
        expect(result).toBe("HELLO");
    });

});
