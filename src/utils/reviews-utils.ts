type SplitResult<T> = [T[], T[]];

function splitArray<T>(array?: T[] | null): SplitResult<T> {
  // Если входное значение null или undefined, возвращаем два пустых массива
  if (!array || array.length === 0) {
    return [[], []];
  }

  // Рассчитываем средний индекс, округленный вверх
  const middleIndex = Math.ceil(array.length / 2);

  // Разбиваем массив на два подмассива
  const firstPart = array.slice(0, middleIndex);
  const secondPart = array.slice(middleIndex);

  return [firstPart, secondPart];
}

export { splitArray };
