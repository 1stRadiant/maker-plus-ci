function process(inputer){
	 
	//tk.flash('I am processing your request please wait...')
	var textinput2 = inputer;
        var textinput = inputer;
        var spl;
        link = "false"
if(textinput.includes(" ")){
	spl = textinput.split(" ");
} 

var saidToday = "";
	var joined;
	var found;
	var finalMatch;
	var toRead;
	var read;
	var checkFormat;
	var containSpec;
	var apps = ""
        var sapps;

//if(apps.includes(",")){
 sapps = apps.split(",");
//}
	var appFound = "false";
	var check;
	var result;
	var checkFound = false;
	var format = /[()]/;
	var spec;
	
		 
	checkFormat = /[()]/;
	containSpec = checkFormat.test(textinput)
	if(containSpec ==true){
		eval(textinput)
        link = "true"
	}else{
		function capitalizeFirstLetter(string) {
			return textinput2.charAt(0).toUpperCase() + string.slice(1);
		}
		
		textinput2 = capitalizeFirstLetter(textinput2);
	
		
		
		//remove white spaces
		var removeExtraWhitespace = text => text.trim();
		
		
		textinput2 = removeExtraWhitespace(textinput2);
		
		
		var conditions = textinput.split(" ");
		
		sapps.forEach(myfunc);
		function myfunc(item, index){
			spec = format.test(item);
			
			if(spec===false){
				check = conditions.every(el => item.toLowerCase().includes(el.toLowerCase()));
				
				if(check===true){
					tk.setLocal("collected",item);
					checkFound = true;
					tk.loadApp(item,'',false);
					tk.flash(item);
					appFound = "true";

//link = "true"

				}
			}
		}//for loop
		tk.writeFile('ta.txt',textinput,false)
		
		/*
sapps.forEach(checkApps);
function checkApps(item, index){
if(item.toLowerCase()===textinput2.toLowerCase()){

//link = "true"


if(item==="Chrome"){
tk.performTask("ChromeTask")
}else{
tk.loadApp(item,'',false);
}

appFound = "true";
}//item===new_val
		}//for loop*/
		alert("1")
		if(appFound==="false"){
			//Loop through the input
			spl.forEach(myfunc);
			function myfunc(item, index){
				
				if(index<1){
					joined = "";
					//Enter  message as a string
					
					
				}
				if(index>0){
					
					
					
					//joined += " "+item;
				}
				
				
				joined = joined.trim()
				//Enter  message as a string
				
				
				read = tk.readFile(joined+".txt");
				//Enter  message as a string
				
				
				checkFormat = /[()]/;
				containSpec = checkFormat.test(read);
				//result = read.includes("undefined")
				if(read === "undefined"){
					joined += " "+item;
					
					
				}else{
					//Saving last matched phrase
					found = joined;
					
				}
			}
			
			//using the last match
			finalMatch = found;
			
			
			
			toRead = textinput.split(finalMatch);
			read = tk.readFile(finalMatch+".txt");
			//tk.setGlobal("toRead",toRead[1]);
			//result = read.includes(undefined)
			
			
			
			
			//execute code
			if(read != "undefined"){
				
				
				spec = format.test(read);
				if(spec===false){
					editor.insert = read;

                                         link = "true"

					//elemText( "Ai Skin", "TextEdit11", "repl",  );
				}else{
					
					
					eval(read);

                                         
					
					
					
				}
                          link = "true"


			}else{
				//Enter  message as a string
				 
				
				var features = tk.readFile("features.txt");
				var conditions = textinput.split(" ");
				features = features.split("\n");
				
				features.forEach(myfunc);
				function myfunc(item, index){
					spec = format.test(item);
					
					if(spec===false){
						check = conditions.every(el => item.toLowerCase().includes(el.toLowerCase()));
						
						if(check===true){
							tk.setLocal("collected",item);
							checkFound = true;

                                                       

						}
                                             link = "true"
					}
				}//for loop
				
			
				if(checkFound===false&&result===true){
					magicCode();
			}
}
		
			
			
			textinput2 = textinput2.replace(textinput2.match(/(\d{2}:\d{2})/g),"")
			
			var saidToday = tk.readFile('saidToday.txt')
var today = new Date()
var h = today.getHours()+":"
var m = today.getMinutes()			
		time = h+m
			var re = /^When|^What|^How|^Why/gm

if(!textinput2.match(re)){
				//var value = tk.global('Stateofbeing')
				//say(greet)
				var ok = tk.writeFile('saidToday.txt',textinput2+" at "+time+". ",true)
				
			}

			var re = /^when|^what|^how|^why/gm
			
			if(textinput.match(re)){
var question = textinput
var input = " Although they may seem quiet or unassuming, Mediators (INFPs) have vibrant passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. Idealistic and empathetic, Mediators long for deep, soulful relationships, and they feel called to help others. But because this personality type makes up such a small portion of the population, Mediators may sometimes feel lonely or invisible, adrift in a world that doesn’t seem to appreciate the traits that make them unique. You don't have to get or download JavaScript. JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone. JavaScript is free to use for everyone. match sticks make fire. ehehdb ehdhd dhdh engines make cars run. little more ,difficulty. I in a lot of text and context I went to africa in 2012 lets make it hard for you. ndjf fjfjfj dhdhhd his name is Nigel. maybe something here my day was good. though im just making this up president munangagwa is in zimbabwe adding random text is fun and all that. president munangagwa is president of zimbabwe try to see if that will do."
//question = "do mediators make friends easy?"
//question = "what type of friends do keep close?"

//question = "where is president munangagwa?"
//question = "who is the president of zimbabwe?"
//question = "what brings mediators happiness?"


//var splSim = input.split(".")
 obj = {
	" you " : function(){
	if(input.includes("I")){
		var toRtn = " I "
		return toRtn
	}else{
		var toRtn = " me "
		return toRtn
	},
	"I " : "you",
	" my " : " your ",
	" your " : " my ",
	"go " : "went ",
	"Is " : "",
	his : "his",
	her : "her",
	was : "",
	the : "",
	are : "",
	"s " : " ",
	" is" : "",
	how :"",
	what : "",
	who : "",
	when : "",
	where : "",
	did : "",
	can : "",
	"do " : "",
	"?" : ""
	
}


input2 = input
obj2 = {
	"(":"",
	")":"",
	",":"",
	"ing ":" "
}

input = input.replace(/\)|\(|\,|ing /gi, function(matched){
	return obj2[matched];
});

var str;
input = " "+input
input = input.replace("."," ")
input = input.toLowerCase()
var splSim = input.split(".");


question = question.toLowerCase()
str = question.replace(/ you | me |I | my | your |go |Is |can |his|s |her|are|was|the| is|did|do |how|where|who|what|when|\?/gi, function(matched){
	return obj[matched];
});
str = str.trim()
str = str.toLowerCase()
strSpl = str.split(" ")

// 'the purple dinosaurs'



var answerToProcess = str +" "+ everythingAfter(input,str)
answerToProcess = answerToProcess.trim()
var spl = input.split(" ");

var str2 = ""

//Stage one of processing
toProcess = str
var result = ""
spl.forEach(processor);
function processor(item, index){
	
	if(toProcess.includes(item) && !result.includes(item)){
		
		
		result = result+" "+item
		
		
		result = result.replace("undefined","")
		
		for ( var i = 0; i < strSpl.length; i++){
			if(item.includes(strSpl[i])){
				str2 = str2+" "+item
				
			}
			
		}
		
	}
}

//Enter  message as a string



result = result.trim()
str = str.trim()
str2 = str2.trim()
changeProcess()
result = result.split(str)
result = str + result[1]





//Stage two of processing
str2 = str2.replace(".","")
str2Spl = str2.split(" ")
var strL = str2Spl.length
var expStr = ""
splSim.forEach(processor2);
function processor2(item, index){
	for ( var i = 0; i < strL; i++){
		
		//Enter  message as a string
		
		if(str2Spl.length > i){
			if(item.includes(str2Spl[i]) && item.includes(str2Spl[i+1])){
				expStr = expStr+" "+str2Spl[i]
			}
		}
		
		if(str2Spl.length-1 == i){
			if(item.includes(str2Spl[i]) && item.includes(str2Spl[i-1])){
				expStr = expStr+" "+str2Spl[i]
				
			}
		}
		
	}
}


//alert(expStr+"thdh")
if(strL != 0){
	str2 = expStr.trim()
	//str2 = "mediators feel"
	//Filling in the gap
	if(!input.includes(str2)){
		for ( var i = 0; i < str2Spl.length; i++){
			//Enter  message as a string
			
			try{
				if(input.includes(str2Spl[i]+" "+wordAfter(input,str2Spl[i]))){
					//add thrm togethrt
					
					str2 = str2Spl[i]+" "+wordAfter(input,str2Spl[i])
					tk.flash(i)
					
				}
			}catch(err4){
				
				str2 = str2+" "+str2Spl[i].trim()
				
			}
		}
	}
	//Enter path as a string,Enter text as a string,append? true or false
	var ok = tk.writeFile('testers.txt',str2,false)
	
	
}
		      var matches = stringSimilarity.findBestMatch(str2,splSim);
	              var sims = matches.bestMatch.target
	              tk.flash(sims)

			}
			
		}//appfound

	}


	
}

