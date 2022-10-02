export function replaceSpaceByhyphen(str: string) {
  return str.replace(/\s+/g, '-').toLowerCase();
}
