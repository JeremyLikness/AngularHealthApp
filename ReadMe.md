Angular Health App
==================

01 - This is the shell for the Angular health app. It is the minimum needed for a working Angular application and a
ready-made test harness.

02 - The next step is to refactor the setup for the app to a separate file, and include it in the test harness so that
the tests will run against the app. 

03 - The app is for a health calculator, so one of the first specifications is to ensure the formula for BMI calculates 
correctly. Of course, because there is no function the code will fail at first.

04 - The easiest way to make the specification to pass is to define the function because it is failing with the 
message that the function is undefined. Once the function is defined and added to the test harness, you see the failure
is now related to the result being undefined.

Next, the BMI formula is applied to the function and the tests now pass. 