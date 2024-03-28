<!-- Project Info -->
<br>

![GitHub repo size](https://img.shields.io/github/repo-size/Pantonym/Year1_Term1)
![GitHub watchers](https://img.shields.io/github/watchers/Pantonym/Year1_Term1)
![GitHub language count](https://img.shields.io/github/languages/count/Pantonym/Year1_Term1)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Pantonym/Year1_Term1)

<!-- Logo and link to repository -->
<p align="center">
  <a href="https://github.com/Pantonym/Year1_Term1">
    <img src="NicoVanWyk_221179_DV100_T1_Final_Project/assets/icons/logo/stream_logo_black.png" width="200px">
  </a>
</p>

<!-- Short Description -->
<h3 align="center">Stream: Wireframe Task</h3>
<p align="center"> This is a streaming website that was copied from wireframes supplied to the developer.
    <br>
    <!-- Bug and New Feature Links -->
    <a href="https://github.com/Pantonym/Year1_Term1/issues">Report Bug</a>
    <a href="https://github.com/Pantonym/Year1_Term1/issues">Request Feature</a>
    <br>
</p>

<!-- Name and Number -->
<div>
    <h5 align="center" style="padding:0;margin:0;">Nico van Wyk</h5>
    <h5 align="center" style="padding:0;margin:0;">Student Number: 221179</h5>
    <br>
</div>

<!-- Subject and Term -->
<h6 align="center">DV100 | Term 1</h6>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
  - [Mockup](#mockup)
  - [GitHub Pages Link](#github-pages-link)
  - [Project Description](#project-description)
  - [Technologies Used](#technologies-used)
  - [Built With](#built-with)
    - [HTML](#html)
    - [CSS](#css)
    - [Bootstrap](#bootstrap)
    - [jQuery](#jquery)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features and Functionality](#features-and-functionality)
- [Development Process](#development-process)
  - [Architecture](#architecture)
  - [Design Frame](#design-frame)
  - [Solution](#solution)
  - [Theme](#theme)
  - [Development Documents](#development-documents)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Future Implementation](#future-implementation)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
- [License](#license)
- [Authors](#authors)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- About the Project -->
## About the Project

<!-- Mockup -->
### Mockup
To be created
<!-- <img src="/final/mockups/Hero.png" alt="Mockup" style="height: 600px"/> -->

### GitHub Pages Link
[To Index Page](https://pantonym.github.io/Year1_Term1/NicoVanWyk_221179_DV100_T1_Final_Project/root/index.html)

<!--PROJECT DESCRIPTION-->
### Project Description
Stream is a non-functioning website that was built using pre-made wireframes. The challenge was to recreate the output as closely as possible. The project was revisited on 28/04/2024 to update the design, as well as improve the techniques used to design the website. 
### Technologies Used
* HTML
* CSS
* Bootstrap
* jQuery

### Built With
<!-- HTML -->
#### HTML
* HyperText Markup language.
* The basic language of the web.
<p>HTML was used to implement the content of the website.</p>

<!-- CSS -->
#### CSS
* Cascading Style Sheets.
* Styles HTML elements mostly through classes and ID's.
* Has animation functionalities.
* Has hover effect functionalities.
<p>CSS was used to stile the website, as well as the hover effects present on the site.</p>

<!-- Bootstrap -->
#### Bootstrap
* Provides CSS frameworks for the implementation of responsive user experience designs.
* Used to further style the HTML elements of the site to be responsive.
* Uses grid-based layouts consisting of columns and rows.
<p>Bootstrap was used to implement several User Interface (UI) elements, such as cards and tables. It was also used to improve responsive design.</p>

<!-- jQUery -->
#### jQuery
* jQuery is a JavaScript library.
* It was used to generate varying output depending on the contents of the JSON 'database' files. 
* Used to implement functionality similar to that of using a dedicated database to populate items. 
<p>jQuery was used to generate HTML content depending on the contents of the JSON 'database' files. </p>

<!-- GETTING STARTED -->
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
There are no installations required other than the repository itself.

### Installation
Here is how you can clone this repo:

1.  GitHub Desktop </br>
    Enter `https://github.com/Pantonym/Year1_Term1.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/Pantonym/Year1_Term1.git
    ```
Once the project is downloaded, open the `index.html` file. Afterwards, either run using a live server (recommended) or run without debugging (oftentimes does not work due to firewall settings)

<!-- Main Features and Functionality -->
## Features and Functionality
1. Dynamic Content Generation
* Through jQuery, and `$.ajax` call is used to contact the JSON file that is required. Using a `$.each` loop, output is built using the data found in the JSON file, appending each variable with the correct HTML element. Finally, the each newly generated item was appended to the HTML output.
`$.ajax({`
`        url: 'popularAlbums.json',`
`        dataType: 'json',`
`        success: function (data) {`
`            $.each(data, function (index, item) {`
`                var albumItem = $('<div class="col-sm-3"></div>');`
`                var albumImg = $('<div class="album_img"></div>').css('background-image', 'url(' + item.albumImage + ')');`
`                var hoverItems = $('<div class="hover_items"></div>');`
`                var playImg = $('<div class="play_img"></div>').append('<img src="../assets/icons/other/play_icon.svg" alt="">');`
`                var playDiv = $('<div class="play_div"></div>');`
`                var artistName = $('<p class="play_title lora white" style="font-size: 12px;"></p>').text(item.artistName);`
`                var albumTitle = $('<p class="play_text poppins font_18 white"></p>').text(item.albumTitle);`
`                playDiv.append(artistName, albumTitle);`
`                hoverItems.append(playImg, playDiv);`
`                albumImg.append(hoverItems);`
`                albumItem.append(albumImg);`
`                $('#albumRowPopular .row').append(albumItem);`
`            });`
`        }`
`    });`

<!-- Development PROCESS -->
## Development Process
### Architecture
The application consists of multiple HTML pages. It communicates with JSON files to receive information. `AJAX` was used to contact the files. Google Font links wer also used, meaning the font files were deleted to save space on the repository.
### Design Frame
The design frame was not generated as the wireframes were supplied to the developer.
### Solution
With no design frame, a solution could not be generated.
### Theme
While the original theme was supplied, it was changed when I returned to update the project. I changed the navigation bar to be more suiting and applicable to standard practices, as well as changing the background to be a complementary colour to the main theme.

### Development Documents
<!-- Wireframes -->
* As the wireframes were supplied in Year 1, during early 2022, I no longer have access to the original wireframes.

<!-- Highlights -->
#### Highlights
* Updating the html and css to be both more readable and more intuitive was a big highlight.
* Finding a way to generate dynamic content was another part of the project that was interesting to tackle. 
* Implementing Bootstrap in stead of fixed values was a big relief as the fixed values were bad practice.

<!-- Challenges -->
<!-- Explain the challenges faced with the project and why you think you faced it or how you think you'll solve it (if not solved), or how you solved it -->
#### Challenges
* A great challenge was figuring out how to improve the content, as many of the elements were so dependant on one another that the pages had to be rebuilt entirely. 
* Creating dynamic content using jQuery was challenging, but with the help fo research it was manageable. 

<!-- Future Implementation -->
### Future Implementation
* Implement dynamic functionality to the playlist page.
* Introduce Like functionality.
* Make the website completely responsive for mobile devices.

<!-- Final Outcome -->
## Final Outcome
<!-- MOCKUPS -->
### Mockups
To Be Made
<!-- <img src="/final/mockups/Hero.png" alt="Mockup" style="height: 600px"/>
<img src="/final/mockups/Profile.png" alt="Mockup" style="height: 600px"/>
<img src="/final/mockups/QuestionsHome.png" alt="Mockup" style="height: 600px"/>
<img src="/final/mockups/Question.png" alt="Mockup" style="height: 600px"/> -->

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE` for more information.

<!-- AUTHORS -->
## Authors
* **Nico van Wyk** - [Github](https://github.com/Pantonym)

<!-- Contact -->
## Contact
**Nico van Wyk** - [221179@virtualwindow.co.za](mailto:221179@virtualwindow.co.za)

* **Project Link** - https://github.com/Pantonym/Year1_Term1

<!-- ACKNOWLEDGEMENTS -->
<!-- all resources that you used and Acknowledgements here -->
## Acknowledgements
* [Figma](https://www.figma.com/)
* [W3Schools](https://www.w3schools.com)