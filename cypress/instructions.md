npm install cypress --save-dev <!-- install cypress -->
./node_modules/.bin/cypress open <!-- to open cypress the first time -->
npx cypress open <!-- to open cypress -->

<!-- Install istanbul to obtain the coverage and it also allows
you to run the tests from your terminal rather than the browser
via Cypress -->

npm install --save-dev istanbul <!-- install istanbul -->

<!-- Add this to your package.json file on the frontend -->

"test": "cypress run",
"coverage": "istanbul cover node_modules/.bin/cypress run"

<!-- calculate coverage AND run all tests -->

npm run coverage <!-- run the coverage -->
