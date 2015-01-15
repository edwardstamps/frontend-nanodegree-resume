
var name = "Edward Stamps";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "iOS Developer & SAAS Sales Professional"

var formattedRole = HTMLheaderRole.replace("%data%", role)


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = 
["Business Development", "iOS Development", "Capital Markets", "Sales"];

var bio = {
	"name" : "Edward Stamps",
	"role" : "iOS Developer & SAAS Sales Professional",
	"contacts" : 
		{
		"mobile": "602-571-5623",
		"email": "williamedwardstamps@yahoo.com",
		"github": "www.github.com",
		"location": "New York"
		},
	"biopic": "images/edw.jpg",
	"welcomemessage" : "Howdy, Thanks for Stoppin By!",
	"skills" : skills
	
}

bio.location="New York";



var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);

var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedImage);

var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);
$("#header").append(formattedWelcome);



var work = {
	"jobs" : [
		{
			"employer": "ClearSlide",
			"title" : "Account Executive",
			"location": "San Francisco, CA",
			"dates": "2013",
			"description": "Selling SAAS"
		},
		{
			"employer": "FXCM",
			"title": "FX Sales",
			"location": "San Francisco, CA",
			"dates":"2012",
			"description": "Selling access to FX Markets"
		}
	]
}

var education = {
	"schools" : [
		{ 
			"name": "The University of Arizona",
			"location": "Tucson, AZ",
			"degree": "Bachelor of Business Administration",
			"major": "Finance",
			"dates": "2007-2011",
			"url": "www.arizona.edu"
		}
	]
,
	"online": [
		{
			"title": "Intro to Computer Science",
			"school": "Udacity.com",
			"degree": "Computer Science",
			"dates": "January 2015",
			"location": "Austin, TX",
			"url": "www.udacity.com",
			"Classes": ["Swift", "Python", "HTML5", "Java Script", "Objective Programming, Apps, Web"]
		}
	]
}

var projects = {
	"projects": [
		{
			"title" : "Pitch Perfect",
			"dates": "January 2015",
			"description": "For Completion of iOS introduction course",
			"url": "www.github.com"
		},
		{
			"title" : "UofA",
			"dates": "January 2015",
			"description": "For Fun & Bear Down",
			"url": "www.github.com"
		}
	]
}




if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%", bio.skills[4]);

}

function displayEducation(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedschool=HTMLschoolName.replace("%data%", education.schools[school].name);
		var formatteddegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDegree = formattedschool+ formatteddegree;
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedAttend=HTMLschoolDates.replace("%data%", education.schools[school].dates)
		$(".education-entry:last").append(formattedAttend);
		var formattedMajor=HTMLschoolMajor.replace("%data%", education.schools[school].major)
		$(".education-entry:last").append(formattedMajor);
	}

	for (online in education.online) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);
		

		


		if (education.online[online].Classes.length>0){
			
			var formattedcourses1 = HTMLonlineTitle.replace("%data%", education.online[online].Classes[0]);
			$(".education-entry:last").append(formattedcourses1);
			formattedcourses = HTMLonlineTitle.replace("%data%", education.online[online].Classes[1]);
			$(".education-entry:last").append(formattedcourses);
			formattedcourses = HTMLonlineTitle.replace("%data%", education.online[online].Classes[2]);
			$(".education-entry:last").append(formattedcourses);
			formattedcourses = HTMLonlineTitle.replace("%data%", education.online[online].Classes[3]);
			$(".education-entry:last").append(formattedcourses);
			formattedcourses = HTMLonlineTitle.replace("%data%", education.online[online].Classes[4]);
			$(".education-entry:last").append(formattedcourses);
		}



	}
}

displayEducation();

function displayWork(){

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}	
}

displayWork();

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});


$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);


		//if (projects.projects[project].images.length>0) {
		//	for (image in projects.projects[project].images) {
		//		var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		//		$(".project-entry:last").append(formatedImage);
		//	}
		//}
	}
	
}

projects.display();

$("#mapDiv").append(googleMap);