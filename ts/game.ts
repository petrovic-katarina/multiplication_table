/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {
    }

    displayGame(): void {

        let gameForm: string = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }

        let gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {

        let score: number = 0;
        for (let i = 1; i <= this.problemCount; i++) {
            let answer: number = Number(Utility.getInputValue('answer' + 1));
            if (i * this.factor === answer) {
                score++;
            }
        }

        let result: Result = new Result(this.player.formatName(), score, this.problemCount, this.factor);

        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}