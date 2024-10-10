<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> <!-- Specify the character encoding for the document -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive design -->
    <title>Ayushmaan's Portfolio</title> <!-- Title of the webpage -->
    <link rel="stylesheet" href="styles.css"> <!-- Link to the external CSS file -->
    <link href="https://fonts.googleapis.com/css2?family=Harlow+Solid&display=swap" rel="stylesheet"> <!-- Import Harlow Solid font -->
</head>
<body>

<header class="header"> <!-- Header section for the main title -->
    <div class="header-content"> <!-- Container for header content -->
        <h1>Hey, I am Ayushmaan.</h1> <!-- Main heading -->
        <p>Web Developer who likes building fast and innovative products.</p> <!-- Subtitle -->
        <a href="#about" class="btn about-me">About Me</a> <!-- Link to the About Me section styled as a button -->
    </div>
</header>

<section id="about"> <!-- About Me section -->
    <h2 class="about-me-title">About Me</h2> <!-- Title -->
    <p>Developing for the last one year with a great drive in the subject.</p> <!-- Description -->

    <div class="about-details"> <!-- Container for the detailed about me section -->
        <div class="left-column"> <!-- Left column for personal details -->
            <h3>Get to know me!</h3> <!-- Subheading -->
            <p>I'm a software developer proficient in JavaScript and the web. I'm passionate about web performance, accessibility, mentoring, user & developer experience.</p>
            <p>I follow a digital minimalism mindset, using technology to improve people's lives and provide value for businesses.</p>
            <p>In my free time, I build side projects and like exploring new technologies. You can see some of my work in the projects section below.</p>
            <p>I'm open to collaboration opportunities where I can contribute, learn, and grow. Don't hesitate to reach out if you think my skills and experience are a good fit for your next project.</p>
            <a href="#projects" class="btn about-projects">Projects</a> <!-- Link to the Projects section styled as a button -->
        </div>

        <div class="right-column"> <!-- Right column for toolkit -->
            <h3>My Toolkit</h3> <!-- Subheading -->
            <div class="toolkit-buttons"> <!-- Container for toolkit buttons -->
                <a href="#" class="btn toolkit-button">JavaScript</a> <!-- Button for JavaScript -->
                <a href="#" class="btn toolkit-button">Next.Js</a> <!-- Button for Next.js -->
                <a href="#" class="btn toolkit-button">React.Js</a> <!-- Button for React.js -->
                <a href="#" class="btn toolkit-button">Node.Js</a> <!-- Button for Node.js -->
                <a href="#" class="btn toolkit-button">Typescript</a> <!-- Button for TypeScript -->
                <a href="#" class="btn toolkit-button">CSS</a> <!-- Button for CSS -->
                <a href="#" class="btn toolkit-button">Git</a> <!-- Button for Git -->
            </div>
        </div>
    </div>
</section>

<h2 id="projects" class="underline-heading">Projects</h2> <!-- Projects section heading -->

<section id="contact"> <!-- Contact Me section -->
    <h2>Contact Me</h2> <!-- Subheading -->
    <div class="contact-form"> <!-- Container for contact form -->
        <div class="form-group"> <!-- Group for title input -->
            <label for="title">Title</label> <!-- Label for title input -->
            <input type="text" id="title" placeholder="Enter your title" required> <!-- Input field for title -->
        </div>
        <div class="form-group"> <!-- Group for message textarea -->
            <label for="message">Write Message</label> <!-- Label for message textarea -->
            <textarea id="message" placeholder="Write your message here" required></textarea> <!-- Textarea for message -->
        </div>
        <button class="btn submit-button">Submit</button> <!-- Submit button -->
    </div>
</section>

<script src="script.js"></script> <!-- Link to the external JavaScript file -->
</body>
</html>
