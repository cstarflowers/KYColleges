# Publishing (GitHub)
When you've made changes that you'd like to publish, you should be able to publish the new version of the app on your fork of this GitHub repository! If you have not yet created a fork of the repo, please check out the Prequisites README file for a brief tutorial!

## Branches
Before making a change to the main branch of the repository, it's best to publish your change in a secondary branch so that it can later be reverted if it ends up destroying your program. For this repository, that branch is typically the /beta/, though you're always welcome to [create another one](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) if you need additional back-ups.

When you change branches in the GitHub desktop app, provided that you have your folder set to the same one that you installed NodeJS, the commands you run in command prompt will also update to their respective versions. If you recieve an error that Node is not installed or that it's missing dependencies when running `npm start`, you may have these branches set-up incorrectly.
> NOTE: If you are notified that Expo or React is not recognized and *you are certain your repository is updating correctly*, run `npm install` again to refresh the dependencies. This may also require you to then run `npm audit fix` if there's a large number of vulnerabilities.

## Reversions
If you need to revert a change you've recently made, you can navigate to the "History" tab and right click to access the shortcuts menu (see image [here](https://i.imgur.com/QljdXpj.png)\). Then, you can choose to amend, reorder, revert, or branch out the commit (among others)! The most crucial of these functions here is the "Revert changes in commit" and "Create branch from commit", which will revert the branch back to its previous version (and optionally move the new code somewhere else).

Likewise, "amend" will also temporarily revert the changes made in your commit so that you can make any addendums or modifications in the "Changes" tab before committing again; additional documentation on each of these functions can easily be found on the [GitHub Desktop Website](https://github.com/apps/desktop).
