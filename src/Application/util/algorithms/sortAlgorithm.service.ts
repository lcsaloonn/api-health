export class SortAlgorithm {
  /***
   * refactor into factory
   */
  sortAlphabetical(array: Array<any>): Array<any> {
    return array.sort();
  }

  sortByValueIncreasing(array: Array<any>): Array<any> {
    const byValue = (a, b) => a - b;
    const sorted = [...array].sort(byValue);
    return sorted;
  }
}
