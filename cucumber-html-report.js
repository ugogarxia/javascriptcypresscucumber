const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/cucumber-json/",
    reportPath: "cypress/reports/html-multi-report/",
    ignoreBadJsonFile: true,
    displayReportTime: true,
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "114",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Automation with cypress",
        data: [
            { label: "Udemy course", value: "June 2023" },
            { label: "Release", value: "1" },
            { label: "Cycle", value: "1" }

        ],
    },
});