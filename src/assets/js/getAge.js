/**
 * Возвращает возраст (полное количество лет) в зависимости от даты рождения
 *
 * @example
 * // returns 24 (на момент 10.09.2020)
 * getAge('1995-09-11');
 *
 * @example
 * // returns 25 (на момент 11.09.2020, 03:00:00)
 * getAge('1995-09-11');
 *
 * @param {string|Date} birthday - Дата рождения в формате ISO 8601 (YYYY-MM-DD)
 * @returns {number} age - Полное количество лет на данный момент
 */

export default function getAge(birthday) {
    birthday = new Date(birthday);
    let birthYear = birthday.getFullYear();

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    // Сравнение кол-ва миллисекунд, прошедших с 1 января 1970 года 00:00:00 (UTC)
    // до данного момента и до дня рождения в этом году
    return currentDate.getTime() < birthday.setFullYear(currentYear) ? age - 1 : age;
}
