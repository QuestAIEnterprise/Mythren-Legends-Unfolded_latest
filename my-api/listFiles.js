const { google } = require('googleapis');
const drive = google.drive('v3');

// Use the API key
const apiKey = 'AIzaSyD6JwCO0VjFn7Ycd5B_JLL1tdOzvXZd47k';

// Example function to list files using API key
function listFiles() {
    drive.files.list({
        key: apiKey,
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
    }, (err, res) => {
        if (err) return console.error('The API returned an error: ' + err);
        const files = res.data.files;
        if (files.length) {
            console.log('Files:');
            files.map((file) => {
                console.log(`${file.name} (${file.id})`);
            });
        } else {
            console.log('No files found.');
        }
    });
}

listFiles();
