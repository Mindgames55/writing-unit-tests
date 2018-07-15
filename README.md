# Project Overview

This project is focused on writing tests against the feedreader app. All tests can be found in the **feedreader.js** file inside the `jasmine/Spec` folder .

# Dependencies

It uses the behavior-driven development framework [Jasmine](http://jasmine.github.io/), to test the app's JavaScript code. It is already included on the jasmine folder.

# Unit tests
###RSS Feeds
  ####Tests
  1. **Feeds are defined**   This test ensures that the `allFeeds` variable has been defined and that it is not empty.
  2. **Feeds url-property are defined**
  Loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
  3. **Feeds name-property are defined**
  Loops through each feed in the `allFeeds` object and ensures it has a name defined and that the URL is not empty.

### The menu
  #### Tests
  1. **Menu is hidden by default**
   Ensures the menu element is hidden by default. It should have the attribute `class='menu-hidden'`, which
   is off screen per the CSS file.
  2. **Menu changes visibility on click**
   Ensures the menu changes visibility when the menu icon is clicked, ensuring the body element toggles `'menu-hidden'` class on click.

###Initial entries
  ####Tests
  1. **Feed contains entries** Ensures when the `loadFeed` function is called and completes its work (asynchronous function), there is at least a single `.entry` element within the `.feed` container.
###New Feed Selection
  ####Tests
  1. **New Feed Selection**
  Ensures when a new feed is loaded (on menu-links click events)
 by the `loadFeed` function that the content actually changes.
