var dolanpls = angular.module('dolanpls', []);

function dolanplsController($scope) {
    $scope.translate = function () {
        $scope.translatedText = translate(dictionary, $scope.inputText);
    }
}

function translate(dictionary, inputText) {
    var translatedText,
        replacement;

    translatedText = inputText;

    for (index in dictionary) {
        replacement = dictionary[index][Math.floor(Math.random() * dictionary[index].length)];
        translatedText = translatedText.replace(index, replacement);
    }

    return translatedText;
}

