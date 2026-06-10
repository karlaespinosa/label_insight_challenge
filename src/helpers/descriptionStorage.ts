const STORAGE_KEY = "photo-descriptions";

export class DescriptionStorage {
  static getAllDescriptions(): Record<number, string> {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? JSON.parse(stored) : {};
  }

  static getDescription(photoId: number): string {
    const descriptions = this.getAllDescriptions();

    return descriptions[photoId] ?? "";
  }

  static saveDescription(photoId: number, description: string): void {
    const descriptions = this.getAllDescriptions();

    descriptions[photoId] = description;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(descriptions));
  }
}
