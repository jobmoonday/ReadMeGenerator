const fs = require ("fs");
const path = require ("path");
const inquirer= require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");

const questions = [
    'Please enter your TITLE:',
    'Please enter your DESCRIPTION:',
    'Please enter your INSTALLATION:',
    'Please enter your USAGE:',
    'Please enter your LICENSE:',
    'Please enter your CONTRIBUTING:',
    'Please enter your TESTS',
    'Please enter your GITHUB USERNAME:',     
    'Please enter your EMAIL:'
];

function writeToFile (filename, data){
    fs.writeFile(filename, data, (error) => {
        if (error)
        console.log(error)
        else{
            console.log("File has been written successfully");
            console.log("The written file has the content below");
            console.log(fs.readFileSync(filename, "utf-8"));
        }
    });   
}

function init () {
    inquirer.prompt ([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'license'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'contributing'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'tests'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        }        
    ])
    .then((response) => {
        const readMePage = generateMarkdown(response);
        writeToFile('README.md', readMePage);
    });
}

init();

