describe("translate()", function () {
    it("should correctly translate the input text", function () {
        var dictionary,
            inputText,
            translatedText;

        inputText  = "Hello world!";
        dictionary = {
            "Hello": ["bonjour"],
            "world": ["tout le monde"]
        };

        translatedText = translate(dictionary, inputText);
        expect(translatedText).toEqual("bonjour tout le monde!");
    });

    it("should recursively translate the input text", function () {
        var dictionary,
            inputText,
            translatedText;

        inputText  = "Hello world! Hello!";
        dictionary = {
            "Hello": ["Bonjour"],
            "world": ["tout le monde"]
        };

        translatedText = translate(dictionary, inputText);
        expect(translatedText).toEqual("Bonjour tout le monde! Bonjour!");
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

describe("orderDictionary()", function () {
    it("should correctly order the dictionary", function () {
        var dictionary,
            orderedDictionary,
            expectedDictionary,
            keys,
            key,
            expectedKeys;

        dictionary = {
            "in":          ["n"],
            "my":          ["mai"],
            "bed":         ["bedd"],
            "because":     ["cuz"],
            "couch":       ["cuch"],
            "is":          ["iz"]
        };
        expectedDictionary = {
            "because":     ["cuz"],
            "couch":       ["cuch"],
            "bed":         ["bedd"],
            "in":          ["n"],
            "my":          ["mai"],
            "is":          ["iz"]
        };

        orderedDictionary = orderDictionary(dictionary);

        keys         = [];
        expectedKeys = [];
        for (key in expectedDictionary) {
            keys.push(key);
        }
        for (key in orderedDictionary) {
            expectedKeys.push(key);
        }
        expect(expectedKeys).toEqual(keys);

        expect(orderedDictionary).toEqual(expectedDictionary);
    });
});

