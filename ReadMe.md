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

08 - The user profile and conversion libraries were both added and implemented so that all tests pass.
 
09 - For Angular to use the various components they must be registered with the dependency injection service. A set of 
specifications validates the registration, but current fail because the components have not yet been registered.

10 - Now the services have been added. Note that two Angular shortcuts are used. The factory is used to return a reference
to the functions, while the service function is used to pass the function constructor. The end result is the same: 
a named reference to a component, it's just the way the component is provided that differs. It is perfectly valid to
collapse the definitions into a single file since they are really just proxies to the pure JavaScript definitions.

11 - To wire up the UI, two things are needed for the unit of measure. First, a controller to act as "glue" between the
service and the UI, and second, a filter to make a "readable" version of the current unit of measure. The 
specifications for these have been added, but are failing because the components themselves aren't written yet.

12 - The controller simply takes in a dependency on the unit of measure service and saves it to expose for data-binding.
Using this approach ensures any components in the system are working with the same "copy" of the unit of measure 
state. The UI is wired to use the controller and the filter to expose a button. The button displays the current state
of the unit of measure, and toggles between states when clicked using the exposed toggle method on the unit of 
measure component.

13 - Next, the user profile is integrated into the application. The first part of the profile is gender. A gender filter
is needed to show whether the user is male or female, so a specification for the filter and another one for the 
controller is added. The resulting controller and filter are wired into the application and used to create a toggle
for choosing gender. Note the similarities between the metric and gender toggle. This is a great opportunity to 
refactor into a common template using an Angular directive.

14 - The Angular directive uses a template for the repeated structure of the control. It defines several variables that are
wired based on the UI. The various levels of scope isolation are demonstrated and the reusable directive is 
implemented and verified to behave consistently.
 
15 - The specification for the user controller is enhanced to include scenarios relating to the user's height. It should
correctly track height and convert for the UI as needed based on the unit of measure selection. The tests fail because
the height functionality has not yet been implemented.

16 - The height functionality required an additional height filter specification. The height filter is a bit different for
two reasons. First, it depends on other services so it is the first example of a filter with a dependency. Second, it
should not attempt to convert the input value if it is a min/max range value because this is hard-coded on the 
controller. Therefore, it takes a parameter to avoid the conversion step for those ranges. The controller was updated
to expose the height and weight values and the UI updated with a slider. Notice that you can now change the weight as
well as toggle the unit of measure and see it all reflected dynamically. There is no special messaging or watch because
the properties depend on each other and Angular will automatically reevaluate the values when the model is mutated.

17 - A quick pass at styling makes for consistent UI elements and allows them to flow to fill the space. The app is now 
responsive to wide and small (mobile) configurations.

18 - Weight specifications have been added. The weight input will be free form, so additional validation must exist to 
ensure the user profile is never populated with an invalid weight. The specifications detail these requirements along
with the necessary filter to show the proper unit of measure. These are failing because the weight functionality has
not yet been implemented.

19 - The weight form and styles are added and the conversion is now testable using the input field. For weights within the
range the conversion works seamlessly when the unit of measure is changed. The user profile was updated to capture the
most recent unit of measure. This way when the unit of measure changes, it can convert the weight values for exposure
to the UI. This should only happen at the precise moment of conversion; not before or after. 

The age specifications are added and age input implemented in the UI. Now the user profile is complete and we can focus
on exposing the formulas.