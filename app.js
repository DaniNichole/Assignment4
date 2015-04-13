var tabs = Ti.UI.createTabGroup();

var winLand = Ti.UI.createWindow({
	backgroundColor: '#00FFFF'
});

var tab1 = Ti.UI.createTab({
	title: 'Contact Info',
	window: winLand	
});

var viewLand = Ti.UI.createView({
	backgroundColor: '#00E6B8',
	top: '20%',
	height: '15%'
});

var labelName = Ti.UI.createLabel({
	color: '#000000',
	font: {fontSize: '25dp'},
	text: 'Sarah Brady',
	top: '0%'
});

var labelUni = Ti.UI.createLabel({
	color: '#000000',
	font: { fontSize: '15dp'},
	text: 'University of Idaho',
	top: '38%'
});

var labelMajor = Ti.UI.createLabel({
	color: '#000000',
	font: { fontSize: '25dp'},
	top: '66%',
	text: 'Information Systems and Operations Management'
});

var contactData = [{ title: 'Phone: 425.737.5070', color: '#000000'}, {title:'E-mail: Sarah.Brady06@gmail.com', color: '#000000'}];

var contactTable = Ti.UI.createTableView({
	data: contactData,
	headerTitle: 'Contact Information',
	backgroundColor: '#00E6B8',
	top: '55%',
	height: '23%'
});


var winPort =Ti.UI.createWindow({
	backgroundColor: '#00E6B8'
});

var tab2 = Ti.UI.createTab({
	title: 'Portfolio',
	window: winPort
});

var viewPort = Ti.UI.createView({
	backgroundColor: '#00E6B8'
});

var imageview = Ti.UI.createImageView({
	width: '20%',
	height: '20%',
	layout: 'vertical',	
	top: 5, 
	});

imageview.image = '\dogwithhat.jpeg';

viewPort.add(imageview);

var labelPort = Ti.UI.createLabel({
	font: {fontSize: '25dp'},
	text: 'My name is Sarah Brady, I am junior in the College of Business and Economics at the University of Idaho, where I am majoring in '+
	'Information Systems and Operations Management. I plan to graduate Fall of 2016. I am hoping to get involved in the data analysis industry when I graduate. '+
	'I have been involved in Delta Zeta as the Ways and Means Chair and Lead for the VP of Recruitment. I also have experience in multiple leadership positions at the VandalStore Starbucks and in internships.'
});

viewLand.add(labelName);
viewLand.add(labelUni);
viewLand.add(labelMajor);
winLand.add(viewLand);
winLand.add(contactTable);
viewPort.add(labelPort);
winPort.add(viewPort);
tabs.addTab(tab1);
tabs.addTab(tab2);
tabs.open();
