# Project Overview

This project is based on using [Jasmine](http://jasmine.github.io/), a Javascript testing framework, to write some tests for an RSS feed reader application, in order to ensure that it perform correctly.


# Tests for the RSS feed reader

The following tests were written:

- A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- A test suite named `"The menu"`.
- A test that ensures the menu element is hidden by default.
- A test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: if the menu displays when clicked and if it hides when clicked again.
- A test suite named `"Initial Entries"`.
- A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- A test suite named `"New Feed Selection"`.
- A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
 
 Some tests use a callback function (`loadFeed`) to ensure that feeds are loaded before they are tested.

# How to run

Clone the repository and run index.html. 
The tests were written on Chrome, so it's advisable to run it on Chrome.
The test results are shown in the bottom of the page.