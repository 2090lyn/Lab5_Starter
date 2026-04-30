// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//  ---------- Part 2 ----------

// PhoneNumber
test('valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
}),
test('valid phone number 2', () => {
  expect(isPhoneNumber('619-273-9999')).toBe(true);
}),
test('invalid phone number 1', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
}),
test('invalid phone number 2', () => {
  expect(isPhoneNumber('12-4567-890')).toBe(false);
});

// Email
test('valid email 1', () => {
  expect(isEmail('cathlyn@example.com')).toBe(true);
}),
test('valid email 2', () => {
  expect(isEmail('cathlyn123@example.com')).toBe(true);
}),
test('invalid email 1', () => {
  expect(isEmail('cathlyn@example')).toBe(false);
}),
test('invalid email 2', () => {
  expect(isEmail('cathlynexample.com')).toBe(false);
});

// StrongPassword
test('valid password 1', () => {
  expect(isStrongPassword('Cathlyn_')).toBe(true);
}),
test('valid password 2', () => {
  expect(isStrongPassword('Cathlyn_123')).toBe(true);
}),
test('invalid password 1', () => {
  expect(isStrongPassword('123')).toBe(false);
}),
test('invalid password 2', () => {
  expect(isStrongPassword('Cat')).toBe(false);
});

// Date
test('valid date 1', () => {
  expect(isDate('10/10/2026')).toBe(true);
}),
test('valid date 2', () => {
  expect(isDate('1/1/2026')).toBe(true);
}),
test('invalid date 1', () => {
  expect(isDate('AB/44/2026')).toBe(false);
}),
test('invalid date 2', () => {
  expect(isDate('2027/50/20')).toBe(false);
})

// HexColor 
test('valid hex color 1', () => {
  expect(isHexColor('#FF0000')).toBe(true);
}),
test('valid hex color 2', () => {
  expect(isHexColor('#00FF00')).toBe(true);
}),
test('invalid hex color 1', () => {
  expect(isHexColor('FF00')).toBe(false);
}),
test('invalid hex color 2', () => {
  expect(isHexColor('#000FF')).toBe(false);
})