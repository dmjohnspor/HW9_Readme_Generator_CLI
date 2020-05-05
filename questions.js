const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "Enter the name of the github repository:",
        name: "repo"
    },
    {
        type: "input",
        name: "description",
        message: "Brief description of your app:"
    },
    {
        type: "input",
        name: "installation",
        message: "Brief description of the installation process:"
    },
    {
        type: "input",
        name: "usage",
        message: "Brief description of the app usage:"
    },
    {
        type: "input",
        name: "linkedin",
        message: "Your LinkedIn username:"
    },
    {
        type: "input",
        name: "email",
        message: "Your GitHub email:"
    },
]

module.exports = questions;