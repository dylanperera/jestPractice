import reverse from "../jsFiles/reverseString.js"

//test to check basic string
test('basic string', () => {
    const testString = "hello";
    expect(reverse(testString)).toMatch("olleh");
})

test('sentence', ()=> {
    const testString = "I'am a full sentence, let's see if I get printed correctly";
    expect(reverse(testString)).toMatch("yltcerroc detnirp teg I fi ees s'tel ,ecnetnes lluf a ma'I");
})

test('with numbers', () => {
    const testString = "123456789";
    expect(reverse(testString)).toMatch("987654321");
})

test('spaces string', () => {
    expect(reverse(" ")).toMatch(" ");
})

test('empty string', () => {
    expect(reverse('')).toMatch('');
})

test('not a string', () => {
    expect(reverse(1234)).toMatch("4321");
})