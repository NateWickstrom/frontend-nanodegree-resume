
var bio = {

    name: "Philip J. Fry",
    role: "Delivery Boy",
    contacts: {
        mobile: "(415) 656-7736",
        email: "philip.fry@example.com",
        github: "philipfry",
        twitter: "@philipfry",
        location: "New York"
    },
    welcomeMessage: "Welcome to the jungle!",
    skills: ["being awesome, eating, sleeping"],
    biopic: "images/fry.jpg",

    display: function () {

        // Builder Header
        var header = $("#header");

        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        header.prepend(formattedRole);
        header.prepend(formattedName);

        // Builder Contacts
        var contacts = $("#topContacts");

        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

        contacts.append(formattedMobile);
        contacts.append(formattedEmail);
        contacts.append(formattedGithub);
        contacts.append(formattedTwitter);
        contacts.append(formattedLocation);

        // build bio picture
        var formattedImage = HTMLbioPic.replace("%data%", this.biopic);
        header.append(formattedImage);

        // build welcome
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        header.append(formattedWelcome);

        // build skills
        header.append(HTMLskillsStart);
        var skillsList = $("ul#skills");

        for(var i = 0; i < this.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
            skillsList.append(formattedSkill);
        }

    }

};

var work = {
    jobs: [
        {
            employer: "Planet Express",
            title: "Planet Express Delivery Boy, First Class",
            location: "Brooklyn, NY",
            dates: "January 3000 - Present",
            description: "Responsible for driving a van or lighter vehicle to deliver and pick up merchandise or packages. Takes orders, intercepts package, and delivers to appropriate person. Obtains signature."
        },
        {
            employer: "Panucci's Pizza",
            title: "Delivery Boy",
            location: "Brooklyn, NY",
            dates: "June 1992 - Dec, 1999",
            description: "A pizza delivery driver distributes pizzas and related products by driving a vehicle, often a light truck, van, car or bike. They pick up pizzas from the franchise, load pizza container and deliver pizza once they reach their destination."
        }
    ],

    display: function () {

        // build work experience title
        var workExperience = $("#workExperience");
        workExperience.append(HTMLworkStart);
        workExperience = $(".work-entry");

        // build jobs
        for(var i = 0; i < this.jobs.length; i++) {
            var job = this.jobs[i];

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            workExperience.append(formattedEmployer + formattedTitle);
            workExperience.append(formattedDates);
            workExperience.append(formattedLocation);
            workExperience.append(formattedDescription);
        }
    }
};

var education = {

    schools: [
        {
            name: "New York University",
            location: "New York, NY",
            degree: "B.S. Mathematics, MS Physics, Ph.D Physics",
            majors: "Mathematics, Applied Physics",
            date: 1997,
            url: "http://www.nyu.edu/"
        }
    ],

    onlineCourses: [
        {
            title: "Ultimate Business Advantage",
            school: "Tony Robins Online Courses",
            date: 1997,
            url: "https://goo.gl/K0D81W"
        }
    ],

    display: function () {
        var education = $("#education");

        // build schools info
        for(var i = 0; i < this.schools.length; i++) {
            var school = this.schools[i];

            education.append(HTMLschoolStart);
            var schoolBlock =  $(".education-entry").last();

            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.date);
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

            schoolBlock.append(formattedSchoolName + formattedSchoolDegree);
            schoolBlock.append(formattedSchoolDate);
            schoolBlock.append(formattedSchoolMajors);
            schoolBlock.append(formattedSchoolLocation);
        }

        education.append(HTMLonlineClasses);

        // build online courses info
        for(var j = 0; i < this.onlineCourses.length; j++) {
            var onlineCourse = this.onlineCourses[j];

            education.append(HTMLschoolStart);
            var onlineCourseBlock =  $(".education-entry").last();

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourse.date);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);

            onlineCourseBlock.append(formattedOnlineTitle + formattedOnlineSchool);
            onlineCourseBlock.append(formattedOnlineDate);
            onlineCourseBlock.append(formattedOnlineUrl);
        }
    }
};

var other = {

    projects: [
        {
            title: "Atomic Pizza",
            dates: "3001",
            description: "Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy. The modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular in many areas of the world.",
            images: "http://goo.gl/K7guUr"
        }
    ],

    display: function () {
        var projectsBlock = $("#projects");

        // build project info
        for(var i = 0; i < this.projects.length; i++) {
            var project = this.projects[i];

            projectsBlock.append(HTMLprojectStart);
            var projectEntry =  $(".project-entry").last();

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);

            projectEntry.append(formattedProjectTitle);
            projectEntry.append(formattedProjectDates);
            projectEntry.append(formattedProjectDescription);
            projectEntry.append(formattedProjectImage);
        }
    }
};

var resumeBuilder = {

    build: function () {
        bio.display();
        work.display();
        other.display();
        education.display();

        $("#mapDiv").append(googleMap);
    }
};

resumeBuilder.build();



