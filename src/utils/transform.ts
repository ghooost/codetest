export const stringToNumber = (
  value: number | string | null,
): number | null => {
  const raw = Number(value);
  if (Number.isFinite(raw)) {
    return raw;
  }
  return null;
};

export const limitNumber = (
  value: number, min: number, max: number,
): number => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

export const stringToEnum = <EnumType>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  enumObject: Object,
  value: string | null,
): EnumType | null => {
  if (value === null) {
    return null;
  }
  const raw = Object.entries(enumObject).find(([_, val]) => val === value);
  if (raw) {
    return raw[1];
  }
  return null;
};

export const mixToDateOrNull = (
  value: string | number | Date | null,
): Date | null => {
  if (value === null) {
    return null;
  }
  return new Date(value);
};
