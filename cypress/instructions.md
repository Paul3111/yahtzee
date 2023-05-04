npm install cypress --save-dev <!-- install cypress -->
./node_modules/.bin/cypress open <!-- to open cypress the first time -->
npx cypress open <!-- to open cypress app -->

<!-- Install istanbul to obtain the coverage and it also allows
you to run the tests from your terminal rather than the browser
via Cypress -->

npm install --save-dev istanbul <!-- install istanbul -->
npm install -D @cypress/code-coverage <!-- install coverage plugin -->
npm install --save-dev nyc <!-- install nyc -->

<!-- Add this to your package.json file on the frontend -->

"test": "cypress run",
"coverage": "cypress run --env coverage=true"

<!-- calculate coverage AND run all tests -->

npm run coverage <!-- run the coverage -->
