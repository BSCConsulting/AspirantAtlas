/**
 * Utility for strict Indian Mobile Number validation and formatting.
 * Standard Indian numbers: 10 digits starting with 6, 7, 8, or 9.
 */

export interface PhoneValidationResult {
  isValid: boolean;
  formatted: string;
  cleanDigits: string;
  errorMessage?: string;
}

/**
 * Strips any illegal non-numeric characters (except leading +).
 */
export function sanitizePhoneInput(input: string): string {
  // Allow leading + if present, then only digits
  const hasPlus = input.trim().startsWith('+');
  const digitsOnly = input.replace(/\D/g, '');
  if (hasPlus) {
    return '+' + digitsOnly;
  }
  return digitsOnly;
}

/**
 * Validates whether the given string is a valid Indian mobile number.
 */
export function validateIndianMobile(rawInput: string): PhoneValidationResult {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return {
      isValid: false,
      formatted: '',
      cleanDigits: '',
      errorMessage: 'Mobile number is required'
    };
  }

  // Check for letters or illegal symbols
  if (/[a-zA-Z]/.test(trimmed)) {
    return {
      isValid: false,
      formatted: trimmed,
      cleanDigits: '',
      errorMessage: 'Invalid characters: letters are not allowed in phone numbers'
    };
  }

  // Extract pure digits
  let digits = trimmed.replace(/\D/g, '');

  // Handle +91 or 91 country code prefix
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  if (digits.length < 10) {
    return {
      isValid: false,
      formatted: trimmed,
      cleanDigits: digits,
      errorMessage: `Enter a 10-digit mobile number (${digits.length}/10 entered)`
    };
  }

  if (digits.length > 10) {
    return {
      isValid: false,
      formatted: trimmed,
      cleanDigits: digits,
      errorMessage: `Mobile number has too many digits (${digits.length} digits found)`
    };
  }

  // First digit must be 6, 7, 8, or 9
  if (!/^[6-9]/.test(digits)) {
    return {
      isValid: false,
      formatted: trimmed,
      cleanDigits: digits,
      errorMessage: 'Indian mobile numbers must start with 6, 7, 8, or 9'
    };
  }

  const formatted = `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;

  return {
    isValid: true,
    formatted,
    cleanDigits: digits
  };
}
