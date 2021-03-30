# Steps taken to customize the auto generated files
* *npx create-react-app client*
    * This creates a reactjs app named "client"
* Developing the client code
    * Define a custom component as "client\src\components\Contacts.js" with a simple text message.
        * Create a sub folder "components" under main "src" folder and create a js file "Components.js" there
    * Modify the file "client\src\Appjs" to use our custom component.
        * Change the return statement inside the  "div" tag of App.js
	    * Clear the contents inside &lt;div classname="App"&gt;
		* Add "&lt;Contacts /&gt;" component there inside "div".
    * Now when we do "npm start" from the "client" folder, our messgae should come in a broswer.
