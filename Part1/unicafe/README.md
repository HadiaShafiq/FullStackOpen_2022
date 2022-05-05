
# Unicafe Feedback Statistic

Unicafe collects feedback from its customers. I have implemented a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad. The application displays the total number of collected feedback for each category. The application uses multiple and seperate components for rendering all of the statistics. [Unicafe Exercise]

[//]: # (reference links used in the body)

   [Unicafe Exercise]: <https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14>
   
   ## Components

 1. App 
 2. Heading1
 3. Button
 4. Statistics
 5. Count
 6. Total
 7. Average
 8. Percentage

**App Component**  is the root component using ***Heading1***, ***Button*** and ***Statistics*** component.

 **Heading1 Component**  returns <h 1> tag heading .
 
 **Button Component**  displays button to add feedback good, bad and neutral.

 **Statistics**  gives statistics about the gathered feedback using ***Count***, ***Total*** , ***Average*** and ***Percentage*** component.

 **Count Component**  counts the number of feedback(good, bad, neutral) gathered.
 
 **Total Component**  returns total number of  feedback(good, bad, neutral) gathered.

 **Average Component**  returns average of  feedback(good, bad, neutral) gathered.

 **Percentage Component**  returns percentage of positive feedback(good) gathered.
