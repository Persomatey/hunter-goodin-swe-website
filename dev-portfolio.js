//#region Custom Modal

function OpenModal(isURL, path)
{
	var modal = document.getElementById("modal");
	modal.style.display = "block";
	var span = document.getElementById("span");
	
	if(isURL)
	{
		document.getElementById("modalID").innerHTML = `<iframe width=100% height=100% src="https://www.youtube.com/embed/${path} frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
	}
	else
	{
		// OpenModal(false, 'images/devphotos/DDGameplay1.png');"
		document.getElementById("modalID").innerHTML = `<img style="width:100%; height:100%; object-fit:contain; margin:auto;" src="./${path}">`; 
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() 
	{
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) 
	{
		if (event.target == modal) 
		{
			modal.style.display = "none";
		}
	}
}

//#endregion Custom Modal

// #region Loading HTML

function LoadProject(project)
{
	console.log(`Loading ${project}`);

	fetch(`./projects/${project}.html`)
	.then(response => response.text())
	.then(text => document.getElementById(project).innerHTML = text); 
}

function LoadHeader(id)
{
	if (document.getElementsByTagName("title")[0] != "Hunter Goodin")
	{
		console.log("Loading Header"); 

		fetch('./header.html')
		.then(response => response.text())
		.then(text => document.getElementById('header').innerHTML = text)
		.then(() => ChangeHeader(id));
	}
}

function ChangeHeader(id)
{
	if (id)
	{
		var str = document.getElementById(id).innerHTML; 
		document.getElementById(id).innerHTML = "<C>" + str.substring(3, str.length - 4) + "</C>"; 
	}
}

// #endregion Loading HTML

// #region Utility Functions

function UnselectAllButtons(proj, buttonCount)
{
	for (var i = 1; i <= buttonCount; i++)
	{
		console.log(`unselecting But${proj}${i}`); 
		document.getElementById(`But${proj}${i}`).className = "buttonUnselected";
	}
}

function CopyEmailAddress() 
{
	navigator.clipboard.writeText("huntercgoodin@gmail.com");

	document.getElementById("myTooltip").innerHTML = "Copied email address";
}

function HoverOverEmailAddress() 
{
	document.getElementById("myTooltip").innerHTML = "Copy to clipboard";
}

// #endregion Utility Functions

// #region Google Captcha Stuff

var boolCap = false; 

function CheckRecaptcha() 
{
	var response = grecaptcha.getResponse();
	if(response.length == 0) 
	{
		boolCap = false; 
	}
	else
	{
		boolCap = true; 
	}
}

function AfterSend()
{
	var error = ""; 
	var name = " 'Name' ";
	var email = " 'Email' "; 
	var message = " 'Message' "; 
	var cap = " 'ReCaptcha' "; 
	var count = 0; 

	if(document.forms["gform"]["entry.246933771"].value == "")
	{
		error = error + name; 
		count++; 
	}

	if(document.forms["gform"]["entry.1580348872"].value == "")
	{
		error = error + email; 
		count++;
	}

	if(document.forms["gform"]["entry.1579448101"].value == "")
	{
		error = error + message; 
		count++;
	}

	if(boolCap == false)
	{
		error = error + cap; 
		count ++; 
	}

	if(count == 0)
	{
		document.getElementById("gform").reset();
		document.getElementById("feedback").innerHTML = "<font color='#45a049'><b>Message Sent!</b></font>";
	}
	else if(count == 1)
	{
		document.getElementById("feedback").innerHTML = "<font color='#ff4242'><b> " + error + " is a required field </b></font>";
	}
	else if(count > 1)
	{
		document.getElementById("feedback").innerHTML = "<font color='#ff4242'><b> " + error + " are required fields </b></font>";
	}
}

// #endregion Google Captcha Stuff

// #region Portfolio Functions

function ChangeImagePortfolioAllProjects()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio1").className = "buttonNewSelected";

	let ids = [
		"unityinputdevicechecker",
		"unitypackagescicd",
		"unitycicd",
		"magicalgirl",
		"dracdef", 
		"spellslinger",
		"roguerealms",
		"horrorseries",
		"carn",
		"skyjel", 
		"apollo",
		"jsonserializerplugin",
		"dua",
		"cryptoalertbot",
		"funem", 
		"musicchan",
		"keyfinder",
		"helation",
		"rewoundrunningremix",
		"legendoffantasy", 
		"spaceshooter9000",
		"factory",
		"codblops3" 
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}
function ChangeImagePortfolioAllVideoGames()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio2").className = "buttonNewSelected";

	let ids = [
		"magicalgirl",
		"dracdef", 
		"spellslinger",
		"roguerealms",
		"horrorseries",
		"carn",
		"skyjel", 
		"apollo",
		"dua",
		"funem", 
		"keyfinder",
		"helation",
		"rewoundrunningremix",
		"legendoffantasy", 
		"spaceshooter9000",
		"factory",
		"codblops3" 
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}
function ChangeImagePortfolioUnityGames()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio3").className = "buttonNewSelected";

	let ids = [
		"dracdef", 
		"roguerealms",
		"horrorseries",
		"carn",
		"skyjel", 
		"apollo",
		"dua",
		"funem", 
		"rewoundrunningremix",
		"legendoffantasy", 
		"spaceshooter9000",
		"factory"
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}
function ChangeImagePortfolioUnrealGames()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio4").className = "buttonNewSelected";

	let ids = [
		"spellslinger",
		"dua",
		"keyfinder",
		"helation"
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}
function ChangeImagePortfolioOtherGames()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio5").className = "buttonNewSelected";

	let ids = [
		"magicalgirl",
		"dua",
		"codblops3" 
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}
function ChangeImagePortfolioUnityPackages()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio6").className = "buttonNewSelected";

	let ids = [
		"unityinputdevicechecker",
		"unitypackagescicd",
		"unitycicd",
		"jsonserializerplugin"
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}
function ChangeImagePortfolioDiscordBots()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio7").className = "buttonNewSelected";

	let ids = [
		"cryptoalertbot",
		"musicchan"
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}
function ChangeImagePortfolioXRLBE()
{
	UnselectAllButtons(`Portfolio`, 8);
	document.getElementById("ButPortfolio8").className = "buttonNewSelected";

	let ids = [
		"carn",
		"apollo",
		"dua"
	];

	let str = ""; 

	for (let i = 0; i < ids.length; i++) 
	{
		str += `<div id="${ids[i]}"></div>`; 

		if (i != ids.length - 1)
		{
			str += `<hr/>`; 
		}
	}

	document.getElementById("loadedprojects").innerHTML = str;

	for (let i = 0; i < ids.length; i++) 
	{
		LoadProject(ids[i])
	}
}

// #endregion Portfolio Functions

// #region New Project Functions

function ChangeImageNewL()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew1").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunLogo.png">`; 
}
function ChangeImageNewI1()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew2").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunGameplay1.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay1.png');">`; 
}
function ChangeImageNewI2()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew3").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunGameplay2.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay2.png');">`; 
}
function ChangeImageNewVid()
{
	UnselectAllButtons(`New`, 4);
	document.getElementById("ButNew4").className = "buttonNewSelected";
	document.getElementById("NewMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunThumb.png" onclick="OpenModal(true, 'QUR4Pki2UoU');">`; 

}

// #endregion New Project Functions

// #region Saffia's Magically Miserable 9-5 Functions

function ChangeImageSMML()
{
	UnselectAllButtons(`SMM`, 3);
	document.getElementById("ButSMM1").className = "buttonSMMSelected";
	document.getElementById("SMMMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SMM-Logo.png">`; 
}
function ChangeImageSMMI1()
{
	UnselectAllButtons(`SMM`, 3);
	document.getElementById("ButSMM2").className = "buttonSMMSelected";
	document.getElementById("SMMMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SMM-Gameplay1.png" onclick="OpenModal(false, 'images/devphotos/SMM-Gameplay1.png');">`; 
}
function ChangeImageSMMI2()
{
	UnselectAllButtons(`SMM`, 3);
	document.getElementById("ButSMM3").className = "buttonSMMSelected";
	document.getElementById("SMMMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SMM-Gameplay2.png" onclick="OpenModal(false, 'images/devphotos/SMM-Gameplay2.png');">`; 
}
function ChangeImageSMMVid() // Not using this one since I don't have a video yet 
{
	UnselectAllButtons(`SMM`, 3);
	document.getElementById("ButSMM4").className = "buttonSMMSelected";
	document.getElementById("SMMMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunThumb.png" onclick="OpenModal(true, 'QUR4Pki2UoU');">`; 

}

// #endregion Saffia's Magically Miserable 9-5 Functions

// #region Horror Series Functions

function ChangeImageHSL()
{
	UnselectAllButtons(`HS`, 4);
	document.getElementById("ButHS1").className = "buttonHSSelected";
	document.getElementById("HSMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/HSLogo.png">`; 
}
function ChangeImageHSI1()
{
	UnselectAllButtons(`HS`, 4);
	document.getElementById("ButHS2").className = "buttonHSSelected";
	document.getElementById("HSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/HSGameplay1.png" onclick="OpenModal(false, 'images/devphotos/HSGameplay1.png');">`; 
}
function ChangeImageHSI2()
{
	UnselectAllButtons(`HS`, 4);
	document.getElementById("ButHS3").className = "buttonHSSelected";
	document.getElementById("HSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/HSGameplay2.png" onclick="OpenModal(false, 'images/devphotos/HSGameplay2.png');">`; 
}
function ChangeImageHSVid()
{
	UnselectAllButtons(`HS`, 4);
	document.getElementById("ButHS4").className = "buttonHSSelected";
	document.getElementById("HSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/HSThumb.png" onclick="OpenModal(true, 'ao3sM3nEhcI');">`; 
}

// #endregion Horror Series Functions

// #region Draconic Defenders Functions

function ChangeImageDDL()
{
	UnselectAllButtons(`DD`, 3);
	document.getElementById("ButDD1").className = "buttonDDSelected";
	document.getElementById("DDMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/DDLogo.png">`; 
}
function ChangeImageDDI1()
{
	UnselectAllButtons(`DD`, 3);
	document.getElementById("ButDD2").className = "buttonDDSelected";
	document.getElementById("DDMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/DDGameplay1.png" onclick="OpenModal(false, 'images/devphotos/DDGameplay1.png');">`; 
}
function ChangeImageDDI2()
{
	UnselectAllButtons(`DD`, 3);
	document.getElementById("ButDD3").className = "buttonDDSelected";
	document.getElementById("DDMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/DDGameplay2.png" onclick="OpenModal(false, 'images/devphotos/DDGameplay2.png');">`; 
}
function ChangeImageDDVid()
{
	UnselectAllButtons(`DD`, 3);
	document.getElementById("ButDD4").className = "buttonDDSelected";
	document.getElementById("DDMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunThumb.png" onclick="OpenModal(true, 'QUR4Pki2UoU');">`; 

}

// #endregion Draconic Defenders Functions

// #region Spellslinger Functions

function ChangeImageSpSL()
{
	UnselectAllButtons(`SpS`, 3);
	document.getElementById("ButSpS1").className = "buttonSpSSelected";
	document.getElementById("SpSMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SpSLogo.png">`; 
}
function ChangeImageSpSI1()
{
	UnselectAllButtons(`SpS`, 3);
	document.getElementById("ButSpS2").className = "buttonSpSSelected";
	document.getElementById("SpSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SpSGameplay1.png" onclick="OpenModal(false, 'images/devphotos/SpSGameplay1.png');">`; 
}
function ChangeImageSpSI2()
{
	UnselectAllButtons(`SpS`, 3);
	document.getElementById("ButSpS3").className = "buttonSpSSelected";
	document.getElementById("SpSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SpSGameplay2.png" onclick="OpenModal(false, 'images/devphotos/SpSGameplay2.png');">`; 
}
function ChangeImageSpSVid()
{
	UnselectAllButtons(`SpS`, 3);
	document.getElementById("ButSpS4").className = "buttonSpSSelected";
	document.getElementById("SpSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/SpSThumb.png" onclick="OpenModal(true, 'QUR4Pki2UoU');">`; 

}

// #endregion Spellslinger Functions

// #region Carnival Functions

function ChangeImageCarnL()
{
	UnselectAllButtons(`Carn`, 2);
	document.getElementById("ButCarn1").className = "buttonCarnSelected";
	document.getElementById("CarnMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/CarnLogo.png">`; 
}
function ChangeImageCarnI1()
{
	UnselectAllButtons(`Carn`, 2);
	document.getElementById("ButCarn2").className = "buttonCarnSelected";
	document.getElementById("CarnMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/CarnGameplay1.png" onclick="OpenModal(false, 'images/devphotos/CarnGameplay1.png');">`; 
}

// #endregion Carnival Functions

// #region Sky Jellies Functions

function ChangeImageSkyJelL()
{
	UnselectAllButtons(`SkyJel`, 4);
	document.getElementById("ButSkyJel1").className = "buttonSkyJelSelected";
	document.getElementById("SkyJelMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SkyJelLogo.png">`; 
}
function ChangeImageSkyJelI1()
{
	UnselectAllButtons(`SkyJel`, 4);
	document.getElementById("ButSkyJel2").className = "buttonSkyJelSelected";
	document.getElementById("SkyJelMedia").innerHTML = `<input type="image" id="imageSkyJel" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SkyJelGameplay1.png" onclick="OpenModal(false, 'images/devphotos/SkyJelGameplay1.png');">`; 
}
function ChangeImageSkyJelI2()
{
	UnselectAllButtons(`SkyJel`, 4);
	document.getElementById("ButSkyJel3").className = "buttonSkyJelSelected";
	document.getElementById("SkyJelMedia").innerHTML = `<input type="image" id="imageSkyJel" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SkyJelGameplay2.png" onclick="OpenModal(false, 'images/devphotos/SkyJelGameplay2.png');">`; 
}
function ChangeImageSkyJelVid()
{
	UnselectAllButtons(`SkyJel`, 4);
	document.getElementById("ButSkyJel4").className = "buttonSkyJelSelected";
	document.getElementById("SkyJelMedia").innerHTML = `<input type="image" id="imageSkyJel" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/SkyJelThumb.png" onclick="OpenModal(true, 'JJ2_pkzjdfQ');">`; 

}

// #endregion Sky Jellies Functions

// #region Disney's Uncharted Adventure Functions

function ChangeImageDuaL()
{
	UnselectAllButtons(`Dua`, 3);
	document.getElementById("ButDua1").className = "buttonDuaSelected";
	document.getElementById("DuaMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/DuaLogo.png">`; 
}
function ChangeImageDuaI1()
{
	UnselectAllButtons(`Dua`, 3);
	document.getElementById("ButDua2").className = "buttonDuaSelected";
	document.getElementById("DuaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/DuaGameplay1.png" onclick="OpenModal(false, 'images/devphotos/DuaGameplay1.png');">`; 
}
function ChangeImageDuaVid()
{
	UnselectAllButtons(`Dua`, 3);
	document.getElementById("ButDua3").className = "buttonDuaSelected";
	document.getElementById("DuaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/DuaThumb.png" onclick="OpenModal(true, '6rsps98xzsg');">`; 

}

// #endregion Disney's Uncharted Adventure Functions

// #region Crypto Alert Bot Functions

function ChangeImageCryL()
{
	UnselectAllButtons(`Cry`, 2);
	document.getElementById("ButCry1").className = "buttonCrySelected";
	document.getElementById("CryMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="https://raw.githubusercontent.com/Persomatey/CryptoAlertBot/master/images/CryptoBotLogoBot.png">`; 
}

function ChangeImageCryVid()
{
	UnselectAllButtons(`Cry`, 2);
	document.getElementById("ButCry2").className = "buttonCrySelected";
	document.getElementById("CryMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/MusicThumb.png" onclick="OpenModal(true, '4t32sicjFYI');">`; 
}

// #endregion Crypto Alert Bot Functions

// #region Funem Functions

function ChangeImageFunemL()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem1").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunLogo.png">`; 
}
function ChangeImageFunemI1()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem2").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunGameplay1.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay1.png');">`; 
}
function ChangeImageFunemI2()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem3").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunGameplay2.png" onclick="OpenModal(false, 'images/devphotos/FunGameplay2.png');">`; 

}
function ChangeImageFunemVid()
{
	UnselectAllButtons(`Funem`, 4);
	document.getElementById("ButFunem4").className = "buttonFunemSelected";
	document.getElementById("FunemMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/FunThumb.png" onclick="OpenModal(true, 'QUR4Pki2UoU');">`; 
}

// #endregion Funem Functions

// #region Music-Chan Functions

function ChangeImageMusicL()
{
	UnselectAllButtons(`Music`, 2);
	document.getElementById("ButMusic1").className = "buttonMusicSelected";
	document.getElementById("MusicMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="https://raw.githubusercontent.com/Persomatey/MusicBot/master/LoFiGirl.png?token=AFRVWK7IVN2U7LXLBY5TFYDA6AHK4">`; 
}
function ChangeImageMusicVid()
{
	UnselectAllButtons(`Music`, 2);
	document.getElementById("ButMusic2").className = "buttonMusicSelected";
	document.getElementById("MusicMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/MusicThumb.png" onclick="OpenModal(true, '4t32sicjFYI');">`; 
}

// #endregion Music-Chan Functions

// #region Key Finder Functions

function ChangeImageKeyL()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey1").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/KeyLogo.png">`; 
}
function ChangeImageKeyI1()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey2").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/KeyGameplay1.png" onclick="OpenModal(false, 'images/devphotos/KeyGameplay1.png');">`; 
}
function ChangeImageKeyI2()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey3").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/KeyGameplay2.png" onclick="OpenModal(false, 'images/devphotos/KeyGameplay2.png');">`; 
}
function ChangeImageKeyVid()
{
	UnselectAllButtons(`Key`, 4);
	document.getElementById("ButKey4").className = "buttonKeySelected";
	document.getElementById("KeyMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/KeyThumb.png" onclick="OpenModal(true, 'w260kcveYuc');">`; 
}

// #endregion Key Finder Functions

// #region Helation Functions

function ChangeImageHelL()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel1").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<img style="width:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/HelLogo.png">`; 
}
function ChangeImageHelI1()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel2").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/HelGameplay1.png" onclick="OpenModal(false, 'images/devphotos/HelGameplay1.png');">`; 
}
function ChangeImageHelI2()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel3").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/HelGameplay2.png" onclick="OpenModal(false, 'images/devphotos/HelGameplay2.png');">`; 
}
function ChangeImageHelVid()
{
	UnselectAllButtons(`Hel`, 4);
	document.getElementById("ButHel4").className = "buttonHelSelected";
	document.getElementById("HelMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/HelThumb.png" onclick="OpenModal(true, 'SosAngzSoqQ');">`; 
}

// #endregion Helation Functions

// #region Rewound Running Remix Functions

function ChangeImageR3L()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR31").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/R3Logo.png">`; 
}
function ChangeImageR3I1()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR32").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/R3Gameplay1.png" onclick="OpenModal(false, 'images/devphotos/R3Gameplay1.png');">`; 
}
function ChangeImageR3I2()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR33").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/R3Gameplay2.png" onclick="OpenModal(false, 'images/devphotos/R3Gameplay2.png');">`; 
}
function ChangeImageR3Vid()
{
	UnselectAllButtons(`R3`, 4);
	document.getElementById("ButR34").className = "buttonR3Selected";
	document.getElementById("R3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/R3Thumb.png" onclick="OpenModal(true, '2l0JYAdxMpk');">`; 
}

// #endregion Rewound Running Remix Functions

// #region Legend of Fantasy Functions

function ChangeImageLoFL()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF1").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/LoFLogo.png">`; 
}
function ChangeImageLoFI1()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF2").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/LoFGameplay1.png" onclick="OpenModal(false, 'images/devphotos/LoFGameplay1.png');">`; 
}
function ChangeImageLoFI2()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF3").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/LoFGameplay2.png" onclick="OpenModal(false, 'images/devphotos/LoFGameplay2.png');">`; 

}
function ChangeImageLoFVid()
{
	UnselectAllButtons(`LoF`, 4);
	document.getElementById("ButLoF4").className = "buttonLoFSelected";
	document.getElementById("LoFMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/LoFThumb.png" onclick="OpenModal(true, 'DwehfYrfE_k');">`; 
}

// #endregion Legend of Fantasy Functions

// #region Space Shooter 9000 Functions

function ChangeImageSSL()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS1").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/SSLogo.png">`; 
}
function ChangeImageSSI1()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS2").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/SSGameplay1.png" onclick="OpenModal(false, 'images/devphotos/SSGameplay1.png');">`; 
}
function ChangeImageSSI2()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS3").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/SSGameplay2.png" onclick="OpenModal(false, 'images/devphotos/SSGameplay2.png');">`; 
}
function ChangeImageSSVid()
{
	UnselectAllButtons(`SS`, 4);
	document.getElementById("ButSS4").className = "buttonSSSelected";
	document.getElementById("SSMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/SSThumb.png" onclick="OpenModal(true, 'Z_3XtojWlSA');">`; 
}

// #endregion Space Shooter 9000 Functions

// #region Factory Functions

function ChangeImageFaL()
{
	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa1").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/FaLogo.png">`; 
}
function ChangeImageFaI1()
{
	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa2").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/FaGameplay1.png" onclick="OpenModal(false, 'images/devphotos/FaGameplay1.png');">`; 
}
function ChangeImageFaI2()
{
	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa3").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/FaGameplay2.png" onclick="OpenModal(false, 'images/devphotos/FaGameplay2.png');">`; 

}
function ChangeImageFaVid()
{

	UnselectAllButtons(`Fa`, 4);
	document.getElementById("ButFa4").className = "buttonFaSelected";
	document.getElementById("FaMedia").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/FaThumb.png" onclick="OpenModal(true, 'ESyvW9RUt9A');">`; 
}

// #endregion Factory Functions

// #region Black Ops III Functions

function ChangeImageBO3L()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO31").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<img style="width:20vw; height:20vw; object-fit:contain; margin-left:auto; margin-right:auto;" src="./images/devphotos/BO3Logo.png">`; 
}
function ChangeImageBO3I1()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO32").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/BO3Gameplay1.png" onclick="OpenModal(false, 'images/devphotos/BO3Gameplay1.png');">`; 
}
function ChangeImageBO3I2()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO33").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit: contain; margin-left: auto; margin-right: auto;" src="./images/devphotos/BO3Gameplay2.png" onclick="OpenModal(false, 'images/devphotos/BO3Gameplay2.png');">`; 
}
function ChangeImageBO3Vid()
{
	UnselectAllButtons(`BO3`, 4);
	document.getElementById("ButBO34").className = "buttonBO3Selected";
	document.getElementById("BO3Media").innerHTML = `<input type="image" id="imageKey" style="width:20vw; height:20vw; object-fit:cover; margin-left:auto; margin-right:auto;" src="./images/devphotos/BO3Thumb.png" onclick="OpenModal(true, 'GM2m9LG35N0');">`; 
}

// #endregion Factory Functions
