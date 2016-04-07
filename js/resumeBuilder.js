var bio = {
	"name": "Praman Hamal",
	"role": "Web Developer",
	"contacts":{
		"mobile": "641 451 3004",
		"email": "mumpraman@gmail.com",
		"github": "tutuman",
		"twitter": "tutuman",
		"location": "Fairfield, IA"
	},
	"welcomeMessage": "Welcome to my website",
	"skills":[
		"Sports",
		"Music",
		"Funny"
	],
	"biopic": "images/resumephoto.jpg"
}

var projects = {
	"projects":[
		{
			"title": "Sample Project 1",
			"dates": "01-11-2013",
			"description": "It was really an awesome project",
			"images": [ "images/horses.jpg", "images/postcard.jpg" ]
		} 
	]
}

var work = {
	"jobs":[
		{
			"employer": "Pizza bolliz",
			"title": "Pizza maker",
			"location": "D.C",
			"dates": 2010,
			"description": "first experience"
		},
		{
			"employer": "Student Life",
			"title": "Resident Advisor",
			"location": "Fairfield, IA",
			"dates": 2014,
			"description": "learned a lot"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Maharishi University",
			"location": "Fairfield, IA",
			"degree": "Computer Science",
			"dates": "11-11-2017",
			"url": "mum.org"
		},
		{
			"name": "MIT",
			"location": "Boston, MA",
			"degree": "Economics",
			"dates": "11-11-2030",
			"url": "web.mit.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "udacity",
			"school": "Goergia Tech",
			"dates": "11-11-2016",
			"url": "udacity.com"
		
		}
	]
}


$(document).ready(function() {


	function displayHead(){  

		var replacedText = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(replacedText);

		var replacedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(replacedRole);

		var replacedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(replacedPic);

		var replacedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		replacedMobile = replacedMobile.replace("%contact%", "mobile");
		var replacedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var replacedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var replacedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var replacedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


		$("#topContacts").append(replacedEmail);
		$("#topContacts").append(replacedGitHub);
		$("#topContacts").append(replacedMobile);
		$("#topContacts").append(replacedTwitter);
		$("#topContacts").append(replacedLocation);
	}
	displayHead();



	function displayProject() {
	// 	$("#projects").append(HTMLprojectStart);

	// 	for(project in projects.projects){

	// 	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

	// 	$(".project-entry:last").append(formattedTitle);

	// 	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	// 	$(".project-entry:last").append(formattedDates);

	// 	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	// 	$(".project-entry:last").append(formattedDescription);

	// 	if(projects.projects[project].images.length > 0){
	// 		for (image in projects.projects[project].images){
	// 			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	// 			$(".project-entry:last").append(formattedImage);
	// 		}
	// 	}

	// }
	}
	displayProject();




		
	// }
	// function displayEducation(){

	// 	for(school in education.schools){
	// 		$("#education").append(HTMLschoolStart);

	// 		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		

	// 		//var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
	// 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	// 		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	// 		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].degree);
	// 		$(".education-entry:last").append(formattedName);
	// 		//$(".education-entry:last").append(formattedDegree);
	// 		$(".education-entry:last").append(formattedDates);
	// 		$(".education-entry:last").append(formattedMajor);

	// 	}
	// }
	// displayEducation();




	// function displayWork(){
	// for(var i=0; i < work.jobs.length; i++){
	// 	//console.log("work.jobs length " + work.jobs.length);
	// 	$("#workExperience").append(HTMLworkStart);
		

	// 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	// 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	// 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	// 	$(".work-entry:last").append(formattedEmployerTitle);

	// 	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	// 	$(".work-entry:last").append(formattedDates);
	// 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	// 	$(".work-entry:last").append(formattedDescription);

	// }
	// }
	// displayWork();


	$("#mapDiv").append(googleMap);


	// function inName(name){
	// 	name = name.trim().split(" ");
	// 	console.log(name);
	// 	name[1] = name[1].toUpperCase();
	// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	// 	return name[0] + " " +name[1];
	// }
	// //$("#main").append(internationalizeButton);
	// console.log(inName("praman hamal"));
	// /*
	// projects.display = function(){
	// 	for (project in projects.projects) {
	// 		$("#projects").append(HTMLprojectStart);

	// 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	// 		$(".project-entry: last").append(formattedTitle);

	// 		var formattedDates = HTMLprojectsDates.replace("%data%", projects.projects[project].dates);
	// 		$(".project-entry: last").append(formattedDates);

	// 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	// 		$(".project-entry: last").append(formattedDescription);

	// 		if(projects.projects[project].images.length > 0){
	// 			for (image in projects.projects[project].images){
	// 				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	// 				$(".project-entry: last").append(formattedImage);


});