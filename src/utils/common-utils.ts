const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const splitDescription = (description: string, maxLength = 100): string[] => {
  const sentences: string[] = description.split('.')
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);

  const paragraphs: string[] = [];
  let paragraph = '';

  sentences.forEach((sentence) => {
    if (paragraph.length + sentence.length > maxLength) {
      paragraphs.push(paragraph.trim());
      paragraph = '';
    }
    paragraph += `${sentence }. `;
  });
  if (paragraph.trim()) {
    paragraphs.push(paragraph.trim());
  }

  return paragraphs;
};

export { shuffle, splitDescription };

