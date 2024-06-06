export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const numCalls = weakMap.get(endpoint) || 0;
  if (numCalls >= 4) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, numCalls + 1);
}
