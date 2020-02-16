const express = require("express");
const router = express.Router();

const { word, animal } = require("../models");






module.exports = {
    getNames: function () {

        const names = [];

        

        setTimeout(() => {
            console.log(names);
            return names;
        }, 2000);

        function getWords () {
            word.findAll(function (result) {
                return result;
            });
        };

        function getAnimals () {
            animal.findAll(function (result) {
                return result;
            });
        };

        generateName(getWords(),getAnimals());

        function generateName(promise1, promise2) {
            Promise.all([promise1, promise2]).then(function (values) {

                var string1 = values[0].toString();
                var stringOne = string1[0].toUpperCase() +
                    string1.slice(1);

                var string2 = values[1].toString();
                var stringTwo = string2[0].toUpperCase() +
                    string2.slice(1);

                var output = stringOne + stringTwo + (Math.floor(Math.random() * 100));
                names.push(output);
            });
        };
    }
};