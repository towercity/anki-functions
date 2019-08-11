// Dummy wrapper around console.log
// In the future, this function will both console.log and post to a console on the DOM
// In the future, it will also be externalized
const logResult = (...output) => {
    output.map(content => console.log(content))
}

export default logResult;