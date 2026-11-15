# CTD Advanced Pre-Work

### Introduction
Built for **Code The Dream**, this project is a dynamic single-page application that lets users search and explore pet images and breed data via The Dog API and The Cat API. 

Rather than relying on a traditional frontend framework, this application showcases advanced **vanilla JavaScript architecture**, implementing a custom component-based system using native Web Components/custom site tags and reusable element factory functions.

#### Key Features & Architecture
- **Pet & Breed Search:** Real-time data fetching and filtering using The Dog API and The Cat API.
- **Vanilla Component Framework:** Custom site tags and element creation factory functions that keep code DRY, lean, and modular.
- **Vite Build System:** Configured for secure environment variable handling.
- **Developer Workflow:** Components and sections are registered through centralized root index files to streamline custom tag integration.

### Setup & Installation
Follow these steps to get the project up and running locally on your machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/JimmySpann/ctd-advanced-pre-work.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ctd-advanced-pre-work
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Add api keys to a .env

5. Start the development server:
   ```bash
   npm run start
   ```


### To Do
#### Major:
- [x] Add gallery settings
    - [x] add sort option, default to random
- [x] Add pagination
- [x] Add dogs page (since cat facts and health tips hide behind a pay wall)
- [x] Clean up css
    - [x] Add proper loading styles
- [~] Finalize Read me
   - [x] Properly lay out intro

#### Minor:
- [ ] Add dynamic urls (Only for switching between cats and dogs) - Maybe next time
- [x] Replace nav bar with a plain header
- [x] Add animation sliding between Pet Gallery and Dog Gallery
- [x] Add click to enhance card feature? (Can probably just transform scale then center for time? (but I'd like an overlay))

### Prework Criteria
#### Structure
- [x] A public GitHub repository containing your project.
- [x] An HTML document for the page.
- [x] A CSS document to style the HTML page.
- [x] A JavaScript file that retrieves data from one of several public API sources to display the data on your HTML page.
- [x] A README file that includes the instructions for running the webpage.

#### Content
- [x] Display the data for at least 2 of the end-points in the API.
- [x] Include navigation from each end-point’s page to the other end-points that are displayed.
- [x] Example: If you choose to use the Weather API, be able to click between a page that shows temperatures and a page that shows conditions. For the Star Wars API, have a page that shows character information and a page that shows film information. 
- [x] Issue new GET requests for the linked data to display in the linked pages.

#### Functionality
- [x] The code runs without issues and acts accordingly to the instructions in your README file.
- [x] Navigation between the different end-points behaves properly and is not slowed down by requesting more data than needs to be displayed **(A slight caveat with the double gallery panes)**
- [x] Code is readable and well structured
- [x] If including a user-interactive feature like a search field, be sure that you appropriately handle error cases
Be thoughtful about what type of styling is used (example: font-sizes are not too small or large, colors are not too dark/light to be easily seen, etc.)
- [x] Note: For building a front-end application, if you want to use an API that requires an API key, the API key should not be coded in your application logic (source code). It a security risk. Your API key should be stored in an environment variable in an .env file. This requires the use of a build tool like Vite, which programmatically injects the API key during the build process.

### Questionable Decisions/Ways to Improve:
- I spent way too much time trying to build component based framework then getting code block from it for days. I finally decided to scale back the scope to ensure I finish on time.
- I almost passed user/api generated data into an htmlString then use innerHTML to render it... This would've created a Cross-Site Scripting vulnerability. Now I use the DOM parser to parse the html and just add user data through DOM query manipulation for better safety practices.
- I found it difficult to focus on coding and move on once I was stuck with prior mention. So I needed a way to keep me motivated to code instead of infinitely putting it off. I realized I was constantly fighting. Fighting to get myself to code. Fighting to not get distracted. When I realized I was exhuasting myself, I started to just "lean in to" or "surrender" to the work. This helped tremendously.
- I planned to use "facts" or "health-tips" endpoints early on, then found out they were locked behind a pay wall.. Had to pivot and made the default sort random so the descriptions on images didn't all appear the same. Planning to clone the cat gallery for the dog api to reach the multi-page, multi-endpoint criteria quickly.
- Getting the card to display full screen using z-index and transform was buggy. Next time, I would use a dedicated modal card
- I feel a bit clueless with the design. Design and proper css is something I'll want ot improve on.