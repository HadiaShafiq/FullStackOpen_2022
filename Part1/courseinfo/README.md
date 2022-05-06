# Course Information

CourseInfo uses an object **Course** and get object values using **props**. The application uses multiple components for rendering all the object values. [CourseInfo Exercise  1.3.-1.5]

[//]: # (reference links used in the body)

  [CourseInfo Exercise  1.3.-1.5]: <https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5>
[CourseInfo Exercises 1.1.-1.2]:
<https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2>
   
## Components

 1. App 
 2. Header
 3. Content
 4. Total
 5. Part

**App Component**  is the root component using ***Header***, ***Content*** and ***Total*** component.

 **Header Component**  returns <h 1> tag heading of **course name** .
 
 **Content Component** uses ***Part*** component.

 **Total Component**  gives Total number of exercises in each part.

 **Part Component**  returns each part: Name and exercises of the course object.

The **App.js** File has some code commented which is [CourseInfo Exercises 1.1.-1.2] code using multiple objects.
