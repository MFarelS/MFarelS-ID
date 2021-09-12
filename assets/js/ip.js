window.setTimeout("getip()", 1000);
function getip(){
	var xhr=new XMLHttpRequest();
	var url='https://xteam.xyz/cekip';
	xhr.onloadend=function(){
		data = JSON.parse(this.responseText);
		document.getElementById("ip_anda").textContent = 'IP Anda : ' + data.response
	};
	xhr.open("GET",url,true);
	xhr.send();}