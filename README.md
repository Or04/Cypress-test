# Cypress-test
The features that have been tested:

- How can we help you part.
- WhatsApp button.
- Page Up button.
- Projects for example.
- Some of our customers part.
- Thanks page (after sending personal details for contacting).
- Links (links for WhatsApp, linkedIn, HEROLO official site, Facebook).

*The tests does not cover the system from end to end.
A number of features have been selected, and their "suites" can also be expanded to include
more cases and tests.

*I wrote one of the tests (How can we help you part) according to "page object model" (design
pattern) the test is divided for 2 parts.

*The rest of the tests reflect the use of "app actions" instead of "page objects", as it is
sometimes anti-pattern in the use of "Cypress.io".

*The tests were written in "Cypress.io".

*A bug I found: The name field can be sent with an empty string entry (keyboard space), the existing validation is not enough.

**How can we help you part**

a. Verifying the bar is not displayed when scrolling to the bottom of the page.

b. Trying to submit a request with non-valid values and verify errors.

c. Submitting a request and verifying the end of the process.

Send button:
Error message appears under the field as long as the value is not valid.
Send button is clickable at anytime but the send will happen only if all the values are valid.

The fields in Personal details for help:
contains 3 fields (name, email, phone no.)

Fields validation:
Error message appears under the field as long as the value is not valid.
Send button is clickable anytime but the send will happen only if all the values are valid.

**Page Up button**

Verify Back Up button functionality:

a. Displayed after scrolling down the page.

b. When clicking the button user is being scroll up to the head of the page.

c. After scroll, the Page Up button will disappear.

**Projects for example**
Move to specific page:

a.There are direct links under the pictures of the projects as points.

b.Clicking on some point move the user to the appropriate page.

c.Basic WebElements verifications including links, texts, and other elements.

**Our customers**

Move to specific page:

a.There are direct links under the pictures of the projects as points.

b.Clicking on some point move the user to the appropriate page.

c.Basic WebElements verifications including links, texts, and other elements.

**Links (links for WhatsApp, LinkedIn, HEROLO official site, Facebook)**

Clicking on the links:

Clicking on the links will move the user to the official site/page at the appropriate platform.

Place of the links:

At the bottom of the page there are 4 links: WhatsApp, LinkedIn HEROLO official
site and Facebook.

Basic WebElements verifications including links, texts, and other elements.

**Thank you page**

When is the user being directed to thank you page:

The user is directed to thank you page when submeting personal details on how can we help you section.

Buttons on thank you page:

There are 2 buttons on the page
Back - the user is directed the user to previous page.
Go to the site - the user is directed to the official HEROLO site.

Links on Thank you page :

There are 3 links: Facebook, Instagram, LinkedIn

Clicking on the links :

Clicking on the links directs the user to the official page at the appropriate platform.

