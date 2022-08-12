export default function reverse(inputString)
{
    inputString = inputString.toString();
    let reversedString = "";
    for(let i = (inputString.length - 1); i >= 0; i--)
    {
        reversedString += inputString.charAt(i);
    }
    return reversedString;
}