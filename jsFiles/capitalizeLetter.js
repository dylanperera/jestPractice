export default function capitalizeFirstLetter(inputString) {
  const firstChar = inputString.charAt(0);
  if ((typeof firstChar == 'string') && firstChar !== " " && firstChar !== "") {
    inputString = inputString.replace(
      inputString.charAt(0),
      inputString.charAt(0).toUpperCase()
    );
  }
  return inputString;
}
