# Prototyping (NodeJS)
If you haven't yet setup NodeJS, please read about the prerequisites in further depth in the Prerequisites README file. Once you have it properly installed (and the NPM dependencies downloaded), return here for information about using Expo and ReactJS to turn your code into a functioning web prototype!

## Generating
Web prototypes are hosted on localhost ports 3000 and 8081 by default (http://localhost), and can be run using the `npm start` command once you've navigated to the correct folder on your computer. For both the /beta/ and /main/ branches, the APIs they call to start the software will differ so there will be some visual and usage differences; make sure you know which you're running before you begin working.
> NOTE: For advice on what to do if `npm start` fails to run, please see the GitHub "Branches" README. Typically, this can be resolved by running `npm install` and ensuring that your files are updating correctly when changing branches... but additional measures may also need to be taken depending on what happened to the repository before this error occurred.

### Expo-Router (/Main/)
After running `npm start`, you should be greeted with a large QR code and a short list of keyboard commands letting you know how to modify your web prototype. By default, it'll be waiting for you on port 8081, which can be opened using the "W" key on your keyboard or by navigating to http://localhost:8081 in a web browser like Google Chrome. It will update automatically if you make any changes to the code while the prototype is running, but you can also tap "R" to refresh it manually.
> NOTE: If you modify or install another dependency while the app is running, it will produce an error and close the web prototype. You will need to run `npm start` to refresh it once the dependency has been properly installed.

Similarly, you're also free to use any of the other shortcuts as you please, such as SHIFT + "M" to view additional commands or "O" to open the repository in VSCode. I do not recommend using the "S" or "A" functions due to their dependency on older programs like Android Studio and Expo Go.

### React-Router (/Beta/)
Once you switch the branch to the /beta/ in GitHub Desktop, restart command prompt then run `npm start` in the NPM repository. Once you change the branches, you may also need to run `npm install` again to switch the dependencies out from those you installed on the /main/ branch. Again, if you run into any immediate errors, `npm audit fix` should also resolve any dependency conflicts originating from your change in versions.

From there, there's not a lot of functionality in the React-Router prototype editor compared to Expo, but you are able to access the web prototype on http://localhost:3000 (localhost, port 3000). It also typically encourages you to create an official production build, but it's not required unless you're concerned about your prototype running particularly slowly. If you need to restart it, you'll also more than likely want to close and re-open command prompt.
