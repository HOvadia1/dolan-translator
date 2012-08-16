"use strict";

var dolanpls = angular.module('dolanpls', []);

function dolanplsController($scope) {
    $scope.translate = function () {
        if (angular.dictionary == undefined)
            angular.dictionary = orderDictionary(dictionary);
        $scope.translatedText = translate(dictionary, $scope.inputText);
    }
}

function translate(dictionary, inputText) {
    var translatedText,
        replacement,
        key,
        regex;

    translatedText = inputText;

    for (key in dictionary) {
        replacement = dictionary[key][Math.floor(Math.random() * dictionary[key].length)];
        regex = new RegExp(key, 'gi');
        translatedText = translatedText.replace(regex, replacement);
    }

    return translatedText;
}

function orderDictionary(dictionary) {
    var keys,
        key,
        index,
        orderedDictionary;

    keys = [];
    for (key in dictionary) {
        keys.push(key);
    }

    keys = keys.sort(function (a, b) {
        return (a.length < b.length);
    });

    orderedDictionary = {};
    for (index in keys) {
        orderedDictionary[keys[index]] = dictionary[keys[index]];
    }

    return orderedDictionary;
}

