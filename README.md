# FakeOS: Windows 98

This is a fake desktop operating system inspired by Windows 98.

## How To Use

This app should be viewed on a desktop sized screen to get the best experience

### Start Menu

To show a non-functional start menu featuring icons and hover effects, clicking the start button in the bottom left corner.

When the start menu opens, the start button styling will update to show that it has been clicked. If an app modal is open, it will close.

To hide the menu and restore the start button to its original state, click the start button again.

### Time

The clock in the bottom right corner shows the local time in Melbourne. While using 24-time makes the AM/PM label redundant, the label has been included to reference the Windows 98 reference image.

### App Modals

To open an app, click on its corresponding button in the top left corner. Unlike in the real Window 98 OS, the app buttons have been styled with grey backgrounds, borders and navy text to make them stand out from the background image.

The app will open in a modal. When this happens, any already opened app modal will close. The start menu will hide if it's showing.

To close an app, click the x button in its top right corner.

## App Functionality

### Greetings

When Greetings is opened, it selects and displays a random greeting. The options are "Hello there!" (yes, that's a Star Wars prequel reference), "Bonjour!", "¡Hola!", "Guten Tag!", "Hey, how are you going?", "G'day mate!", "Hi, what's up?" and "Howdy there, partner!". A new greeting is selected at random each time the app is closed and reopened.

### Number Guess

When Number Guess is opened (or restarted), it selects a number between 1 and 100. To guess the number, enter a value in the input and click the submit button. Non-numerical inputs or inputs outside of the 1 - 100 range will not be accepted.

A message will be displayed stating whether the number selected was the correct number, a number that's too high or a number that's too low. The correct number will remain the same until the game ends.

The game allows for six guesses. The number of guesses remainining is displayed in the app. When it reaches 0, the game is over. A message will be displayed along with the correct number and the submit button will be replaced with a restart button.

To play again with a new target number, click the restart button or close and reopen the app.

### Image Gallery

The Image Gallery app elegantly displays a grid of attractive seasonal images.

## Technologies Used

- HTML (including semantic elements and BEM class naming conventions)
- CSS (including using flexbox and CSS grid)
- SCSS (including the use of variables, mixins and modules)
- JavaScript (including the use of modules)
- Git Version Control (including the creation of a develop branch)
