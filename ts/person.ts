class Person {
  protected _name: string;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public formatName(): string {
    return this._name[0].toUpperCase() + this._name.substring(1).toLowerCase();
  };
}