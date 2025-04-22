export interface BibleBook {
  name: string;
  aliases: string[];
}

declare const booksOfTheBible: BibleBook[];

export default booksOfTheBible;
