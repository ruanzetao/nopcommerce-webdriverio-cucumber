rm -f ./TestResult/Screenshots/*.png
rm -rf ./TestResult/Reports
rm -rf ./docs
mkdir -p TestResult/Screenshots

### Install the chrome driver https://www.npmjs.com/package/chromedriver
npm install chromedriver --detect_chromedriver_version
