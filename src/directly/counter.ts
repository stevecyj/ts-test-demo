export class Counter {
  private _count: number;
  constructor() {
    this._count = 0;
  }

  increment(): void {
    this._count++;
  }

  getCount(): number {
    return this._count;
  }
}
