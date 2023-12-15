let count = 0;

export function incrementCount() {
  return count++;
}

export function getCount(): number {
  return count;
}

export function reset() {
  count = 0;
}
