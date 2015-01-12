var totalCorrect = 0, totalAnswered = 0;
//hiragana arrays
var hira_a_row = ["あ", "い", "う", "え", "お"],
	hira_k_row = ["か", "き", "く", "け", "こ"],
	hira_s_row = ["さ", "し", "す", "せ", "そ"],
	hira_t_row = ["た", "ち", "つ", "て", "と"],
	hira_n1_row = ["な", "に", "ぬ", "ね", "の"],
	hira_h_row = ["は", "ひ", "ふ", "へ", "ほ"],
	hira_m_row = ["ま", "み", "む", "め", "も"],
	hira_y_row = ["や", "ゆ", "よ"],
	hira_r_row = ["ら", "り", "る", "れ", "ろ"],
	hira_w_row = ["わ", "を"],
	hira_n2_row = ["ん"];

//katakana arrays
var kata_a_row = ["ア", "イ", "ウ", "エ", "オ"],
	kata_k_row = ["カ", "キ", "ク", "ケ", "コ"],
	kata_s_row = ["サ", "シ", "ス", "セ", "ソ"],
	kata_t_row = ["タ", "チ", "ツ", "テ", "ト"],
	kata_n1_row = ["ナ", "ニ", "ヌ", "ネ", "ノ"],
	kata_h_row = ["ハ", "ヒ", "フ", "ヘ", "ホ"],
	kata_m_row = ["マ", "ミ", "ム", "メ", "モ"],
	kata_y_row = ["ヤ", "イ", "ヨ"],
	kata_r_row = ["ラ", "リ", "ル", "レ", "ロ"],
	kata_w_row = ["ワ"],
	kata_n2_row = ["ン"];
	
//romajī for each mora
var alpha_a_row = ["a", "i", "u", "e", "o"],
	alpha_k_row = ["ka", "ki", "ku", "ke", "ko"],
	alpha_s_row = ["sa", "shi", "su", "se", "so"],
	alpha_t_row = ["ta", "chi", "tsu", "te", "to"],
	alpha_n1_row = ["na", "ni", "nu", "ne", "no"],
	alpha_h_row = ["ha", "hi", "fu", "he", "ho"],
	alpha_m_row = ["ma", "mi", "mu", "me", "mo"],
	alpha_y_row = ["ya", "yu", "yo"],
	alpha_r_row = ["ra", "ri", "ru", "re", "ro"],
	alpha_w_row = ["wa", "wo"],
	alpha_n2_row = ["n'"];
	
//storage variables
var currMoraSym = "",
	currMoraAlph = "",
	currMoraNumber = 0;

//prob. not necessary
function moraStart() {
	randMora();
}
//Reset totals, then choose new 
function resetMora() {
	//get counters, practice/test buttons
	var totalSpan = document.getElementById("totalNum"),
		correctSpan = document.getElementById("correctNum"),
		pracRadioButton = document.getElementById("prac");
		
	//reset counters
	totalSpan.innerHTML = 0;
	correctSpan.innerHTML = 0;
	totalCorrect = 0;
	totalAnswered = 0;
	
	//choose new mora
	randMora();
	
	//if practice mode, un-hide character
	if(!pracRadioButton.checked){
		document.getElementById("charSpan").className = "hide";
	}else{
		document.getElementById("charSpan").className = "";
	}
}

function randMora() {
	//Checkboxes for which mora are to be used
	var aChk = document.getElementById("achk"),
		kChk = document.getElementById("kchk"),
		sChk = document.getElementById("schk"),
		tChk = document.getElementById("tchk"),
		n1Chk = document.getElementById("n1chk"),
		hChk = document.getElementById("hchk"),
		mChk = document.getElementById("mchk"),
		yChk = document.getElementById("ychk"),
		rChk = document.getElementById("rchk"),
		wChk = document.getElementById("wchk"),
		n2Chk = document.getElementById("n2chk");
	//Checkboxes for which kana are to be used
	var hiraChk = document.getElementById("hira"),
		kataChk = document.getElementById("kata"),
		bothChk = document.getElementById("bothKana");
		
	function hiraRowAdd(){
	//Creating array of hiragana characters based on checkboxes
	var hiraArray = [];
	if(aChk.checked) hiraArray = hiraArray.concat(hira_a_row);
	if(kChk.checked) hiraArray = hiraArray.concat(hira_k_row);
	if(sChk.checked) hiraArray = hiraArray.concat(hira_s_row);
	if(tChk.checked) hiraArray = hiraArray.concat(hira_t_row);
	if(n1Chk.checked) hiraArray = hiraArray.concat(hira_n1_row);
	if(hChk.checked) hiraArray = hiraArray.concat(hira_h_row);
	if(mChk.checked) hiraArray = hiraArray.concat(hira_m_row);
	if(yChk.checked) hiraArray = hiraArray.concat(hira_y_row);
	if(rChk.checked) hiraArray = hiraArray.concat(hira_r_row);
	if(wChk.checked) hiraArray = hiraArray.concat(hira_w_row);
	if(n2Chk.checked) hiraArray = hiraArray.concat(hira_n2_row);
	return hiraArray;
	}
	function kataRowAdd(){
	//Creating array of katakana characters based on checkboxes
	var kataArray = [];
	if(aChk.checked) kataArray = kataArray.concat(kata_a_row);
	if(kChk.checked) kataArray = kataArray.concat(kata_k_row);
	if(sChk.checked) kataArray = kataArray.concat(kata_s_row);
	if(tChk.checked) kataArray = kataArray.concat(kata_t_row);
	if(n1Chk.checked) kataArray = kataArray.concat(kata_n1_row);
	if(hChk.checked) kataArray = kataArray.concat(kata_h_row);
	if(mChk.checked) kataArray = kataArray.concat(kata_m_row);
	if(yChk.checked) kataArray = kataArray.concat(kata_y_row);
	if(rChk.checked) kataArray = kataArray.concat(kata_r_row);
	if(wChk.checked) kataArray = kataArray.concat(kata_w_row);
	if(n2Chk.checked) kataArray = kataArray.concat(kata_n2_row);
	return kataArray;
	}
	function alphRowAdd(kana){
	//Creating array of romajī based on checkboxes
	var alphArray = [];
	if(aChk.checked) alphArray = alphArray.concat(alpha_a_row);
	if(kChk.checked) alphArray = alphArray.concat(alpha_k_row);
	if(sChk.checked) alphArray = alphArray.concat(alpha_s_row);
	if(tChk.checked) alphArray = alphArray.concat(alpha_t_row);
	if(n1Chk.checked) alphArray = alphArray.concat(alpha_n1_row);
	if(hChk.checked) alphArray = alphArray.concat(alpha_h_row);
	if(mChk.checked) alphArray = alphArray.concat(alpha_m_row);
	if(yChk.checked) alphArray = alphArray.concat(alpha_y_row);
	if(rChk.checked) alphArray = alphArray.concat(alpha_r_row);
	//ヲ(wo) is mostly unused in katakana, so not incl. in program
	if(wChk.checked){
		if(kana === "hira"){
			alphArray = alphArray.concat(alpha_w_row);
		}else if(kana === "kata"){
			alphArray = alphArray.concat(alpha_w_row[0]);
		}
	}
	if(n2Chk.checked) alphArray = alphArray.concat(alpha_n2_row);
	return alphArray;
	}
	//sets up array for other functions
	function getArray(){
	var fullArray = [],
		moraArray = [],
		alphanumArray = [];
	if(hiraChk.checked){
		fullArray[0] = hiraRowAdd();
		console.log(hiraRowAdd());
		fullArray[1] = alphRowAdd("hira");
	}else if(kataChk.checked){
		fullArray[0] = kataRowAdd();
		console.log(kataRowAdd());
		fullArray[1] = alphRowAdd("kata");
	}else if(bothChk.checked){
		moraArray = moraArray.concat(hiraRowAdd()).concat(kataRowAdd());
		fullArray[0] = moraArray;
		alphanumArray = alphanumArray.concat(alphRowAdd("hira")).concat(alphRowAdd("kata"));
		fullArray[1] = alphanumArray;
		//console.log(fullArray[0]);
		//console.log(fullArray[1]);
	}
	return fullArray;
	}
	var array = getArray();
	//clear canvas
	ctx.clearRect(0,0,w,h);
	//choose random mora from array
	currMoraNumber = Math.floor(Math.random()*array[0].length);
	//set storage variables
	currMoraSym = array[0][currMoraNumber];
	currMoraAlph = array[1][currMoraNumber];
	//show user which mora and set right box character
	document.getElementById("charSpan").innerHTML = currMoraSym;
	document.getElementById("currMora").innerHTML = currMoraAlph;
	//determine which kana the current character is part of
	if(hiraChk.checked){
		document.getElementById("currKana").innerHTML = "Hiragana";
	}else if(kataChk.checked){
		document.getElementById("currKana").innerHTML = "Katakana";
	}else if(currMoraNumber <= (array[0].length/2)){
		document.getElementById("currKana").innerHTML = "Hiragana";
	}else{
		document.getElementById("currKana").innerHTML = "Katakana";
	}
}

function skipMora() {
	validate("wrong");
}

//show mora's character
function checkMora(){
	var charSpan = document.getElementById("charSpan");
	charSpan.className  =  "";
}

//increment correct & total depending on state
function validate(state){
	//getting counters, practice button
	var totalSpan = document.getElementById("totalNum"),
		correctSpan = document.getElementById("correctNum"),
		practiceRadio = document.getElementById("prac");
		
	//increments total right answers if correct
	if(state==="correct"){
		totalCorrect+=1;
		totalAnswered+=1;
		console.log(totalCorrect+", "+totalAnswered);
		totalSpan.innerHTML = totalAnswered;
		correctSpan.innerHTML = totalCorrect;
	}
	else if(state==="wrong"){
		totalAnswered+=1;
		console.log(totalCorrect+", "+totalAnswered);
		totalSpan.innerHTML = totalAnswered;
	}
	else{
		//debug message
		console.log("This shouldn't happen");
	}
	//if practice mode, then don't hide character
	if(!practiceRadio.checked){
		document.getElementById("charSpan").className = "hide";
	}
	//after incrementing total (and/or correct), select next mora 
	randMora();
}