var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.formatName = function () {
        return this._name[0].toUpperCase() + this._name.substring(1).toLowerCase();
    };
    ;
    return Person;
}());
/// <reference path="person.ts" />
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this._highScore = 0;
        return _this;
    }
    Player.prototype.formatName = function () {
        return _super.prototype.formatName.call(this) + " (".concat(this._highScore, ")");
    };
    ;
    return Player;
}(Person));
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.getInputValue = function (elementID) {
        var inputElement = document.getElementById(elementID);
        return inputElement.value;
    };
    return Utility;
}());
var Result = /** @class */ (function () {
    function Result(playerName, score, problemCount, factor) {
        this._factor = factor;
        this._playerName = playerName;
        this._problemCount = problemCount;
        this._score = score;
    }
    Object.defineProperty(Result.prototype, "playerName", {
        get: function () {
            return this._playerName;
        },
        set: function (value) {
            this._playerName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "problemCount", {
        get: function () {
            return this._problemCount;
        },
        set: function (value) {
            this._problemCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "factor", {
        get: function () {
            return this._factor;
        },
        set: function (value) {
            this._factor = value;
        },
        enumerable: false,
        configurable: true
    });
    return Result;
}());
/// <reference path="result.ts" />
var Scoreboard = /** @class */ (function () {
    function Scoreboard() {
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this._results.push(newResult);
    };
    Scoreboard.prototype.updateScoreBoard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var i in this._results) {
            var result = this._results[i];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />
var Game = /** @class */ (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        //TODO 5 Izracunati skor (proci kroz svako input polje sa idjem answer + i (answer1, answer2....))
        //I u vakom korak proveriti da li je i*fakotr == vrednosti polja answer
        //TODO 6 napraviti objekat rezultata koji zadovoljva intrfejs results i dodati ga u 
        //this.scoreboard i pozvati updateScoreboared metodu
        //TODO 7 Onemogucti klik na calculate dugme
    };
    return Game;
}());
/// <reference path="player.ts" />
/// <reference path="game.ts" />
var newGame;
// TODO 4 implementirati reakciju na klik dugmeta StartGame
// TODO  implementirati reakciju na klik dugmeta Calculate
//# sourceMappingURL=app.js.map