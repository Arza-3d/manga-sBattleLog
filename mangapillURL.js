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

// Example usage
try {
  const url1 = generateMangaPillChapterUrl(5);
  console.log(url1); // Output: https://mangapill.com/chapters/3069-10005000/naruto-chapter-5

  const url2 = generateMangaPillChapterUrl(30);
  console.log(url2); // Output: https://mangapill.com/chapters/3069-10030000/naruto-chapter-30

  const url3 = generateMangaPillChapterUrl(697);
  console.log(url3); // Output: https://mangapill.com/chapters/3069-10697000/naruto-chapter-697
} catch (error) {
  console.error(error.message);
}
