var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);




var bio = {
	"name" : "praman",
	"age" : 22,
	"ghar" : "kathmandu",
	"contacts":{
		"mobile": "333455",
		"github": "tutuman",
	}
	"skills":[
	"he thinks he is awesome", "anything can be skills"
	],
	"bioPic": "images/fry.jpg"

}

$("#main").append(bio.name);

var work = {};
work.position = "Course Developer";
work.employer = "Udacity";
work.years = 3;
	

var education1 = {}
educaiton["name"] = "Maharishi University";
educaiton["years"] = 2013;

$("#main").append(work["position"]);
$("#main").append(education.name);

var education = {
	"School": [
	{
		"name": "maharishi High School",
		"years": 3
	},
	{
		"name": "maharishi University",
		"years": 4
	}
	],
	"online Courses":[
	{
		"title": "JavaScript",
		"School": "Udacity"
	}
	]


}
