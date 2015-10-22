'use strict';

var bio = {

    'name' : 'Philip J. Fry',
    'role' : 'Delivery Boy',
    'contacts' : {
        'mobile' : '(415) 656-7736',
        'email' : 'philip.fry@example.com',
        'github' : 'philipfry',
        'twitter' : '@philipfry',
        'location' : 'New York'
    },
    'welcomeMessage' : 'Welcome to the jungle!',
    'skills' : ['being awesome', 'eating', 'sleeping'],
    'biopic' : 'images/fry.jpg',

    'display' : function () {

        // Build Header
        var header = $('#header');

        var formattedName = HTMLheaderName.replace('%data%', this.name);
        var formattedRole = HTMLheaderRole.replace('%data%', this.role);

        header.prepend(formattedRole);
        header.prepend(formattedName);

        // Build Contacts
        var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
        var formattedTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter);
        var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);

        $('ul#topContacts, ul#footerContacts')
            .append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

        // build bio picture
        var formattedImage = HTMLbioPic.replace('%data%', this.biopic);
        header.append(formattedImage);

        // build welcome
        var formattedWelcome = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
        header.append(formattedWelcome);

        // build skills
        header.append(HTMLskillsStart);
        var skillsList = $('ul#skills');

        this.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace('%data%', skill);
            skillsList.append(formattedSkill);
        });

    }

};

var work = {
    'jobs' : [
        {
            'employer' : 'Planet Express',
            'title' : 'Planet Express Delivery Boy, First Class',
            'location' : 'Brooklyn, NY',
            'dates' : 'January 3000 - Present',
            'description' : 'Responsible for driving a van or lighter vehicle to deliver and pick up merchandise or packages. Takes orders, intercepts package, and delivers to appropriate person. Obtains signature.'
        },
        {
            'employer' : 'Panucci\'s Pizza\'',
            'title' : 'Delivery Boy',
            'location' : 'Brooklyn, NY',
            'dates' : 'June 1992 - Dec, 1999',
            'description' : 'A pizza delivery driver distributes pizzas and related products by driving a vehicle, often a light truck, van, car or bike. They pick up pizzas from the franchise, load pizza container and deliver pizza once they reach their destination.'
        }
    ],

    'display' : function () {

        // build work experience title
        var workExperience = $('#workExperience');
        workExperience.append(HTMLworkStart);
        workExperience = $('.work-entry');

        // build jobs
        this.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedDates = HTMLworkDates.replace('%data%', job.dates);
            var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
            var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

            workExperience.append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
        });
    }
};

var education = {

    'schools' : [
        {
            'name' : 'New York University',
            'location' : 'New York, NY',
            'degree' : 'B.S. Mathematics, MS Physics, Ph.D Physics',
            'majors' : 'Mathematics, Applied Physics',
            'date' : 1997,
            'url' : 'http://www.nyu.edu/'
        }
    ],

    'onlineCourses' : [
        {
            'title' : 'Ultimate Business Advantage',
            'school' : 'Tony Robins Online Courses',
            'date' : 1997,
            'url' : 'https://goo.gl/K0D81W'
        }
    ],

    'display' : function () {
        var education = $('#education');

        // build schools info
        this.schools.forEach(function(school) {
            education.append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            var formattedSchoolDate = HTMLschoolDates.replace('%data%', school.date);
            var formattedSchoolMajors = HTMLschoolMajor.replace('%data%', school.majors);
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);

            var schoolBlock =  $('.education-entry').last();
            schoolBlock.append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDate, formattedSchoolMajors, formattedSchoolLocation);
        });

        education.append(HTMLonlineClasses);

        // build online courses info
        this.onlineCourses.forEach(function(onlineCourse) {
            education.append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
            var formattedOnlineDate = HTMLonlineDates.replace('%data%', onlineCourse.date);
            var formattedOnlineUrl = HTMLonlineURL.replace('%data%', onlineCourse.url);

            var onlineCourseBlock =  $('.education-entry').last();
            onlineCourseBlock.append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDate, formattedOnlineUrl);
        });
    }
};

var other = {

    'projects' : [
        {
            'title' : 'Atomic Pizza',
            'dates' : '3001',
            'description' : 'Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy. The modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular in many areas of the world.',
            'images' : 'http://goo.gl/K7guUr'
        }
    ],

    'display' : function () {
        var projectsBlock = $('#projects');

        // build project info
        this.projects.forEach(function(project) {
            projectsBlock.append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
            var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
            var formattedProjectImage = HTMLprojectImage.replace('%data%', project.images);

            var projectEntry =  $('.project-entry').last();
            projectEntry.append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
        });
    }
};

var resumeBuilder = {

    'build' : function () {
        bio.display();
        work.display();
        other.display();
        education.display();

        $('#mapDiv').append(googleMap);
    }
};

resumeBuilder.build();



