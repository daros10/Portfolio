export const generateRandomColor = (): string => {
  const randomValue: () => number = () => Math.floor(70 + Math.random() * 80);
  const toHex: (value: number) => string = (value: number) =>
    value.toString(16).padStart(2, "0");
  const r: string = toHex(randomValue());
  const g: string = toHex(randomValue());
  const b: string = toHex(randomValue());

  return `#${r}${g}${b}`;
};
