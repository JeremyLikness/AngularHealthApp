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

05 - Next, the BMI formula is applied to the function and the tests now pass.
 
06 - The specifications and functions for the BMR and THR formulas have been added and passed. Now there are three more 
items to consider. First is a unit of measure state so that the user can switch between Imperial (U.S.) and Metric.
The next is a conversion library to convert between the units of measure, assuming they will be stored internally
as U.S., and finally there is a user profile to hold the information needed by the formulas. This results in 18 
failing tests because the resulting objects need to be created and modified to satisfy the tests.

07 - The unit of measure state object uses a JavaScript constructor to create an instance. It takes advantage of scope to
capture an internal set of flags for the measure. ECMAScript 5 properties are used to encapsulate access to the values
so they are validated Boolean and toggle appropriately. This allows the tests to pass.

The user profile and conversion libraries were both added and implemented so that all tests pass. 