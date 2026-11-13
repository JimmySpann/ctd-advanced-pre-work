# CTD Advanced Pre-Work

### Introduction (Why and What is this?)
Site is structured into site tags and element creation factory for component based architecture in vanilla JS.
Site runs on vite. Vite is needed to handle env variables
Site uses "custom site tags" to give a modular, component-like feel to vanilla js.
Components and Sections must be added to their respective root index.js files then added in the main js page to work
Site relies heavily on "factory functions" to streamline element and custom tag creation, to keep code lean and DRY, and to make adding new components faster and easier


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

4. Start the development server:
   ```bash
   npm run start
   ```


### To Do
#### Major:
- [~] Add gallery settings
    - [ ] add proper loading styles
    - [ ] minor settings style improvements
    - [ ] add sort option, default to random
- [ ] Add pagination
- [ ] Add card facts
- [ ] Clean up css
- [ ] Finalize Read me

#### Minor:
- [ ] Figure out whether to keep nav bar or just use a heading
- [ ] Add animation sliding between Cat Gallery and Cat Facts
- [ ] Add click to enhance card feature? (Can probably just transform scale then center for time? (but I'd like an overlay))

### Prework Criteria
#### Structure
- [x] A public GitHub repository containing your project.
- [x] An HTML document for the page.
- [x] A CSS document to style the HTML page.
- [x] A JavaScript file that retrieves data from one of several public API sources to display the data on your HTML page.
- [ ] A README file that includes the instructions for running the webpage.

#### Content
- [x] Display the data for at least 2 of the end-points in the API.
- [ ] Include navigation from each end-point’s page to the other end-points that are displayed.
- [ ] Example: If you choose to use the Weather API, be able to click between a page that shows temperatures and a page that shows conditions. For the Star Wars API, have a page that shows character information and a page that shows film information.
- [ ] Issue new GET requests for the linked data to display in the linked pages.

#### Functionality
- [ ] The code runs without issues and acts accordingly to the instructions in your README file.
- [ ] Navigation between the different end-points behaves properly and is not slowed down by requesting more data than needs to be displayed
- [ ] Code is readable and well structured
- [ ] If including a user-interactive feature like a search field, be sure that you appropriately handle error cases
Be thoughtful about what type of styling is used (example: font-sizes are not too small or large, colors are not too dark/light to be easily seen, etc.)
- [x] Note: For building a front-end application, if you want to use an API that requires an API key, the API key should not be coded in your application logic (source code). It a security risk. Your API key should be stored in an environment variable in an .env file. This requires the use of a build tool like Vite, which programmatically injects the API key during the build process.

### Questionable Decisions/Ways to Improve:
- I spent way too much time trying to build component based framework then getting code block from it for days. I finally decided to scale back the scope to ensure I finish on time.
- I found it difficult to focus on coding and move on once I was stuck with prior mention. So I needed a way to keep me motivated to code instead of infinitely putting it off. I found the following mental exercises to be a huge help:
    1. Write down my values. Why I need to do this, the good that doing this means, and the bad that will come if I don't get it done. I started doing this 3-4 times a day with alarm reminders (though situational triggers like when I sit at my desk is the real goal)
    2. I found myself fighting a lot. I'd fight the urge to quit coding. I'd fight the urge to not get distracted or seek some form of comfort instead. I found out that fighting make things worse. So instead of fighting against what I shouldn't do. I began "surrendering" to what I need to do. When I surrender to what I need to do, I'm no longer fighter to maintain its focus. I'm just in it. Later research shows this has some real psychological studies and implications like ACT (Acceptance and Commitment Therapy) or Backwards Law by Allan Watts. Cool!
    3. Set clear time expectations of how long I will work on it each day, as well as the time frames I should plan to get it done.
