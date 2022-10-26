function process(inputer){
	
	tk.flash('I am processing your request please wait...')
	var textinput2 = inputer;
        var textinput = inputer;
        var spl;
if(textinput.includes(" ")){
	spl = textinput.split(" ");
}
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
        link = true
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

link = true

				}
			}
		}//for loop
		tk.writeFile('ta.txt',textinput,false)
		
		/*
sapps.forEach(checkApps);
function checkApps(item, index){
if(item.toLowerCase()===textinput2.toLowerCase()){

link = true


if(item==="Chrome"){
tk.performTask("ChromeTask")
}else{
tk.loadApp(item,'',false);
}

appFound = "true";
}//item===new_val
		}//for loop*/
		
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
				result = read.includes("undefined")
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
			tk.setGlobal("toRead",toRead[1]);
			result = read.includes(undefined)
			
			
			
			
			//execute code
			if(read != "undefined"){
				
				
				spec = format.test(read);
				if(spec===false){
					editor.insert = read;

                                         link = true

					//elemText( "Ai Skin", "TextEdit11", "repl",  );
				}else{
					
					
					eval(read);

                                         
					
					
					
				}
                          link = true


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
                                             link = true
					}
				}//for loop
				
				
				if(checkFound===false&&result===true){
					magicCode();
			}
}
			
			
			
			textinput2 = textinput2.replace(textinput2.match(/(\d{2}:\d{2})/g),"")
			
			var saidToday = tk.readFile('saidToday.txt')
			var time = tk.global("TIME")
			time = time.split(".")
			time = time[0]+":"+time[1]
			var re = /^When|^What|^How|^Why/gm
			if(!saidToday.includes(textinput2) && !textinput2.match(re)){
				var value = tk.global('Stateofbeing')
				//say(greet)
				var ok = tk.writeFile('saidToday.txt',textinput2+" at "+time+". ",true)
				
			}
			var re = /^when|^what|^how|^why/gm
			
			if(textinput.match(re)){
				
				eval(tk.readFile("qna.js"))
			}
			
		}//appfound

	}


	
}

