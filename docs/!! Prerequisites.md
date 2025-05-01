# Prerequisites!
Before you can begin to run the Expo and/or Locofy application, you will need to install a few prerequisites onto your computer. Please ensure you have a decent amount of storage space available, and remember to only download files from the *official* source linked.

## Adobe XD
Adobe XD is the app that we primarily use to design new pages for the application, and can only be downloaded with an Adobe premium subscription. Good news: the Boone County School District can give out a set number of these subscriptions for free every year, so you'll want to connect with Mrs. Brown (sarah.brown@boone.kyschools.us) as soon as you can. This process may also take a few weeks to go through, so you may also want to follow up pretty regularly to ensure that they're still on track. If all else fails, design students should also automatically have Adobe accounts, and sharing an account can be a good alternative to waiting months for approval if the county is still struggling after a month or two.

## NodeJS (NPM)
To install NPM, you'll need to be on a Windows device. From there, you can open Command Prompt by clicking the Windows key and typing `cmd`. I recommend creating a new folder for your files on your Desktop, then navigating to it in Command Prompt using `cd C:\location` (e.g. mine is C:\Users\staro\OneDrive\Desktop\Development\KYColleges). Then, write `npm install -g npm`.

From there, you'll want to download this GitHub repository and move it into your new folder, then type `npm install` to download its dependencies. If it generates high/severe-risk errors, run `npm audit fix` to attempt to auto-resolve them. This may not fix all errors; if it generates more than it solves, simply run the command again to revert them.

> _NOTE:_ If you are unsure of the location of your new folder, you can right click on it and then select "Copy Address". Paste this into Command Prompt as described above.

To start the project, you can run `npm start`, then open the weblink http://localhost:8081/. The URLs and subpages may be slightly different depending on whether you're operating the beta/main version; you will also need to re-install the dependencies each time you switch between versions in the GitHub.

## GitHub
Once you have the repository installed, you'll likely want to link the GitHub repository to the program in NPM so that you can update it automatically! To do this, I recommend installing [GitHub Desktop](https://github.com/apps/desktop), but you can also use the [Git command prompt](https://git-scm.com/) if you so choose. In terms of GitHub Desktop, once you've logged in, you'll want to fork this repository (Unsure of how? [Check out this link!](https://git-scm.com/)\) so you have a copy you can modify yourself. Then, in the left corner, click "Add" to create a new repository, "Clone Repository", and select your fork from GitHub. **Make sure to change the file location to the same address you installed NPM above.**, and then confirm. Once it's complete, click "Fetch Repository" and, complete any initial commit it asks you to make using the "Commit to XXXX" button on the bottom left.

[To Be Continued...]
