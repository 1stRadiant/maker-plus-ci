  
//  if(typeof tk !== "undefined" && tk !== null) {

var fileSystem = JSON.parse(localStorage.getItem('fileSystem'));


var flashArray = []
 
var ii =1;

//alert("starting...")

tk = {
readFile: function(f){
return fileSystem[f]
},

writeFile: function(f,c,a){
if(a){
fileSystem[f] = fileSystem[f]+"\n"+c 
return;
}
fileSystem[f] = c 
},

flash: function(t){
flashArray.push(t)
toFlash(t)
},
 
ReadFromAssets: function(f){
 return fileSystem[f]
},
global: function(t){
return fileSystem.variables[t]
},
setGlobal: function(t,s){
alert(s)
fileSystem.varables[t] = s
}


}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}



function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

var buttonElm = document.getElementById("stateofbeing");

var ccount = 0
var oldText, i

async function toFlash(f) {

for(var i = 0; i < flashArray.length; i++){
await delay(800);
buttonElm.textContent = flashArray[flashArray.length]
await delay(800);
buttonElm.textContent = flashArray[i]
}
 
/*
if(ccount == 1){
await delay(1000);
buttonElm.textContent = flashArray[1]


 }

if(ccount == 2){
await delay(1000);
buttonElm.textContent = flashArray[2]
ccount = -1


 }

*/


oldText = buttonElm.textContent
ccount = ccount+1
await delay(1000);
flashArray = []


}

async function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {


    // The file's text will be printed here
   fileSystem = JSON.parse(e.target.result);
  };

  reader.readAsText(file); 


/*for ( var property in fileSystem ) {
  tk.writeFile('filelist.txt',property+"\n",true); // Outputs: foo, fiz or fiz, foo
}*/
await delay(500)
var r = tk.readFile("filelist.txt");
r = r.split("\n");
//tk.flash(newText);

//ii = r.length - 1;

for (var i = 0; i < r.length; i++) {
if(r[i].includes(".")){
var btn = document.createElement("button");
var t = document.createTextNode(r[i]);
document.getElementById('slide-1').appendChild(btn);

var filename = r[i].replace(/^.*[\\\/]/, '')
btn.textContent = filename;
btn.setAttribute("id", r[i]);
btn.setAttribute("class", r[i]);
tk.flash(i)
//var textarea = document.getElementById("ta");

var toLoad = r[i];
btn.setAttribute("onclick", "tk.writeFile('Current.txt\','"+toLoad+"\',false); tk.flash('"+toLoad+"'); detectMode(); editor.setValue('"+toLoad+"\'); editor.setValue(tk.readFile('"+toLoad+"\'));");

detectMode()
//btn.setAttribute("onclick","alert('gets here');");
ii = i+1;
}
}

localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
}



tk.flash('Welcome to Maker+ Js')




var editor = ace.edit("editor");
//var obj = JSON.parse(tk.readFile('makerst.txt'))
//editor.setOptions(obj)
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setUseWorker(true);
    editor.getSession().on("changeAnnotation", function(){

    var annot = editor.getSession().getAnnotations();
    for (var key in annot){
    if(annot.hasOwnProperty(key)){
    //tk.flash(annot[key].text)
    }
    }
    })
    var Range = require("ace/range").Range;



var e = document.getElementById('parent');
var edt = document.getElementById('editor');
let lock = false;






var objList = objR;
var list =  [",","\"","=",".",";","%","(",")",":","_","{\n","}","@","var","$","/","//","/*","*/","\\","<=",">=","=","'","\|\|","\|","?","-","<",">","\+\+","+","()","[]","!","#","&","*","function ","if","for","Clear Line","Select Line","Select all","Sel from here to","Paste","Copy","Cut","Undo","Redo","Codify!","Link Ai","Voice","Left","Right","Export","Import"];



//tk.flash(aliases)
//eval(tk.readFile("config.js"))
var aliases = aliases2
var as
if(aliases){
as = aliases.split("\n");
}

let settingPoints
var link
var currline, inpuT
var files = [];
var editor;
var extention;
var startPos;
var endPos;
var mode;
var ex = "javascript";
var ta = document.getElementById('ta');
let nP;
let currentLineText;
let column;
let store;
quickKey = false;
var input2;
//var sessionFromJSON = {}, sessionToJSON = {}


var slides = document.getElementById('slides');



function printBtn(){
//lowSlide

for (var i = 0; i < as.length; i++) {
var btn = document.createElement("button");
var t = document.createTextNode(as[i]);
document.getElementById('lowSlide').appendChild(btn);

btn.textContent = as[i];
btn.setAttribute("id", "as"+i);
btn.setAttribute("class", "as"+i);
//var textarea = document.getElementById("ta");

var toLoad = "as"+i;
btn.setAttribute("onclick", "newText = document.getElementById(this.id).textContent; alias(); ");
//btn.setAttribute("onclick","alert('gets here');");
//ii = i+1;
}

//upperSlide
for (var i = 0; i < list.length; i++) {
var btn = document.createElement("button");
var t = document.createTextNode(list [i]);
document.getElementById('card21').appendChild(btn);
btn.textContent = list [i];
btn.setAttribute("id", "bttn"+i);
var textarea = document.getElementById("ta");

var toLoad = list[i];
btn.setAttribute("onclick", "newText = document.getElementById(this.id).textContent; quickKey = true; func(); if(!newText.includes('Select Line') && !newText.includes('Select all') && !newText.includes('Undo') && !newText.includes('Redo') && !newText.includes('Copy') && !newText.includes('Cut') && !newText.includes('Sel from here to') && !newText.includes('Codify!') && !newText.includes('Voice') && !newText.includes('Left') && !newText.includes('Right') && !newText.includes('Export') && !newText.includes('Import') && !newText.includes('Link Ai')){editor.insert(newText); editor.focus();} ");
//var bttn = document.getElementById("bttn");
//bttn.onclick = function() { setTextTo(this);};
}

var r = tk.readFile("filelist.txt");
//tk.flash ("this far");
r = r.split("\n");
//tk.flash(newText);

for (var i = ii; i < r.length; i++) {
if(r[i].includes(".")){
var btn = document.createElement("button");
var t = document.createTextNode(r[i]);
document.getElementById('slide-1').appendChild(btn);

var filename = r[i].replace(/^.*[\\\/]/, '')
btn.textContent = filename;
btn.setAttribute("id", r[i]);
btn.setAttribute("class", r[i]);
//var textarea = document.getElementById("ta");

var toLoad = r[i];

btn.setAttribute("onclick", "tk.writeFile('Current.txt\','"+toLoad+"\',false); tk.flash('"+toLoad+"'); detectMode(); editor.setValue('"+toLoad+"\'); editor.setValue(tk.readFile('"+toLoad+"\'));");

//btn.setAttribute("onclick","alert('gets here');");
ii = i+1;
}

}
var current = tk.readFile("Current.txt")
if(r.length > 1){

current = current.split("\n")
var read = tk.readFile(current[0]);
if (read!="undefined"){
	//ta.value = read;
editor.setValue(read);
}else{
guide();
tk.flash('Guide')
}
}




var mdata = tk.readFile("mdata.txt")
var read = tk.readFile(current[0]+'data.txt');
editor.gotoLine(Number(read)+1);
editor.selection.selectLine();

if(r.length>0){
ii = r.length;
//ii = ii+1;
}

}

/*startPos = editor.selectionStart; endPos = editor.selectionEnd; newText = document.getElementById(this.id).textContent; func(); selected = newText; editor.focus(); editor.setRangeText(newText, startPos, endPos, 'end');*/

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}


function replaceLine(str){
return str.split("\n").slice(1).join("\n");
}

function loop(read){

for( var i = 0; i > str.length; i++){ tk.flash(i); var f = prompt('Function name:', ''); if(f!=null){ var r = readd.replace(i,/f/gi);
}
}
readd = r;
}

function processFiles(){
var current = tk.readFile('Current.txt');
current = current.split("\n")
//var read = tk.readFile(current[0]);
var fileslist = tk.readFile('filelist.txt');
var splitFiles = fileslist.split('\n');
splitFiles.forEach(funcFruits);
function funcFruits(item, index){

if (item.includes(current[0])){
splitFiles.splice(index, 1)
splitFiles.unshift(item);
}
}

var toFile = splitFiles.join('\n');
tk.writeFile('filelist.txt','\n'+toFile,false)
//tk.flash(current[0])
}


var filterHistory = function(deltas){
    return deltas.filter(function (d) {
        return d.group != "fold";
    });
}

sessionToJSON = function(session) {
    return {
        selection: session.selection.toJSON(),
        value: session.getValue(),
        history: {
            undo: session.$undoManager.$undoStack.map(filterHistory),
            redo: session.$undoManager.$redoStack.map(filterHistory)
        },
        scrollTop: session.getScrollTop(),
        scrollLeft: session.getScrollLeft(),
        options: session.getOptions()
    }
}

sessionFromJSON = function(data) {
    var session = require("ace/ace").createEditSession(data.value);
    session.$undoManager.$doc = session; // workaround for a bug in ace
    session.setOptions(data.options);
    session.$undoManager.$undoStack = data.history.undo;
    session.$undoManager.$redoStack = data.history.redo;
    session.selection.fromJSON(data.selection);
    session.setScrollTop(data.scrollTop);
    session.setScrollLeft(data.scrollLeft);
    return session;
};

detectMode()

function detectMode(){

    var current = tk.readFile("Current.txt")

if(current!=undefined){
    current = current.split("\n")




try{
var modelist = JSON.stringify(modes)

modelist = modelist.replaceAll('|','","')
modelist = modelist.replaceAll('^','')
modeObj = JSON.parse(modelist)

//alert(JSON.stringify(modeObj))
    var filePath = current[0]
    fileEXT = filePath.split(".");
              fileEXT = fileEXT[1];
              var keys = Object.keys( modeObj );
              Object.keys(modeObj).forEach(function(key,index) {
              //var item = modeObj[key]
                
if (modeObj[key].includes(fileEXT)) {
                    var mode = keys[index].toLowerCase()
                    editor.getSession().setMode("ace/mode/"+mode)
tk.flash("You are editing "+current[0]+ " in "+mode)

                }
              });
              //sessionUndoM(current[0])
    }catch(modeErr){
    alert(modeErr)
editor.getSession().setMode("ace/mode/text");
    //sessionUndoM();
    }
}
}

function sessionUndoM(currentFile){
try{
var session = sessionFromJSON(tk.readFile("session "+currentFile+".txt"))
editor.setSession(session)
}catch(errNoExist){
alert(errNoExist)
}


}



function func(){



//Function auto input
if(newText.includes("function")){
var f = prompt("Function name:", "");
//var p = prompt("Enter parameters seperated by commas or leave blank");

if (f != null) {
  newText = "function " +f;
}
}

//var auto input
if(newText.includes("var")){
var f = prompt("Enter Variable name:", "");
var p = prompt("Enter Variable value:", "");


if (f != null) {
  newText = "var "+ f+" = "+p+";\n";
}
}

//Clear Line auto input
if(newText.includes("Clear Line")){
editor.selection.selectLine();
editor.insert("")
newText = "";
}

//Clear Line auto input
if(newText.includes("Select Line")){
editor.selection.selectLine();

}

if(newText.includes("Select all")){
editor.selection.selectAll();

}

if(newText.includes("Undo")){

editor.undo();
lock = true
editor.focus()
lock = false

}

if(newText.includes("Redo")){

editor.redo();
lock = true
editor.focus()
lock = false



}

if(newText.includes("Paste")){
navigator.clipboard.readText().then(function(text) {
    editor.execCommand("paste", text)
})

}

if(newText.includes("Copy")){
var text = editor.getCopyText()
editor.execCommand("copy") // or cut
navigator.clipboard.writeText(text)
tk.flash("Copied!");

}

if(newText.includes("Cut")){
var text = editor.getSelectedText()

  document.execCommand('copy');

editor.insert("")
//tk.flash("Cu!");

}

if(newText.includes("Export")){

download("mpBackup.json",JSON.stringify(fileSystem));
}


if(newText.includes("Import")){

$('#fileOpener').click();

}


if(newText.includes("Left")){

				editor.execCommand('gotoleft');
				var store = editor.getCursorPosition().row+1;
				var column = editor.getCursorPosition().column;
				editor.gotoLine(store,column,true)
				editor.session.insert(store, "")
				editor.focus()
			}

if(newText.includes("Right")){

				editor.execCommand('gotoright');
				var store = editor.getCursorPosition().row+1;
				var column = editor.getCursorPosition().column;
				editor.gotoLine(store,column,true)
				editor.session.insert(store, "")
				editor.focus()
			}

if(newText.includes("Sel from here to")){
selectFromTo();
//tk.flash("Cu!");

}

if(newText.includes("Codify!")){


currline = editor.getSelectionRange().start.row;
inpuT = editor.session.getLine(currline)
//input2 = inpuT;


var row = editor.selection.lead.row
var selText = ""
//Type text or variable
try{
var str = aliases2.split("\n")
if(str.includes(inpuT)){
magicCode()
}else{


	 var stateofbeing = ""
	tk.flash('I am processing your request please wait...')
	var textinput = inpuT
	 

	checkFormat = /[()]/;
	var containSpec = checkFormat.test(textinput)
	if(containSpec ==true){
		eval(textinput)
		stateofbeing = "true"

	}else{


			//var saidToday = tk.readFile('saidToday.txt')
var today = new Date()
var h = today.getHours()+":"
var m = today.getMinutes()			
var time = h+m
var re = /^When|^What|^How|^Why/gm

if(!textinput.match(re)){
				//var value = tk.global('Stateofbeing');
				//say(greet)
				//var ok = tk.writeFile('saidToday.txt',textinput+" at "+time+". ",true)
				
			}

			var re = /^when|^what|^how|^why/gm
			
			if(textinput.match(re)){

var knowledge = tk.readFile("knowledge.txt")
var splSim = knowledge.split(".")
 		      var matches = stringSimilarity.findBestMatch(textinput,splSim);
	              var sims = matches.bestMatch.target
tk.writeFile("currentSims.txt",sims,false)
tk.flash(sims)

			}else{
tk.writeFile("currentSims.txt","blankone",false)
  magicCode()

}
			
		}//appfound		

	

} 


	




var sims = tk.readFile("currentSims.txt")

//editor.selection.selectLine();
//editor.insert(tk.readFile(sims+".txt"))
var row = editor.session.getLength() - 1
var column = editor.session.getLine(row).length // or simply Infinity
//editor.gotoLine(row + 1, column)
editor.execCommand("gotolineend")
if(tk.readFile(sims+".txt")!=undefined){
editor.session.insert(editor.getCursorPosition(), "\n"+tk.readFile(sims+".txt"))
}

}catch(err){
tk.flash(err+"\n"+err.stack)
editor.session.replace(new Range(row, 0, row, Number.MAX_VALUE), selText)
//magicCode();


}
}

if(newText.includes("Link Ai")){
 
currline = editor.getSelectionRange().start.row;
inpuT = editor.session.getLine(currline)
//input2 = inpuT;


var row = editor.selection.lead.row
var selText = ""
editor.session.replace(new Range(row, 0, row, Number.MAX_VALUE), selText)
//Type text or variable
process(inpuT);

} 

if(newText.includes("Voice")){
tk.getVoice();

}





function replaceLine(str,num){
var newStr;
num = num-1
array = str.split("\n");
tk.flash(array[0]+" "+array[1])
array.splice(num, 1)
newStr = array.join("\n");
return newStr;
}



//for auto input
if(newText == "for"){
var f = prompt("List variable name:", "");

if (f != null) {
  newText = "for ( var i = 0; i < " +f+".length; i++){\r\t";
}
}

//for auto input
if(newText == "[]"){
var f = prompt("Enter element variable or array elements", "");

if (f != null) {
  newText = "["+f+"]";
}
}


//if auto input
if(newText == "if"){
var f = prompt("Type condition:", "");

if (f != null) {
  newText = "if ("+ f+"){\r\t";
}
}


//() auto input
if(newText == "function" || newText == "()" && !newText == "if" || newText == "()" && !newText == "for"){
//var f = prompt("Enter Variable name:", "");
var p = prompt("Enter parameters seperated by commas or leave blank:", "");

if (newText == "function" && p != null){
newText += "("+p+"){\r\t";
}else{
  newText = newText.replace("()","("+p+")");
}

}



}

//document.getElementById("exampleFormControlTextarea1").innerText = "GeeksforGeeks";
//document.getElementById("ta").value = "a";



function openFile (){

var p = prompt("Enter name the file you would like to open:", "");

if(p.includes(".")){
newText = p
if (p != null) {
var read = tk.readFile(newText);

if(read!=undefined){

tk.writeFile('Current.txt',newText,false);
extention = newText.split(".");
extention = extention[1];

switch(extention) {
  case "js":
    ex = "javascript";
    break;
  case "html":
    ex = "text/html";
    break;
  case "css":
    ex = "css";
    break;
  default:
    ex = "text/html";
 break;
}

//detectMode()

editor.setValue(read);

//document.getElementById("ta").value = read;



}else {

tk.writeFile('Current.txt',newText,false);

//alert(newText)
//ta.value = "";
//detectMode()
editor.setValue("");
tk.writeFile(newText,"",false);

}
var r = tk.readFile("filelist.txt");
var toWrite;

//files.push(newText);
files.unshift(newText);

toWrite = files.join("\n");
if (r == "undefined"){
tk.writeFile("filelist.txt",newText,false);

}else{
tk.writeFile("filelist.txt",r+'\n'+newText,false);


}


var r = tk.readFile("filelist.txt");
if(r.includes("\n")){
r = r.split("\n");

}
 
//tk.flash ("this far");
//tk.flash(newText);
ii = r.length - 1;

for (var i = ii; i < r.length; i++) {
var btn = document.createElement("button");
var t = document.createTextNode(newText);
document.getElementById('slide-1').appendChild(btn);
var filename = newText.replace(/^.*[\\\/]/, '')
btn.textContent = filename;
btn.setAttribute("id", newText);
btn.setAttribute("class", newText);
tk.flash(newText);
//var textarea = document.getElementById("ta");
toLoad = newText;

btn.setAttribute("onclick", "tk.writeFile('Current.txt\','"+toLoad+"\',false); tk.flash('"+toLoad+"'); detectMode(); editor.setValue('"+toLoad+"\'); editor.setValue(tk.readFile('"+toLoad+"\'));");

detectMode()
ii = ii+1;
}


//editor.getDoc().setValue

}
}else{
alert("PLEASE ENTER A VALID FILE PATH!")
}
localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
}

function closeFile(){


var r = tk.readFile("filelist.txt");
var f = tk.readFile("filelist.txt");
r = r.split("\n");
f = f.split("\n");
//tk.flash("gets here1");
var files2 = [];
let index;

for (let i = 0; i < r.length; i++){
files2.push(r[i]);
//tk.flash("gets here2");
}
var current = tk.readFile('Current.txt')
current = current.split('\n')
for (let i = 0; i < files2.length; i++){
if(files2[i].includes(current[0])){
var elem = document.getElementById(current[0]);
elem.parentNode.removeChild(elem);
index = files2.indexOf(current[0]);
if (index > -1) {
 files2.splice(index, 1);
//new position
nP = index - 1;
//Type text or variable
tk.writeFile("Current.txt",files2[nP],false);
var f = tk.readFile(files2[nP]);
editor.setValue(f);
 var toWrite = files2.join("\n");
 tk.writeFile("filelist.txt",toWrite,false);


}else{
//new position
nP = files2.length - 1;
tk.writeFile("Current.txt",files2[nP],false);
var f = tk.readFile(files2[nP]);
//ta.value = f;
editor.setValue(f);
}

}

}

localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
}

function saveFile(){
tk.writeFile('makerst.txt',JSON.stringify(editor.getOptions()),false);

 var current = tk.readFile('Current.txt')

 current = current.split('\n')
tk.writeFile(current[0],editor.getValue(),false);

//Store session
 var session = editor.session
 var sessionData = sessionToJSON(session)
 tk.writeFile("session "+current[0]+".txt",JSON.stringify(sessionData),false)

//editor.getValue();

localStorage.setItem('fileSystem', JSON.stringify(fileSystem));


tk.flash('Saved!')
}

function runCode(toLoad){
tk.flash("fhdh")
try{
tk.writeFile('Current.txt',toLoad,false); 
detectMode(); 

var current = tk.readFile('Current.txt').split('\n'); 
tk.flash(current[0])
editor.setValue(toLoad); editor.setValue(tk.readFile(toLoad));
}catch(err){
alert(err.stack)
}
}

function alias(){

//startPos = ta.selectionStart;
//newText = tk.readFile("Alias.txt");
//ta.focus();
//ta.setRangeText(newText, startPos, endPos, 'end');
inpuT = newText;
//input2 = newText;
magicCode();

/*var commandCheck = getCommand(inpuT)

if(!commandCheck){

}*/

}

//On Hash Change
window.onhashchange =function (){

if(window.location.toString().includes("#x")){
var r = confirm('Are you sure you want to clear text?');
 if (r == true) {
editor.setValue("");
  }
//editor.getDoc().setValue('');
window.location.href = "index.html#restart";

}

if(window.location.toString().includes("#s")){

saveFile();
window.location.href = "index.html#restart";

}

if(window.location.toString().includes("#close")){
var c = confirm('Are you sure want to close file?');
if (c == true) {
closeFile();
}
window.location.href = "index.html#restart";

}

if(window.location.toString().includes("#o")){

openFile();
window.location.href = "index.html#restart";
}

if(window.location.toString().includes("#alias")){

alias();
window.location.href = "index.html#restart";
}

if(window.location.toString().includes("#h")){

guide();
window.location.href = "index.html#restart";
}

if(window.location.toString().includes("#copy")){
var text = editor.getSelectedText()
tk.copyText(text)
tk.flash("Copied!");

}

if(window.location.toString().includes("#cut")){
var text = editor.getSelectedText()
tk.copyText(text)
editor.insert("")
//tk.flash("Cu!");

}

if(window.location.toString().includes("#paste")){
var pasteText = tk.pasteText()
editor.insert(pasteText)
//tk.flash("Cu!");

}

if(window.location.toString().includes("#undo")){
editor.undo();

}

if(window.location.toString().includes("#redo")){
editor.redo();

}

if(window.location.toString().includes("#lock")){
if(lock == false){
lock = true
//tk.flash("true")
}else{
lock = false
//tk.flash("false")


}

}

if(window.location.toString().includes("#bundle")){
bundle();

}

if(window.location.toString().includes("#voice")){
var url = window.location.toString()
var splUrl = url.split("?")
var voice = splUrl[1]
if(voice.includes("+")){
voice = voice.split("+").join(" ")
}

inpuT = voice;
input2 = voice;
var commandCheck = getCommand(inpuT)
if(!commandCheck){
magicCode();
}

}

if(window.location.toString().includes("#settings")){
editor.completer.detach()
window.location.href = "index.html#restart";

}



}

function show() {
  var x = document.getElementById("card21");
    x.style.display = "block";
}


function hide(){
var x = document.getElementById("card21");
x.style.display = "none";
}

function guide(){
var guide = "- Tap the plus button to open or create a file (type path of the file you are going to create or open).\n  \n - Tap the save button to save the file that you are currently editing.\n \n - Tap menu and tap help/the question mark button to open this user guide at any point.\n \n - Tap the X button to close the tab that you're currently viewing or editing\n \n  - Tap the menu and tap 'Clear' to clear the text.\n \n   - Scroll left or right on the buttons underneath the editor/textarea to find the Guided Input solution you are looking for \n \n - Scroll up or down to enlarge the editor.\n  \n - Tap anywhere in the editor to make it smaller and bring up the special key and automated functions. \n \n -Tap menu and tap Lock in small to keep the editor small and disable enlarging on scroll \n\n - Tap menu and tap test in tk webview to test your tasker js code in tasker webview kid app. You'll be redirected to a dropbox link if tk webview is not installed \n\n - Find all tasker js functions in the horizontally scrollable Guided input list underneath the editor. You can insert these even faster by using the voice button and saying the name of the function you would like to insert. Alternatively you can type the name of function that you want to use in the editor then tap the codify button to insert function. \n\n - Tap menu and tap Run dom/Play button to test your Javascript code that has DOM elements like alert, prompt etc. \n \n - You can use the following methods which directly interact with your device when you use the Run Dom option; 'tk.flash(String text), tk.readFile(String filename), tk.writeFile(String filename,String content, Boolean append) \n \n - Tap the menu button and tap Run Service to run the V8 Javascript code as an android background service from any javascript or text file that is currently selected \n \n - You can use the following methods which directly interact with your device from your v8 Javascript; 'tk.flash(String text), tk.readFile(String filename), tk.writeFile(String filename,String content, Boolean append), tk.Download(String urlInput, String saveAs), tk.runEvery(String jsCodeToRun, int mills)' instead of setTimeout() \n \n - Tap the menu button and tap 'Run Node Js' which will run the node code from any js file that is currently selected \n \n - You can use the following methods to directly interact with your device when running your Node Js code in the service.js file; flash(String text), writeFile(String filename, String data, String append<which is a boolean as a string>), readFile(String filename) ";

//Name of Tasker variable, Set variable to
//tk.writeFile("Current.txt","guide",false);
//ta.value = guide;
alert(guide);

}

/*document.onload = function(){
var m = tk.readFile("mdata.txt")
window.location.href = "index.html#"+m;

}*/


function bundle(){

var p = prompt("Enter name of the entry module", "");
var o = prompt("Enter full path of the output file", "");


if (p != null) {

if (o != null) {
if(o.includes(".js")){
tk.writeFile(o,"",false)
lM(p)
}else{
Alert("Output file must be .js file!!!")
}


}
}


async function lM(input){
var module = await require(input)
tk.flash("Bundling complete!")


}
}

function passId(){
//var mdata = tk.read("mdata.txt");
//scrollToElement(id_Clicked);
var current = tk.readFile('Current.txt');
current = current.split("\n")
var read = tk.readFile(current[0]+'data.txt');
  //$('#ta').scrollTop(read);
editor.gotoLine(Number(read));
tk.writeFile('mdata.txt',current[0],false);

}

let tm;
let focused;
let z, x, y;
//var myVar = setInterval(myTimer, 1000);

var actionLast;

function positions(){
store = editor.getCursorPosition().row+1;
column = editor.getCursorPosition().column+1;

}

editor.on('mousedown', () => {
store = editor.getCursorPosition().row+1;
column = editor.getCursorPosition().column+1;
var current = tk.readFile('Current.txt');
current = current.split("\n")
tk.writeFile(current[0]+'data.txt',store,false);

})

editor.on("focus", function() {
actionLast = "focus"
 e.setAttribute("style","height:150px");
editor.resize()

if(quickKey == false){
editor.gotoLine(store,column,true)
editor.session.insert(store, "")
}

quickKey = false;
});


let rtn, bps

editor.session.on("changeScrollTop", function(){
rtn = false


editor.commands.bindKey("Return", (editor) => {
editor.insert("\n")
store = editor.getCursorPosition().row+1;

 column = editor.getCursorPosition().column;
var code = editor.getValue();
var indented = indent.js(code, {tabString: '\t'});
editor.setValue(indented)
editor.gotoLine(store,column,true)
editor.session.insert(store, "")
editor.focus()
rtn = true;
});

/*document.getElementById('editor').addEventListener('keydown', function (event) {
    if (event.keyCode == 8) {
store = editor.getCursorPosition().row+1;
 column = editor.getCursorPosition().column;
var code = editor.getValue();
var indented = indent.js(code, {tabString: '\t'});
editor.setValue(indented)
editor.gotoLine(store,column,true)
editor.session.insert(store, "")
editor.focus()
rtn = true;
        // Call event.preventDefault() to stop the character before the cursor
        // from being deleted. Remove this line if you don't want to do that.
        event.preventDefault();
    }
    if (event.keyCode == 46) {
store = editor.getCursorPosition().row+1;
 column = editor.getCursorPosition().column;
var code = editor.getValue();
var indented = indent.js(code, {tabString: '\t'});
editor.setValue(indented)
editor.gotoLine(store,column,true)
editor.session.insert(store, "")
editor.focus()
rtn = true;
        // Call event.preventDefault() to stop the character after the cursor
        // from being deleted. Remove this line if you don't want to do that.
        event.preventDefault();
    }
});*/

let text = editor.getSelectedText();
if(rtn == false || bps == false){
if(lock == false){
window.editor.blur();
e.setAttribute("style","height:800px");

if(actionLast=="scroll"){
editor.resize()
}
}


}

actionLast = "scroll"
});


editor.session.selection.on('changeCursor', function(){
settingPoints = true;
});


editor.getSession().on('change', function() {
  lock = false
localStorage.setItem('fileSystem', JSON.stringify(fileSystem));
});

let rangePoints = [];

async function selectFromTo(){
var sp

await until(_ => settingPoints == true)
if(rangePoints.length==0){

rangePoints[0] = editor.getCursorPosition().row;
rangePoints[1] = editor.getCursorPosition().column;
settingPoints = null;
tk.flash("Select point to end selection");
}

await until(_=> settingPoints == true);
if(rangePoints.length==2){
rangePoints[2] = editor.getCursorPosition().row;
rangePoints[3] = editor.getCursorPosition().column;
settingPoints = null;
tk.flash(rangePoints[2]+" " +rangePoints[3]);


}

await until(_=> rangePoints.length == 4);
if(rangePoints.length==4){
editor.selection.setRange(new Range(rangePoints[0], rangePoints[1], rangePoints[2], rangePoints[3]));
rangePoints = []

}
}

function until(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}



/*editor.session.selection.on('changeCursor', function(){
store = editor.getCursorPosition().row+1;
var current = tk.readFile('Current.txt');
current = current.split("\n")
tk.writeFile(current[0]+'data.txt',store,false);
});*/

//var input = "flash the value awesome"
//var input = "alert. flash the value awesome things. get element by id from the variable id. read file named text.txt then store it in str. write file named text.txt"

function magicCode(){
//var str = tk.ReadFromAssets("aliases2.txt");
//tk.flash('this')


str = aliases2.split("\n")

var match = stringSimilarity.findBestMatch(inpuT,str);

inpuT = match.bestMatch.target;
var rating = match.bestMatch.rating
//tk.flash(rating)
if(rating > 0.4){
inpuT = inpuT.toLowerCase();
tk.flash(inpuT)
function splitBet(data,a,b){
var spl = data;//Type text or variable


spl = spl.split(a);
spl = spl[1];
if(spl){
spl = spl.split(b)
var res = spl[0];
return res;
}


}

function fileExtension(str){
return str.match(/\.([0-9a-z]+)(?:[\?#.\s]|$)/i)[0]

}

function wordAfter(str,text){
    return str.match(new RegExp(text + '\\s(\\w+)'))[1];
}

function everythingAfter(str, text){
return str.substr(str.indexOf(text)+6);
}


var splP = inpuT.split(". ")
if(input2 !== undefined){
var splInput2 = input2.split(" ")
}




splP.forEach(findloop);
function findloop(item, index){
var named,variable
var obj = {};

if(splInput2 !== undefined){
if(splInput2[index].includes("store it in")){

obj["variable"] = wordAfter(splInput2[index],"store it in");
}

if(splInput2[index].includes("the variable")){
obj["the variable"] = wordAfter(splInput2[index],"the variable");
}


if(splInput2[index].includes("value")){
obj["value"] = "'"+everythingAfter(splInput2[index],"value")+"'";
}

if(splInput2[index].includes("following")){
obj["following"] = "'"+everythingAfter(splInput2[index],"following")+"'";
}


if(splInput2[index].includes("named")){
var ext = fileExtension(splInput2[index]);

named = splitBet(splInput2[index],"named ",ext);
obj["named"] = named+ext

}
}
item = item.replace(/a | the| that| is/gi, "")


var searchVar, capSearchVar
var readd, read
var Itm
var sparts
var found, Try, getPar
var pars = []

var it = item.split(" ")
it.forEach(itloop);
function itloop(item2, index2){

if(index2==0){
    searchVar = item2
    //searchVar = capitalizeFirstLetter(searchVar);

}

if(index2 > 0){
    searchVar = searchVar+" "+item2//capitalizeFirstLetter(item2);

}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//var write = tk.ReadFromAssets("Write file.txt")

  //read = tk.ReadFromAssets(searchVar+".txt")
  read = getProperty(objList,searchVar)
 //var read = tk.readFile("Maker+/"+searchVar+".txt")


  if(read){
      readd = read;
getPar = item.split(searchVar.toLowerCase())
//Type text or variable



}


}
if(readd){

   var str = readd.split('//');
   var w
   str = str[1];
   str = str.split('\n');
   str = str[0].split(',');

var objSize = Object.keys(obj).length;
//tk.flash(objSize);

var keys = Object.keys( obj );
   for ( var i = 0; i < str.length; i++){
      var f,p
      if(objSize > 0){
         for ( var t = 0; t < objSize; t++){
             p = t + 1;

             if(getProperty(obj,keys[t])){
                 readd = readd.replace("*"+p,getProperty(obj,keys[t]))
              }
           }


           if(!getProperty(obj,keys[i])){
                 //f = prompt(str[i], '');
                 tk.flash(str[i])
           }

      }else{
                 //f = prompt(str[i], '');
                tk.flash(str[i])
            }

       w = 1+i;
       w = '*'+w;
       var re = new RegExp('/'+w+'/', 'g');
       if(f!=null){
           //tk.flash(w+" "+f);

           readd = readd.replace(w,f)
           readd= replaceAll2(readd,w,f);

           var r = confirm('Wrap with quotes? Cancel if input is a variable');
           if (r == true) {
              readd = replaceAll2(readd,f,`'`+f+`'`)
           }

       

   }

   readd = replaceLine2(readd,0);
   tk.writeFile('Alias.txt',readd,false);
/*var row = editor.selection.lead.row
newText = readd
editor.session.replace(new Range(row, 0, row, Number.MAX_VALUE), newText)  */
readd = readd.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');

editor.insert(readd)
editor.find('*1');
editor.replace('');


//}
//tk.flash(legopn);

}

//process(inpuT)


}

function getProperty(obj,propertyName) {
    return obj[propertyName];
}


function replaceAll2(string, search, replace) {
  return string.split(search).join(replace);
}


function replaceLine2(str,num){
return str.split("\n").slice(num).join("\n");
}
}
}
}

function getCommand(input){
var str = tk.ReadFromAssets("cleanComm.txt");

str = str.split("\n")
var matches = stringSimilarity.findBestMatch(input,str);
var matched = matches.bestMatch.target
var rating = matches.bestMatch.rating
if(rating > 0.6){
editor.execCommand(matched);
}
}

    editor.getSession().setUseWorker(true);


//Then redefine the old console
window.addEventListener("error", handleError, true);

function handleError(evt) {
//alert(evt)
}

