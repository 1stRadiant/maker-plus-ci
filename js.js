 
//  if(Able a typeof tk !== "undefined" && tk !== null) {

//var fileResult;
var fileSystem = {}
var flashArray = []


tk = {
readFile: function(f){
return fileSystem[f]
},

writeFile: function(f,c,a){
if(a){
fileSystem[f] = fileSystem[f]+" \n"+c 
return;
}
fileSystem[f] = c 
}, 

flash: function(t){
flashArray.push(t)
//toFlash(t)
},

ReadFromAssets: function(f){
 return fileSystem[f]
}


}
alert('2')
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

alert("3")
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {


    // The file's text will be printed here
   fileSystem = JSON.parse(e.target.result);
  };

  reader.readAsText(file); 

alert("yo")

for ( var property in fileSystem ) {
  tk.writeFile('filelist.txt',property+"\n",true); // Outputs: foo, fiz or fiz, foo
}

try{
var r = tk.readFile("filelist.txt");
tk.flash ("this far");
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
btn.setAttribute("onclick", "tk.writeFile('Current.txt','"+toLoad+"',false); var readC = tk.readFile('Current.txt'); var current = readC.split('\n'); tk.flash(current[0]); detectMode(); editor.setValue('"+toLoad+"'); editor.setValue(tk.readFile('"+toLoad+"'));");
//btn.setAttribute("onclick","alert('gets here');");
ii = i+1;
}
}catch(err){
alert(err)
}
}
alert('here')



