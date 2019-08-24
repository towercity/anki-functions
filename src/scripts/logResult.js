// Runs two functions
// 1) prints ...ouput onto a fake on page console view
// 2) Dummy wrapper around real console.log call
// In the future, it will also be externalized
const logResult = (...output) => {
    const consoleDiv = document.getElementById('console-text');
    consoleDiv.innerHTML += output.join('<br />') + '<br />';

    output.map(content => console.log(content))
}

export default logResult;