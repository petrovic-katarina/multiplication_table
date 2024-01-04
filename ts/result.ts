class Result {
  private _playerName: string;
  private _score: number;
  private _problemCount: number;
  private _factor: number;


  constructor(playerName: string, score: number, problemCount: number, factor: number) {
    this._factor = factor;
    this._playerName = playerName;
    this._problemCount = problemCount;
    this._score = score;
  }


  public get playerName(): string {
    return this._playerName;
  }

  public set playerName(value: string) {
    this._playerName = value;
  }

  public get score(): number {
    return this._score;
  }

  public set score(value: number) {
    this._score = value;
  }

  public get problemCount(): number {
    return this._problemCount;
  }

  public set problemCount(value: number) {
    this._problemCount = value;
  }

  public get factor(): number {
    return this._factor;
  }

  public set factor(value: number) {
    this._factor = value;
  }


}