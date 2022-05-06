

# Anecdotes

The web application displays **Anecdote of the day** and **Anecdote  with the Highest Votes**. The anecdotes are stored in an object and are randomly displayed using  **Next Anecdote**  button. The anecdote can also be voted. And based on the highest vote **Anecdote  with the Highest Votes** is shown. The application uses multiple components for rendering anecdotes.   
[Anecdotes Exercise]

[//]: # (reference links used in the body)

  [Anecdotes Exercise]: <https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14>
   
   ## Components

 1. App 
 2. Heading1
 3. Button
 4. GetAnecdote
 5. GetVote

**App Component**  is the root component using ***Heading1***, ***Button*** , ***GetAnecdote*** and  ***GetVote*** component. There are three states maintained using the **State Hooks**. The states are explained  in the [State](#States) Section.

 **Heading1  Component**  returns <h 1> tag heading.
 
 **Button Component** creates a button with a text and add an onclick event.

 **GetAnecdote Component** returns an anecdote based on a random index generated.

 **GetVote Component**  returns the vote of the selected anecdote.
 

   ## States  
   1. Selected
   2. Votes
   3. MaxVoteIndex

 **Selected State**  maintains the index of selected anecdote. The index is randomly generated.
 
 **Votes  State**  maintains the votes of each anecdote. It is an array initialized 0. 

 **MaxVoteIndex State**  maintains the Index of the anecdote which has the highest vote. When the vote button is clicked the MaxVoteIndex value changes if the selected anecdote vote is higher/greater.
 
