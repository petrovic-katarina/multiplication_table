/// <reference path="result.ts" />

class Scoreboard {
  private _results: Result[];

  public addResult(newResult: Result): void {
    this._results.push(newResult);
  }

  public updateScoreBoard(): void {
    let output: string = '<h2>Scoreboard</h2>';

    for (let i in this._results) {
      let result: Result = this._results[i];
      output += '<h4>';
      output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
      output += '</h4>';
    }

    let scoresElement: HTMLElement = document.getElementById('scores');
    scoresElement.innerHTML = output;

  }
}