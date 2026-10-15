/**
 * Safe localStorage wrapper with defensive error handling,
 * quota detection, and typed JSON serialization.
 */

export function safeGetJSON<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`[storageHelper] Corrupted or inaccessible key "${key}", using fallback.`, error);
    return fallback;
  }
}

export function safeSetJSON<T>(key: string, value: T): boolean {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error(`[storageHelper] Failed to write key "${key}" to localStorage.`, error);
    return false;
  }
}

export function safeGetString(key: string, fallback: string = ''): string {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch {
    return fallback;
  }
}

export function safeSetString(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

export function safeRemove(key: string): boolean {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}
