// 1.1. Сегодняшняя дата
const today = new Date();
console.log(`1.1. Сегодняшняя дата: ${today.toLocaleDateString()}`);

// 1.2. Возраст по дате рождения
const birthday = new Date('2007-02-23'); 
const ageInMs = today - birthday;
const ageInDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
const ageInYears = Math.floor(ageInDays / 365);
console.log(`1.2. Ваш возраст: ${ageInYears} лет или ${ageInDays} дней`);

// 1.3. Проверка на високосный год
const year = today.getFullYear();
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(`1.3. ${year} год ${isLeap ? 'високосный' : 'не високосный'}`);

// 1.4. Проверка на юбилей
const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
if (nextBirthday < today) {
  nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}
const yearsNext = nextBirthday.getFullYear() - birthday.getFullYear();
const isJubilee = yearsNext % 10 === 0;
console.log(`1.4. В ${nextBirthday.getFullYear()} году ${isJubilee ? 'будет' : 'не будет'} юбилей (${yearsNext} лет)`);

// 1.5. Конвертация временного штампа
const utcOffset = today.getTimezoneOffset() / 60;
if (utcOffset === -3) {
  console.log('1.5. У вас московское время');
  const internationalTime = new Date(today.getTime() - (3 * 60 * 60 * 1000));
  console.log(`Международное время: ${internationalTime.toUTCString()}`);
} else {
  console.log('1.5. У вас международное время');
  const moscowTime = new Date(today.getTime() + (3 * 60 * 60 * 1000));
  console.log(`Московское время: ${moscowTime.toUTCString()}`);
}