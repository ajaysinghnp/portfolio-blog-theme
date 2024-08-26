export const slugify = (text: string) =>
  text.toLowerCase().replace(/ /g, "-").replaceAll(".", "");

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 150; // Average reading speed
  const words = content.split(/\s+/).length; // Split by whitespace and count words
  const minutes = Math.ceil(words / wordsPerMinute); // Calculate total minutes (rounded up)
  return `${minutes} ${minutes > 1 ? " mins " : " min "} read`;
};
