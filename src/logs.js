const fs = require('fs');
const print = require('./response');

const now = new Date();
const yy = now.getFullYear();
const mm = now.getMonth() + 1;
const dd = now.getDate();
const hh = now.getHours();
const mn = now.getMinutes();
const ss = now.getSeconds();
const filePath = `./usr/logs/${dd}-${mm}-${yy}@${hh}:${mn}:${ss}.txt`;

module.exports = {
  init: (options, len) => {
    // Create logs directory if not exists
    fs.mkdir('./usr/logs', (err) => {
      if (err && err.code !== 'EEXIST') {
        print.error(err);
        process.exit(1);
      }
    });
    const message =
`Options:
${JSON.stringify(options, null, 2)}
Number of requests: ${len}
`;
    // log file header
    fs.writeFile(filePath,
      message,
      (err) => {
        if(err) {
          print.error(err);
          process.exit(1);
        }
        print.info(`Created new log file with the name ${filePath.slice(12)}`);
        print.info('Check log file for the responses');
    });
  },

  log: (body) => {
    // Add a new entry to the log file
    fs.appendFile(filePath, JSON.stringify(body, null, 2), (err) => {
      if (err) {
        print.error(err);
        process.exit(1);
      }
    });
  }
};