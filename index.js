const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your project? What is it's purpose?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide steps that should be taken to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What your project should &/or shouldn't be used for?",
    },
    {
        type: "list",
        name: "license",
        message: "What type of licenses do you need?",
        choices: [
            "Academic Free License v3.0"
            ,"Apache license 2.0"
            ,"Artistic license 2.0"
            ,"Boost Software License 1.0"
            ,"BSD 2-clause 'Simplified' license"
            ,"BSD 3-clause 'New' or 'Revised' license"
            ,"BSD 3-clause Clear license"
            ,"Creative Commons license family"
            ,"Creative Commons Zero v1.0 Universal"
            ,"Creative Commons Attribution 4.0"
            ,"Creative Commons Attribution Share Alike 4.0"
            ,"Do What The F*ck You Want To Public License"
            ,"Educational Community License v2.0"
            ,"Eclipse Public License 1.0"
            ,"Eclipse Public License 2.0"
            ,"European Union Public License 1.1"
            ,"GNU Affero General Public License v3.0"
            ,"GNU General Public License family"
            ,"GNU General Public License v2.0"
            ,"GNU General Public License v3.0"
            ,"GNU Lesser General Public License family"
            ,"GNU Lesser General Public License v2.1"
            ,"GNU Lesser General Public License v3.0"
            ,"ISC"
            ,"LaTeX Project Public License v1.3c"
            ,"Microsoft Public License"
            ,"MIT"
            ,"Mozilla Public License 2.0"
            ,"Open Software License 3.0"
            ,"PostgreSQL License"
            ,"SIL Open Font License 1.1"
            ,"University of Illinois/NCSA Open Source License"
            ,"The Unlicense"
            ,"zLib License"

        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines? e.g. creating issues, pull/push requests, behavoural expectations",
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide some testing guidelines, where required",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
      },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();