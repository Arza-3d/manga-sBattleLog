function generateMangaPillChapterUrl(chapterNumber) {
  // Input validation: Ensure chapterNumber is a positive integer
  if (typeof chapterNumber !== 'number' || chapterNumber <= 0) {
    throw new Error('Invalid input: chapterNumber must be a positive integer.');
  }

  // Base URL components
  const baseUrl = 'https://mangapill.com/chapters/';
  const chapterPrefix = '3069-'; // Assuming consistent chapter prefix

  // Calculate chapter ID based on chapter number (assuming 5-digit padding)
  const chapterId = chapterPrefix + (chapterNumber.toString().padStart(5, '0'));

  // Construct the full URL with chapter title (assuming "naruto-chapter-{chapterNumber}")
  const chapterTitle = `naruto-chapter-${chapterNumber}`;
  const fullUrl = `${baseUrl}${chapterId}/${chapterTitle}`;

  return fullUrl;
}
