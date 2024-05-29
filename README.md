![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

## Geographic quiz,

Our project is a Quiz with a selection of categories which you can select to be taken to a five question quiz on the selected subject.  On completion you will pass to a end screen congratulating you on your score and offering you a button to play again which will take you back to the catagory selector.
<br>
This quiz covers a broad spectrum of geographical knowledge, testing participants' familiarity with various countries, significant rivers, and prominent mountain ranges. Each category includes a mix of easier and slightly more challenging questions to cater to a wide range of skill levels.

## Features / User Stories

As a user, I want a welcome screen, so that I know what the quiz game is about and can choose to start a round.
<br>
As a user I want the categories to set questions specific to the selected field, so I can play the quiz I selected.
acceptance criteria:
<br>
-Title
<br>
-Start button for each category
<br>
-easy to navigate
<br>
-responsive
<br>
-the categories display different question arrays depending on selection
<br>
<img></img>
<br>

As a user I want multiple choice questions with buttons to select my answers and clear questions.
<br>
As a user I want at least 4 or 5 questions per category, so that I can test my general knowledge.
<br>
Acceptance criteria:
<br>
-neat display of quiz container showing:
<br>
* the category title
* the question
* the 4 buttons for answers with the answers in them
-5 history questions
<br>
-5 geography questions
  <br>
-5 cultural questions
<br>
<img>
<br>
As a user I want a progress display and a score display so that I can see how far through I am and how I am doing.
<br>
As a user I want the progress section and the score section to increment as appropriate so I can see my progress in real time.
<br>
Acceptance criteria:
<br>
-Progress display
<br>
-score display
<br>
-score increments when correct answer selected
<br>
-progress bar increments after each question
<br>
<img>
<br>

As a user I want new questions for each round that don't repeat within the round.
<br>
Acceptance criteria:
<br>
-quiz iterates through set number of questions without repeating
<br>
-questions and answers show in the html
<br>
<img>
<br>

As a user I can see whether the answer that I have given was correct so that I can learn from my mistakes.
<br>
acceptance criteria:
<br>
-displays if answer if answer is incorrect or correct
<br>
<img>
<br>

As a user I want an end page to display how I did and let me go back to the the start/welcome page
<br>
acceptance criteria:
<br>
-header shows which category you were playing
<br>
-shows score
<br>
-button to return to start page
<br>
-hidden when not in use
<br>
<img>
<br>

## Release History


## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
