# NoteTaker Application - NoteMaster 

## Description

The **NoteMaster** application lets the user navigate through two page. The **Home** page and the **Notes** page. The user is able to create notes by first giving the note a title, writing some text in the note section, and clicking the **save** button.
After creating notes, the user interface will render a list of the previously created notes on the left side. Clicking older notes will bring them up to focus on the ***new notes*** section of the app. Clicking the **trash** icon on the recently created section will **Delete** the note. Clicking the **Pencil** icon on the top right of the app will clear out the notes section to allow the user to start fresh with a new note. 

## Purpose

The main goal of this project was for practicing the use of node.js and npm packages to create and communicate between the server (_backend_) and the application's interface (_frontend_). It served well for learning how to organize _modularized_ code into a more conventional sorting method to increase code accessibilty and readability. 

This app serves the average user that wants a way to track information. Its a simple application that lets the user take notes and to have that information available when it is needed.



## Versions

_current version:_ **1.0.0**
    


## Table of Contents

* [Description](#description)
* [Purpose](#purpose)
* [Versions](#versions)
* [Technologies](#technologies)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Technologies:

The technologies used to create this web application are as follows:

- HTML
- CSS
- Bootstrap CSS framework
- JavaScript
- jQuery
- AJAX
- Node.js
- JSON
- Express
- Node Package Manager
- GitHub
- Heroku
- Google (of course)

## Usage 

Note Taker application is very simple to use.

1. Home page before going to notes section. Click on the ***Get Started*** button to enter the **note** section.
[Home](./public/assets/images/NTHome.png)

2. Note page where you will take, save, and delete notes.
[Notes](./public/assets/images/NTNotes.png)
-   The ***Note Taker*** link on the top left of the screen will navigate the user back to the Home Page.
-   There is a header to input the title of the user's new note
-   Below that is the textarea for the user's note.
-   The left side houses previous notes created by the user.

3. After writing out the title, and including text in the note section, the ***save*** icon will appear on the top right of the screen. Clicking this will save the user's note and display the title on the left side of the page.
-   Clicking the title that is in the left side will repend the notes onto the note section of the page.
[Display](./public/assets/images/NTNote1.png)

4. This image points out some of the functionalities in the application and the different sections included. The home link, the note area's sections, the trash icon, and the new note icon.
[Instructions](./public/assets/images/NTInstruction.jpg)

5. The ***Save*** icon
[Save](./public/assets/images/NTSave.jpg) [OldNotes](./public/assets/images/NTOldnotes.png)
- The save button, once clicked, the information is sent to a JSON file. The call is sent to the server, where the server pushes the information to the JSON file to be housed as an object. The object is then called in to be appended into the HTML using Express node.js.

6. The ***Trash*** icon
[Trash](./public/assets/images/NTTrash.png)
- The trash button , when clicked, will get the server to push into the api (JSON) file and re asign the object. The elements in the object will be targeted based on its id. Once the chosen information is deleted, the existing elements in the object will get re asigned a new id and the information is the re appended into the notes section of the application


[Adrian'sGithub](https://github.com/adrianromero13)
[Application-Heroku](https://notesmaster.herokuapp.com/)




## Credits

* Collaborators:    
    - **[Adrianromero13](http://github.com/adrianromero13)**
    - **[Armande925](http://github.com/armande925)**
    - **[Markmesina](https://github.com/markmesina)**
    - **[Markyounan11](https://github.com/markyounan11)**

* UC Berkeley, Extensions Full Stack Development BootCamp Instructors & Assistants
    - Manny Jucaban
    - Musa Akbari
    - Amanda Crawford

* Google inc.           **[Google](https://www.google.com)**
* NPM Registry          **[NMP](https://docs.npmjs.com/)**
* Express Framework     **[Express()](https://expressjs.com/en/api.html/)**
* GitHub                **[GitHub](https://github.com/)**
* Herok                 **[Heroku](https://dashboard.heroku.com)**
    
    



## License

[GNU General Public License v3.0](./LICENSE.txt)




## Contributing


[Contributor Covenant](https://www.contributor-covenant.org/)


---
Adrian Romero 2020 NoteTaker Assignment

