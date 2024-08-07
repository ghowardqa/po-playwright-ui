# po-api-automation-task
This is a repository that contains ui automation against the Amazon website. The project contains script test and pom test for the task. 
### What's next
- Introduction testId to finding and dealing with elements easier
- Once added devise a testId strategy.
- Build out coverage against automation priority
- Introduction mocking to allow to test different UI states and help with network latency and test flakiness. 

## Setup guide
if you have got Playwright already installed then you can skip this section
```
npm install playwright
```

## How to run the tests
in the terminal from root of the project, run the following command.
```
npx playwright test
```


## How to run single tests
```
npx playwright test tests/filename.ts
```
    

 
