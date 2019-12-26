# Ember Code Snippet Tutorial

## Running Locally

This is an Ember app, so the usual steps follow:

1. Fork and clone this repo.
    ```bash
    git clone git@github.com:<your GitHub handle>/ember-octane-vs-classic-cheat-sheet.git
    ```
1. Change directory.
    ```bash
    cd ember-octane-vs-classic-cheat-sheet
    ```
1. Install packages.
    ```bash
    npm install
    ```
1. Run the app.
    ```bash
    ember serve
    ```
1. Visit your app at [http://localhost:4200](http://localhost:4200).


## How It's Made

### 1. Model hook

First, have a look at `app/routes/application.js`.

The `model` hook returns an array of `section` objects. Each section can further define an array of `subsection` objects.

**We use sections and subsections to organize this guide.**

### 2. Ember Intl

Next, we want to explain to the reader what a section or subsection is about.

We store titles and descriptions in `translations/en-us.yaml`. A description can contain HTML elements like hyperlinks.

**The translation keys match the section and subsection IDs.**

### 3. Ember Code Snippet

Finally, we want to show code examples to the reader.

We store code snippets in `snippets` folder. Afterwards, we update the `model` hook by listing the files.

**Subfolder names match the subsection IDs.**


## How It's Made (Recap)

You can find the text in `translations/en-us.yaml`, the code in `snippets`, and the app structure in `app/routes/application.js`! 💖