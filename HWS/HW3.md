# HW3

This homework will provide practice with essential technology for dynamically updating a webpage, with a focus on understanding javascript and DOM.

**The assignment is due Sunday, Sept 19th, before midnight**.

### uQuery

Provide your answers from the in-class exercise.

### Packumble

Update the packumble application to complete missing functionality.

1. Fill in user name in `'s Matches`.

2. Complete the `createCard()` function. Add the card to the page.

3. Complete the swipeleft click function. After the swipe left animation completes, call `/no` in the backend to remove card, and then call `/see` to load next card.

4. Complete the swiperight click function. Call `/trymatch` to check if there is a match. If there is a match, add the `.fire` class to the card. If there is no match, add the `.swiperight` class to the card. When no match, after the transition ends (`transitionend` event), remove the card. 

5. Inside the swiperight click function, when the match animation completes (`animationend` event), add the card to the match area. 

6. Inside the swiperight click function, when the match animation completes, add the email information to the back side of card (available as a field on the `/trymatch` response body). 

7. For matched cards, add a click event to toggle `is-flipped`, allowing the email to be viewable.

_Bonus_: +10 Update the match animation to use a different effect.

> You are free to update the application as needed in order to meet the required functionality.

### Screencast

Create a screencast of for your assignment. In your screencast, cover the following:

> Demonstrate using your packumble application, including your completed functionality.

For guidelines, software, and recommendations [see Screencasts](Screencasts.md).

## Evaluation and Submission

You will be graded for completing the following tasks and meeting the following criteria:

* [ ] uQuery exercises (20)
* [ ] Packumble (70)
* [ ] Screencast (10)

**The assignment is due Sunday, Sept 19th, before midnight**.

Provide your answers to the conceptual questions in the README.md. Include your source files in your main repository branch. Document any information relevant for teaching staff that can be used to assist evaluated your submission, and include a link to your screencast in the README.md.

To submit your work, commit and push all changes to your repository by the deadline.