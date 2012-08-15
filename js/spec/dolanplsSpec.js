describe("translate()", function () {
    it("should correctly translate the input text", function () {
        var dictionary,
            inputText,
            translatedText;

        inputText  = "Hello world!";
        dictionary = {
            "Hello": ["Bonjour"],
            "world": ["tout le monde"]
        };

        translatedText = translate(dictionary, inputText);
        expect(translatedText).toEqual("Bonjour tout le monde!");
    });

    it("should return the input itself if no expression can be replaced", function () {
        var dictionary,
            inputText,
            translatedText,

        dictionary = {};
        inputText  = "Hello world!";

        translatedText = translate(dictionary, inputText);
        expect(translatedText).toEqual(inputText);
    });
});

