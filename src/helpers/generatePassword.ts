export const generatePassword = (
    length: number, includeLowercase: boolean, includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean
): string => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let charSet = '';
    if (includeLowercase) charSet += lowercaseChars;
    if (includeUppercase) charSet += uppercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet[randomIndex];
    }
    return generatedPassword;
};
