/**
 * 특정 날짜의 요일
 * @param {Number} year 년
 * @param {Number} month 월 
 * @param {Number} day 일
 * @returns {Number} 요일index
 */
export const dayOfWeekYMD = (year, month, day) => {
    return new Date(year, month, day).getDay();
} 

/**
 * @param {Date} day 날짜형식
 * @returns {Number} 요일index
 */
export const dayOfWeekDate = (day) => {
    return new Date(day).getDay();
}

/**
 * @param {Number} year 년
 * @param {Number} month 월 
 * @param {Number} day 일
 * @returns {Date} 특정 년월의 첫날
 */
export const firstDate = (year, month) => {
    return new Date(year, month, 1);
}

/**
 * @param {Number} year 년
 * @param {Number} month 월 
 * @param {Number} day 일
 * @returns {Date} 특정 년월의 마지막 날
 */
export const lastDate = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
}

/**
 * 
 * @return {Date} 현재날짜(시간단위 생략) 
 */
export const nowDate = () => {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
}

export default { dayOfWeekYMD, dayOfWeekDate, firstDate, lastDate, nowDate };