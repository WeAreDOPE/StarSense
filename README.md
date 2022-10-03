# StarSense

## Global variables

In the **_config.yml** there are some variables that you shoud change for every landing page you deploy. Jekyll has some global variables here but you can leave them as is.
- **title:** The site title. It is used to generate the head -> title attr **eg: FactorySense - Home**
- **baseurl:** Leave it blank unless you plan to host the page from a subdir **ex: yourdomain.com/subdir**.
- **url:** Your domain **https://yourdomain.com**.
- **logo:** The main logo of the page.
- **logoAlt:** The alt text attribute you want the logo image to have.
- **starSenseLogo:** Your brand logo (It should be the same on all of your landing pages).
- **starSenseLogoAlt:** The alt text attribute you want your brand logo image to have.
- **menuLogo:** The logo for the menu (Menu bar, top mobile bar, opened menu).
- **menuLogoAlt:** The alt attribute for the menu logo.
- **mainColor:** The primary color of the page. (Content background, some buttons etc).
- **secondaryColor:** The secondary color of the page (Menu bar, Opened menu background, some buttons etc).
- **ogImage:** The og image. It is the same for the entire page.
- **ogImageAlt:** The alt attr of the og image
- **formAction:** The target url of the form (Replace it with your own from un-statick, mailchimp etc)
- **recapchaSiteKey:** The site key for the reCaptcha. **You must create one at https://www.google.com/u/1/recaptcha/admin/create and replace it** If you use unstatic you place the **secret key of the reCaptcha there**

## Menu items

Every menu item must be in the folder pages with the layout **landing**. The files contain all the variables with comments.
- **layout:** The layout for the menu **It must be landing or hidden (If you want to exclude for the menu)**.
- **title:** It serves as alt attribute for the logo image.
- **logo:** The image of the menu item.
- **targetUrl:** The target url (Your other landing pages).
- **order:** The menu order.
- **hoverColor** The hover color of the menu item (Maybe you want to match it with the primary or secondary color of its landing page).

## Footer

The footer menu is generated dynamically from pages with the layout page. These pages are in the root directory and you can create as many as you want. These pages also have variables.
- **layout:** Set it to page to show this page on the footer menu, set to to hidden to hide it.
- **title:** The title of the page. (Not displayed in any heading tags, it is displayed in the breadcrumb and head -> title).
- **description:** It is used in the meta-description tag and og:image description. Change it with your own.
- **permalink:** The url of the page.
- **order:** The order of the page in the footer menu.

## Index page
The index page has a different layout from all other pages **Index** **don't change this layout.**. In the markdown file are some variables for the page.
- **title:** Leave it to home. It is used in the head -> title attr.
- **description:** It is used in the meta-description tag and og:image description. Change it with your own.
- **h1:** The heading above the form
- **bgImage:** You must change this in every landing page you deploy. **Make sure to use 1920 x 1080 or higher images with sufficient compression (not more than 400kb) for overall pageSpeed**

## Dynamic styles
All the dynamic styles are generated in the file **_includes/styles.html** which is imported in the header.html in the same dir. The header is included in every page. **styles.html** uses variables to define global site colors according to the site's branding. These variables may be changed in **_config.yml**. At the _includes folder you can also find the menu-bar.html, the menu.html, the footer.html and the breadcrumb.html. If you want to change css rules all the css are in the **_sass** folder in the **main.scss**