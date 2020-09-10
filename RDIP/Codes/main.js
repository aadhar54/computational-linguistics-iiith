/* Corpus array */
var eng1 = ["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"];
var eng2 = ["some students like to study in the night","at night some students like to study"];
var eng3 = ["John and Mary went to church","Mary and John went to church"];
var eng4 = ["John went to church after eating","after eating John went to church","John after eating went to church"];
var eng5 = ["did he go to market","he did go to market"];
var eng6 = ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"];
var eng7 = ["John goes to the library and studies","John studies and goes to the library"];
var eng8 = ["John ate an apple so did she","she ate an apple so did John"];
var eng9 = ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"];
var eng10 = ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"];

var hin1 = ["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम",];
var hin2 = ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"];
var hin3 = ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"];
var hin4 = ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"];
var hin5 = ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"];
var hin6 = ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"];
var hin7 = ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"];
/* ---------- */

var heading = document.getElementById('subhead');
var desc = document.getElementById('description');
var desc2 = document.getElementById('description2');

var select = document.getElementById('selection');
var seldesc = document.getElementById('selectiondesc');

function introshow(){
	heading.innerHTML = "Introduction"
	desc.innerHTML = "A sentence can become more complex, if more than one verb is present or by joining two sentences or words using conjunctions or by some other methods."
	desc2.innerHTML = "<br>In this experiment also, you will make more difficult sentences using the given words."
}
function theoryshow(){
	heading.innerHTML = "Theory";
	desc.innerHTML = "<u><b>Clause</b></U><br>A clause typically contains a subject noun phrase and a finite verb. Some languages allow subjects to be omitted. There are two types of subclauses:<ol><li>independent clause</li><li>subordinate clause</li></ol>Independent clause shows the complete meaning in it. For example: Ram eats. A subordinate clause is not a complete sentence. For example: because I am sick. Sentences can also be classified on the basis of clauses.";
	desc2.innerHTML = "<br>Classification on the basis of clauses are:<br><ol><li>A <b>simple sentence</b> consists of only one independent clause. There are no subordinate clauses.</li><li>A <b>compound sentence</b> consists of more than one independent clauses joined ny conjunctions or punctuations. There are no subordinate clauses.</li><li>A <b>complex sentence</b> consists of atleast one indpendent clause and a single subordinate clause</li><li>A <b>complex-compound sentence</b> consists of more than one independent clauses and atleast one of the independent clauses has one or more than one subordinate clauses</li></ol>"
}
function objectiveshow(){
	heading.innerHTML = "Objective";
	desc.innerHTML = "<br><hr><br><br>The objective of this experiment is to know how to form logically correct sentences from the given words.<br>";
	desc2.innerHTML = "<br><hr>";
}

function dropdownchange(){
	var x = document.getElementById('lang').value;
	if(x == 'select'){
		seldesc.innerHTML = "";
		desc.innerHTML = "";
	}
	if(x == 'english'){
		seldesc.innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>";
		desc.style.color = "blue";
		desc.innerHTML = "<center><i>(select the buttons in proper order)</i></center>"
	}
	if(x == 'hindi'){
		seldesc.innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>";
		desc.style.color = "blue";
		desc.innerHTML = "<center><i>(select the buttons in proper order)</i></center>"
	}
}


function experimentshow(){
	heading.innerHTML = "Experiment";
	desc.innerHTML = "";
	desc2.innerHTML = "";
}

function quizzesshow(){
	heading.innerHTML = "Quizzes";
	desc.innerHTML = "Which of these is a valid sentence?<ol><li>Ram came after lunch.</li><li>Ram came after having lunch.</li><li>Sleeping I saw a tiger.</li><li>I saw a sleeping tiger.</li><li>No Parking is allowed.</li></ol>";
	desc2.innerHTML = "<br><ol><li>खाते खाते राम सो गया</li><li>राम खाते खाते सो गया</li><li>राम खाता खाते सो गया</li><li>राम खाकर सो गया</li><li>राम और श्याम ने भी खाना खाया</li><li>राम ने और श्याम भी खाना खाया</li></ol>"
}
function procedureshow(){
	heading.innerHTML = "Procedure";
	desc.innerHTML = "<b><u>STEP 1:</u></b> Select a language which you know better<br><b><u>STEP 2:</u></b> Select the buttons which has words written on it, in a proper order<br><b><u>OUTPUT:</u></b> Group of words in a selected order will be shown<br>";
	desc2.innerHTML = "<b><u>NOTE:</u></b><ol><li>If a wrong sentence is formed, <button>Re-form the sentence</button> is available for re-setting.</li><li>You can check whether the formed sentence is a valid or not by clicking <button>Check the correctness of this sentence</button> </li><li>For a wrong sentence, you can get the correct sentence by clicking <button>Get correct sentence</button> </li></ol>"
} 