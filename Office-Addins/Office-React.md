# 80-20-Guides

## Office Add-in Development

### using React Framework

Of all the Frontend Frameworks REACT is the first-class citizen for Add-ins because 
1. you can provision a React project using the Yeoman generator
2. natively use the Office UI Frabric which is built from React Components.
3. 



Use Office Yeoman generator (see setup instruction T)ODO)

**>_**
`yo office`

![1a](./img/Office-Add-in-React-2020-10-25%20at%203.28.32%20PM.png

![1b](./img/Office-Add-in-React-2020-10-25%20at%203.42.14%20PM.png)

Choose between Modern TypeScript or ES6+ JavaScript

![1c](./img/Office-Add-in-React-2020-10-25%20at%203.43.09%20PM.png)

Name you app:

![1d](./img/Office-Add-in-React-2020-10-25%20at%203.48.16%20PM.png)


Must call Office.initialize before any code runs.

Office UI Frabric Components are all built with React and having typings for TypeScript.


### Explore the Project

The add-in project that you've created with the Yeoman generator contains sample code for a very basic task pane add-in. If you'd like to explore the key components of your add-in project, open the project in your code editor and review the files listed below. When you're ready to try out your add-in, proceed to the next section.

1. The manifest.xml file in the root directory of the project defines the settings and capabilities of the add-in.
1. The ./src/taskpane/taskpane.html file defines the HTML framework of the task pane, and the files within the ./src/taskpane/components folder define the various parts of the task pane UI.
1. The ./src/taskpane/taskpane.css file contains the CSS that's applied to content in the task pane.
1. The ./src/taskpane/components/App.tsx file contains the Office JavaScript API code that facilitates interaction between the task pane and Excel.

**SECURITY NOTE ON MAC**

Security Cert for Excel Add-in is created when you run `npm run dev-server`

On Windows, run `npm start`



