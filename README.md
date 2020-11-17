# Cypress-test
The features that have been tested:

- “How can we help you” part.
- WhatsApp Button.
- Page Up button.
- “Projects for example”.
- “Some of our customers” part.
- Thanks page (after send personal details for contacting).
- Links (links for WhatsApp, linkedIn, HEROLO official site, Facebook).

*The test does not cover the system from end to end.
A number of features have been selected, and their suites can also be Expanded to include
more cases and tests.

*I wrote one of the tests(“How can we help you” part)according to Page Object Model (Design
Pattern) the test divided for 2 parts.

*The rest of the tests reflect the use of "App Actions" instead of "Page Objects", as it is
sometimes anti-pattern in the use of "Cypress".

*The tests were written in cypress (I checked with the HR, and got permission to use it).

*Small bug I found: The name field can be sent with an empty string entry (keyboard space)the existing validation is not enough.

**“How can we help you?” part**

a. Verifying the bar is not displayed when scrolling to the bottom of the page.

b. Trying to submit a request with non-valid values and verify errors.

c. Submitting a request and verifying the end of the process.

Send button:
Error message appears under the field as long as the value is not valid.


Send button is clickable anytime but the send will happen only if all the values are valid.

The fields in “Personal details for help”:
contains 3 fields(name, email, phone num)

Fields validation:

Error message appears under the field as long as the value is not valid.

Send button is clickable anytime but the send will happen only if all the values are valid.

**Page Up button**

Verify "Back Up button functionality":

a. Displayed after scrolling down the page.

b. Scroll's up the user to the head of the page when clicking it.

c. After scroll, the Page Up button will disappear.

**Projects for example**

Move to specific page :
There are direct links under the pictures of the projects as points. clicking on some point move
the user to the appropriate page

Basic WebElements verifications including links, texts, and other elements.

**Our customers**

Move to specific page:

There are direct links under the pictures of the projects as points. clicking on some point move
the user to the appropriate page

Basic WebElements verifications including links, texts, and other elements.

**Links (links for WhatsApp, linkedIn, HEROLO official site, Facebook)**

Clicking on the links:

Clicking on the links will move the user to the official site/page at the appropriate platform

Place of the links :


At the bottom of the page on the left will appear 4 links: WhatsApp, linkedIn HEROLO official
site and Facebook.

Basic WebElements verifications including links, texts, and other elements.

**Thank you page**

When the user move to Thank you page:

The user move to Thank you page when he send his personal details on (“how can we help you”
section).

Buttons on Thank you page:

There are 2 buttons on the page: Back - move the user to previous page, Go to the site - move
to the official HEROLO site

Links on Thank you page :

There are 3 links: Facebook, Instagram, LinkedIn

Clicking on the links :

Clicking on the links move the user to the official page at the appropriate platform.

