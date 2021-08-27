# HW0

This homework will provide practice with essential technology for building a webpage, with a focus on layout and composition.

**The assignment is due Sunday, Sept 5th, before midnight**.

## Github Repository Setup

A github repository has been created for you hosted on Github Enterprise. Sign into [NCSU's GitHub](https://github.ncsu.edu/).

1. Confirm your submission repository exists: `https://github.ncsu.edu/CSC-WebApps-F21/HW1-<unity>-WebApps`
2. **Do not create any content, yet**
 
### Clone and set-url

3. Clone the following template repository. Then, modify the git remote url so that it now will point to your `HW1-<unity>-WebApps` repo.

```bash
git clone http://github.com/CSC-WebApps/LandingPage
git remote -v
git remote set-url origin https://github.ncsu.edu/CSC-WebApps-F21/HW1-<unity>-WebApps
```

## HW1 Content

### Conceptual Questions

1. In web development, why "study the timeless"?

2. What is the CSS Box Model and why is it important?

3. Research an additional CSS concept not covered in class and explain an interesting face you learned.

4. Why can using `!important` be problematic?

5. Write a selector that will only select the first li.

   ```html
   <div>
     <ul>
       <li><a href="http://example.com">I am special!</a></li>
       <li><a href="#">No where</a></li>
     </ul>
   ```

6. How might a breadcrumb and navbar be used in the design of a web page.

7. Scenario: A web designer wants to place a series of very small images, side by side, and have them wrap over to the next line if full. Should the images have a `display:inline;` or `display:block;` layout? Why?

8. Compare and contrast "relative" and "absolute" positioning.

9. What benefit does using flexbox layouts have over traditional bootstrap grid layouts.

10. What was an interesting challenge you encountered when designing your landing page? What was the issue and how did you solve it?

### Landing Page

Incorporate the following elements into the design of your landing page:

* Unique Selling Proposition (headline, supporting text)
* A _hero image_
* The benefits of your offering.
* Social proof
* Lead generation form (call to action)

### Dark Mode Toggle

Add a checkbox that will trigger a dark mode toggle. Use a css filter, such as `filter: invert(100%);`. You may also want to combine with other filter strategies such as `hue`. Ensure images are inverted.

### Github Pages

Publish your site on your repo's Github Pages. Follow the instructions on [Github Pages](../Pages/GithubPages.md).

### Screencast

Create a screencast of for your assignment. In your screencast, cover the following:

> Describe your Landing Page and its elements. Demonstrate your dark mode toggle.

For guidelines, software, and recommendations [see Screencasts](Screencasts.md).

## Evaluation and Submission

You will be graded for completing the following tasks and meeting the following criteria:

* [ ] Conceptual Questions (20)
* [ ] Incorporate Elements of Landing Page (20)
* [ ] Page Aesthetics and Quality of Implementation (20) 
* [ ] Dark Mode Toggle with CSS Filter Hack (15)
* [ ] Publish your site on Github Pages (15)
* [ ] Screencast (10)

**The assignment is due Sunday, Sept 5th, before midnight**.

Provide your answers to the conceptual questions in the README.md. Include your source files in your main repository branch. Document any information relevant for teaching staff that can be used to assist evaluated your site, and include a link to your screencast in the README.md.

To submit your work, commit and push all changes to your repository and gh-pages branch by the deadline.