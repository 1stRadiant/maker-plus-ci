Maker+ Ci (coding interfaces) is a platform built to allow you to code on your mobile faster by using various unique techniques. Maker+ Ci gives you, the developer power over your powerful editor by allowing you to customise or create interfaces for each of the 40 filetypes it recognises. Moreover, M+ Ci allows you create and customise interfaces for each file, which means the difference between interfaces is not just limited to filetypes. This means the number of different interfaces that you can create is ultimately endless which is pretty cool.

What are interfaces exactly and how do I create them?

An interface is an area on Maker+ Ci which contains special keys and buttons (We will call these “Keys” for reference) which can be used to interact with your editor faster, and maybe invoke some JavaScript code.

In order to create an interface you simply create a inft.\<desired extension\> for example inft.html. Then in this document simply add a list of things you would like to appear when an html document is open so these could be html tags and special characters. When satisfied with the list tap on save then refresh Maker+ Ci. Upon refreshing you should now see that all html documents that you open or select from tabs now have the interface you created. On top of that you can also create interfaces for each file meaning the Maker+ Ci will ignore the base inft.html. To create an interface for a file simply create a new file and name it intf\<desired name\>.\<desired extension\> for example intfTest.html. In this file add a list of maybe different html tags and special characters. When you are satisfied with the list simply tap on Save to store your changes. Now simply open Test.html or select it from the currently opened tabs, you should now see that this file has a different interface to even other html files.
Keys that you add in the list can be anything; text, characters or even code. There are built in keys which are pinned methods such as “Copy, Cut, Paste, Codify!, Select all, Select line, Select from here to, Clear line, Undo, Redo, Import, Export, Left, Right” can be added to any list. Any key can have JavaScript code assigned to it so that when the key is tapped it triggers the code. To assign JavaScript code to a Key follow this example; in your inft.\<desired extension\> file add a key or edit one in the list, for example “\<html\> {alert(‘this is an html tag’)}”. You can use built in functions in the Js code that you assign to the keys for example if you would like to write a file upon the trigger of a specific key you can. Here’s a list of functions and methods that you can use in your interfaces:

tk.writeFile(str filename,str content,bool append);

tk.readFile(str filename);

tk.flash(str message);

tk.time();

Also to give you and Idea of what a inft.<extn> or intf<filename>.<extn> list which creates an interface looks like please take a look at the example below:

Codify!

\<html\> {tk.flash("this is an html tag")}

\</html\>

<head>

</head>

<title>

</title>

<script>

</script>

<body>

</body>

<p>

</p>

<div>

</div>

<link rel="stylesheet" href="styles.css">

<script src="filename.js"></script>

<

>

/

Copy

Paste

Cut

Undo

Redo

Sel from here to

Select Line

Select all

Clear Line




So how do I get started with Maker+ Ci?

Heard to this GitHub pages link of Maker+ Ci

Opening or Creating a file:

To open/create a file in Maker+ Ci simply tap on “+”.

Interacting with the editor:

Once created you can edit by typing in the editor, when the editor is focused it becomes smaller in order to to review the interface of keys. When you scroll the editor becomes large in order to allow you to see and analyse the code or text that you are editing better.

Supported code and syntax highlighting:

Maker+ Ci’s editor recognises upto 40 languages, syntax highlights them and indents upon tapping “return”.

Messages from M+Ci:

You’ll also notice that M+ Ci tells you what’s going on and it also tells you which document you are editing. You can see M+ Ci’s messages on top of the editor and tabs.

Saving a file:

Once you are satisfied with your content tap on “Save” to store your changes.

Closing a file:

You can close a file by tapping on the “X” on the top right Maker+ Ci
