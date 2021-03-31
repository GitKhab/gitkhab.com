/**
 * Возвращает форму существительного в зависимости от числительного
 *
 * @example
 * // returns 'день'
 * pluralizeNoun(1, 'день', 'дня', 'дней');
 *
 * @example
 * // returns 'дня'
 * pluralizeNoun(2, 'день', 'дня', 'дней');
 *
 * @example
 * // returns 'дней'
 * pluralizeNoun(5, 'день', 'дня', 'дней');
 *
 * @param number - Число
 * @param {string} one - Первая форма существительного
 * @param {string} two - Вторая форма существительного
 * @param {string} five - Третья форма существительного
 * @returns {string} - Подходящая форма существительного
 */

export default function pluralizeNoun(number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number === 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
}
