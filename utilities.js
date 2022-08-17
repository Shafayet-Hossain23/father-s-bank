function getInputFieldById(InputId) {
    const inputField = document.getElementById(InputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getInnerTextByField(innerTextId) {
    const CallInnerText = document.getElementById(innerTextId);
    const innerTextString = CallInnerText.innerText;
    const innerTextValue = parseFloat(innerTextString);
    return innerTextValue;
}

function changeInnerText(id, replacedValue) {
    const callInnerTextSection = document.getElementById(id);
    callInnerTextSection.innerText = replacedValue;

}