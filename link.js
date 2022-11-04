function process(inputer){
	 var stateofbeing = ""
	tk.flash('I am processing your request please wait...')
	var textinput = inputer
	
		 
	checkFormat = /[()]/;
	var containSpec = checkFormat.test(textinput)
	if(containSpec ==true){
		eval(textinput)
		stateofbeing = "true"

	}else{

			
			var saidToday = tk.readFile('saidToday.txt')
var today = new Date()
var h = today.getHours()+":"
var m = today.getMinutes()			
var time = h+m
var re = /^When|^What|^How|^Why/gm

if(!textinput.match(re)){
				//var value = tk.global('Stateofbeing');
				//say(greet)
				var ok = tk.writeFile('saidToday.txt',textinput+" at "+time+". ",true)
				
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
tk.writeFile("currentSims.txt","",false)
magicCode()
}
			
		}//appfound
		

	}


	


