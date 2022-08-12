import capitalizeFirstLetter from "../jsFiles/capitalizeLetter.js";

test('basic string', () => {
    const stringToTest = "hello";
    expect(capitalizeFirstLetter(stringToTest)).toMatch("Hello");
})

test('sentence', () => {
    const sentenceToTest = "this is a sentence";
    expect(capitalizeFirstLetter(sentenceToTest)).toMatch("This is a sentence");
})

test('first letter is a not a letter', () => {
    const testString = "1232hello";
    expect(capitalizeFirstLetter(testString)).toMatch(testString);
})

test('empty string', () => {
    const testString = "";
    expect(capitalizeFirstLetter(testString)).toMatch(testString);
})

test('space is first character', () =>
{
    const testString = " eqewew";
    expect(capitalizeFirstLetter(testString)).toMatch(testString);
})