//Enter  path as a string
var nouns = tk.readFile('nouns.txt')
var verbs = tk.readFile('verbs.txt')
var adjectives = tk.readFile('adjectives.txt')
var copulars = tk.readFile('copular.txt')
var input = tk.readFile('infp.txt')
var question = tk.readFile('ta.txt')
input = input+tk.readFile('saidtoday.txt')
var question = question.split("\n")
//Enter  message as a string
question = question[0]

//Enter  message as a string



//var question = "when did i go to get val"
//question = "how was your day?"
//question = "what his name?"
//question = "when did you go to africa?"
/*question = "how do cars run?"
question = "how do i get Javascript?"
question = "Where can I download JavaScript?"*/
//question = "Is JavaScript Free?"
//question = "what makes fire?"
//question = "are infps assuming"
/*question = "what do infps happily lose themselves in"*/
//question = "what do infps invent all sorts of stories"
//question = "what do mediators long for?"
//question = "how do mediators about feel others?"
input = input+ " Although they may seem quiet or unassuming, Mediators (INFPs) have vibrant passionate inner lives. Creative and imaginative, they happily lose themselves in daydreams, inventing all sorts of stories and conversations in their minds. Idealistic and empathetic, Mediators long for deep, soulful relationships, and they feel called to help others. But because this personality type makes up such a small portion of the population, Mediators may sometimes feel lonely or invisible, adrift in a world that doesn’t seem to appreciate the traits that make them unique. You don't have to get or download JavaScript. JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone. JavaScript is free to use for everyone. match sticks make fire. ehehdb ehdhd dhdh engines make cars run. little more ,difficulty. I in a lot of text and context I went to africa in 2012 lets make it hard for you. ndjf fjfjfj dhdhhd his name is Nigel. maybe something here my day was good. though im just making this up president munangagwa is in zimbabwe adding random text is fun and all that. president munangagwa is president of zimbabwe try to see if that will do."
//question = "do mediators make friends easy?"
//question = "what type of friends do keep close?"

//question = "where is president munangagwa?"
//question = "who is the president of zimbabwe?"
//question = "what brings mediators happiness?"






obj = {
	" you " : iome(),
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

var lnth = 2
var added = false
var rating,fogr
var bckdone = false

str2BackUp = str2

//Stage 3 of processing
//if(str == result || str2 == str){
try{
	
	forwardProcess()
	if(str == result){
		
		if(str2.includes("s ")){
		}else{
			str2 = str
		}
		backwardProcess()
		//Enter  message as a string
		
		
		
	}
	
	//Type text or variable
	//Type text or variable
	//alert(ogr);
	
	
	
	//checkSim()
	resultSpl = result.split(" ")
	var joined = str+" "+str2+" "+result
	var joinedSpl = joined.split(" ")
	finalJspl = ""
	//Type text or variable
	//Enter  message as a string
	for ( var i = 0; i < joinedSpl.length; i++){
		var jspl = joinedSpl[i]
		if(!finalJspl.includes(jspl)){
			finalJspl = finalJspl + " "+jspl
		}
	}
	//result = finalJspl
	if(resultSpl){
		
		resultSpl = result.split(" ")
	}
	//alert(finalJspl+"rhrh")
	
	//Back up result before any changes
	var ogr = result
	
	if(result != str2 && !bckdone == false){
		result
		
		
	}
	try{
		
		// Produce 2 answers and see which is more relevant to the question
		//result = str
		var answers = []
		
		for ( var i = 0; i < 2; i++){
			if(copulars.includes(resultSpl[resultSpl.length-1]) || copulars.includes(resultSpl[0])){
				if(i == 0){
					result = str
					
				}
				if(i == 1){
					result = str2
				}
			}
			
			var copL = copulars.split(",")
			if(copL.every((item) => { return item != resultSpl[resultSpl.length-2]}) || str2 == result){
				//if(copL.every((item) => { return item == resultSpl[resultSpl.length-1]})){
				
				if(copulars.includes(resultSpl[resultSpl.length-1]) || copulars.includes(resultSpl[0])){
					
					
					var matches = stringSimilarity.findBestMatch(result,splSim);
					rating = matches.bestMatch.rating
					if(rating>0.30){
						result = matches.bestMatch.target
					}else{
						
						//Add more words and try finding similarity again
						try{
							
							var result2 = splitBet(input,result,".")
							
							result = result+ result2
							var matches = stringSimilarity.findBestMatch(result,splSim);
							result = matches.bestMatch.target
						}catch(err8){
							result = ogr
							var matches = stringSimilarity.findBestMatch(result,splSim);
							result = matches.bestMatch.target
						}
					}
				}
			}
			
			answers.push(result)
		}
		
		
		var ans
			if(copL.every((item) => { return item != resultSpl[resultSpl.length-2]}) || str2 == result){
				//Check which answer is most relevant
				answers.forEach(loopAns);
				function loopAns(item, index){
					if(item.includes(str2) && !item.includes(str)){
						ans = answers[1]
					}else{
						ans = answers[0]
					}
				}
				
			}
		
		//alert(ans)
		//If result is black use the original result
		var resultBlank = false
		if(result=="" && !copulars.includes(resultSpl[resultSpl.length-2])){
			resultBlank = true
			result = ogr
		}
		
		//fogr = result
		
		
		if(resultSpl.includes(" ")){
			resultSpl = result.split(" ")
			
			if(fogr.includes(resultSpl[resultSpl.length-2]) && copulars.includes(resultSpl[resultSpl.length-2]) && resultBlank == false){
				//Enter  message as a string
				
				
				result = fogr
			}
		}
		
		
		
		
		
		if(resultSpl){
			resultSpl = result.split(" ")
		}
		if(ogr.includes(resultSpl[resultSpl.length-2]) && copulars.includes(resultSpl[resultSpl.length-2]) && resultBlank == false){
			result = ogr
		}
		
		if(resultSpl){
			resultSpl = result.split(" ")
		}
		if(!copulars.includes(resultSpl[resultSpl.length-2]) && resultBlank == false){
			result = ans
		}
		
		//}
		//alert("Answer:A "+result)
		//resultSpl = result.split(" ")
		//Enter  message as a string
		
		
		tk.setGlobal("Stateofbeing",result)
		var matches = stringSimilarity.findBestMatch(result,splSim);
		result = matches.bestMatch.target
		
		
		
		//Enter  message as a string
		
		if(resultSpl){
			resultSpl = result.split(" ")
		}
		
		if(copulars.includes(resultSpl[resultSpl.length-2])){
			
			if(result.includes("was")){
				result = wordAfter(result,"was")
			}
			if(result.includes(" is")){
				result = wordAfter(result," is")
			}
			if(result.includes(" in ") && !result.match(/(\d{4}-\d{4}|\d{4})/g)){
				result = wordAfter(result," in ")
			}
			
			//Year
			if(result.includes(" in ") && result.match(/(\d{4}-\d{4}|\d{4})/g)){
				result = result.match(/(\d{4}-\d{4}|\d{4})/g)
			}
			//Time
			if(result.includes(" at ") && result.match(/(\d{2}:\d{2})/g)){
				result = result.match(/(\d{2}:\d{2})/g)
			}
			//	var result2 = result.split(":")
			
			//Enter path as a string,Enter text as a string,append? true or false
			
			
			
			
			
			tk.setGlobal("Stateofbeing",result.toString())
			//alert(result)
		}
	}catch(err){
		alert(err.stack)
	}
	
	//Enter  message as a string
	
	
	result = ""
	ogr = ""
	fogr = ""
	
	bckdone = false
	
}catch(err2){
	//alert(err2)
	try{
		if(!verbs.includes(wordBefore(input,result))){
			backwardProcess()
			
			alert("Answer:B "+result)
		}else{
			forwardProcess()
			alert("Answer:C "+result)
			
		}
	}catch(err3){
		forwardProcess()
	}
	
	
}

function removeWDuplicates(str){
	//var str = "spanner, span, spaniel, span";
	str = str.replace(/[ ]/g,"").split(",");
	var result = [];
	for(var i =0; i < str.length ; i++){
		if(result.indexOf(str[i]) == -1) result.push(str[i]);
	}
	result=result.join(", ");
	return result
}

function backwardProcess(){
	tk.flash(str2+"df")
	bckdone = true
	if(str2 != result){
		changeProcess()
		
		result = wordBefore(input,str2)+ " "+str2
		result = wordBefore(input,result)+ " "+result
		checkSim()
	}
	
	if(result == str2){
		tk.flash(result)
		changeProcess()
		
		result = wordBefore(input,str2)+ " "+result
		
		
		result = wordBefore(input,result)+ " "+result
		checkSim()
	}
}


function forwardProcess(){
	result = str.trim()
	resultSpl = result.split(" ")
	result = result.replace("undefined","")
	
	
	
	try{
		
		if("is" == wordAfter(input,result) || "or" == wordAfter(input,result) || "in" == wordAfter(input,result)  || "have" == wordAfter(input,result)  || "has" == wordAfter(input,result)  || "make" == wordAfter(input,result)|| "was" == wordAfter(input,result)){
			result = result.replace("undefined","")
			
			//Enter  message as a string
			var matches = stringSimilarity.findBestMatch(result,splSim);
			var sims = matches.bestMatch.target
			tk.flash(sims)
			sims = sims.replace("s "," ")
			Sims = sims.split(" ")
			for ( var i = 0; i < lnth; i++){
				if(Sims[Sims.length-1] != resultSpl[resultSpl.length-1]){
					result = result+" "+wordAfter(input,result)
					
					resultSpl = result.split(" ")
					
				}
				
				if(copulars.includes(resultSpl[resultSpl.length-1]) || copulars.includes(resultSpl[0])){
					result = result+" "+wordAfter(input,result)
					
					
				}
				if(copulars.includes(resultSpl[resultSpl.length-1])){
					fogr = result
					alert(fogr)
					//Enter  message as a string
					tk.flash(fogr+"tttt")
					
					
				}
				
				
			}
			
		}
	}catch(err5){
		if(resultSpl.length < 3){
			var compResult = stringSimilarity.compareTwoStrings(str, str2);
			// → 0.8
			if(!compResult > 0.7){
				checkSim()
			}
		}else{
			
			try{
				
				result = str2
				backwardProcess()
			}catch(err6){
				result = str2
				backwardProcess()
				
			}
		}
	}
	
}

function checkSim(){
	var rSpl = result.split(" ")
	if(rSpl.length < 4){
		var matches = stringSimilarity.findBestMatch(result,splSim);
		result = matches.bestMatch.target
	}
}


function changeProcess(){
	if(!result.includes(" ")){
		toProcess = answerToProcess
		result = ""
		str2 = ""
		spl.forEach(processor);
		result = result.trim()
		str = str.trim()
		str2 = str2.trim()
	}
	
	if(!str2.includes(" ")){
		toProcess = answerToProcess
		result = ""
		str2 = ""
		spl.forEach(processor);
		result = result.trim()
		str = str.trim()
		str2 = str2.trim()
	}
}

function iome(){
	if(input.includes("I")){
		var toRtn = " I "
		return toRtn
	}else{
		var toRtn = " me "
		return toRtn
	}
	
	
}

function everythingAfter(str, text){
	return str.substr(str.indexOf(text)+6);
}

function splitBet(data,a,b){
	var spl = data;
	spl = spl.split(a);
	spl = spl[1];
	spl = spl.split(b)
	var res = spl[0];
	return res;
	
}
function wordAfter(str,text){
	return str.match(new RegExp(text + '\\s(\\w+)'))[1];
	
}

function wordBefore(str,text){
	return str.match(new RegExp('\\s(\\w+) '+text))[1];
	
}
