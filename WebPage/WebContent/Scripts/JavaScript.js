alert("Warning Bourne")

function operation(){
	area=document.getElementById("mydiv");
	box=area.getElementsByTagName("input");
	para=document.getElementsByTagName("p");
	para[0].innerHTML=box[0].value;
	para[0].className="newclass";
	para[1].innerHTML=box[1].value;
	para[2].innerHTML=box[2].value;
	}