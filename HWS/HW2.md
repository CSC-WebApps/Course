# HW2

This homework will provide practice with essential technology for building a webpage, with a focus on layout and composition.

**The assignment is due Sunday, Sept 12th, before midnight**.

## Github Repository Setup

A github repository has been created for you hosted on Github Enterprise. Sign into [NCSU's GitHub](https://github.ncsu.edu/).

Confirm your submission repository exists: `https://github.ncsu.edu/CSC-WebApps-F21/HW2-<unity>-WebApps`

## HW2 Content

### Conceptual Questions

1. What is the purpose of a REST api? What are some benefits and drawbacks?

2. For the given express route, what would be a valid `curl` request? What would it return?

   ```js
   app.get('/users/:id/friends', (req, res) => {
       let user = db.find(req.params.id);
       res.send( user.friends );
   }
   ```

3. What is the difference between a form submitting data with `application/x-www-form-urlencoded` vs. `application/json`?

4. After form submission, the response body is expected to ________________________.

5. What was an interesting challenge you encountered when implementing your payment form? What was the issue and how did you solve it?

### WolfMo

Incorporate the following elements into the implementation of your payment service:

![wolfmo](imgs/wolfmo.png)

* A search user function (or populate dropdown with all users).
* An upload file function. See [two approaches for implementing file preview](https://www.tutorialspoint.com/preview-an-image-before-it-is-uploaded-in-javascript).
* An payment form.
* A node.js application providing functionality REST endpoints.
* After clicking `Pay`, redirect to submission page showing information received by server, including:
   - Receiver
   - Uploaded image
   - Dollar amount,
   - Last 4 digits of credit card information and expiration date.

### Screencast

Create a screencast of for your assignment. In your screencast, cover the following:

> Describe your payment form and demonstrate your payment in action.

For guidelines, software, and recommendations [see Screencasts](Screencasts.md).

## Evaluation and Submission

You will be graded for completing the following tasks and meeting the following criteria:

* [ ] Conceptual Questions (20)
* [ ] Wolfmo Front-end (30)
* [ ] Wolfmo REST services (30)
* [ ] Page Aesthetics and Quality of Implementation (10) 
* [ ] Screencast (10)

**The assignment is due Sunday, Sept 12th, before midnight**.

Provide your answers to the conceptual questions in the README.md. Include your source files in your main repository branch. Document any information relevant for teaching staff that can be used to assist evaluated your site, and include a link to your screencast in the README.md.

To submit your work, commit and push all changes to your repository by the deadline.