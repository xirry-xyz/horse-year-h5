export function getCharacterIndex(name: string, answers: number[]): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
  }
  for (const a of answers) {
    hash = ((hash << 5) - hash + (a + 1) * 7) | 0;
  }
  return Math.abs(hash) % 50;
}
