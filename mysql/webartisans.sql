-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 12:04 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webartisans`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `ID` int(11) NOT NULL,
  `MESSAGE` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `PHONE` varchar(255) DEFAULT NULL,
  `POSTEDTIME` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`ID`, `MESSAGE`, `NAME`, `EMAIL`, `PHONE`, `POSTEDTIME`) VALUES
(1, 'This is a feedback message... Enhance user experience...', 'Eric Steven', 'ericsteven@gmail.com', '0123456789', '2023-04-29 23:21:47'),
(2, 'This is second feedback... Web User experience is about web blablabla then blablabla', 'MAYFIED', 'mayfied@gmail.com', '0145698237', '2023-05-20 18:54:12'),
(3, 'Keep in mind that Chart.js will respect the dimensions you provide, so make sure to adjust the values to suit your layout requirements.', 'Vivian Lai', 'vivian@gmail.com', '0126548937', '2023-05-17 03:28:17'),
(4, 'When creating the Chart.js chart, you need to reference the canvas element by its id and initialize the chart using that element:', 'Robert Fox', 'robertfox@gmail.com', '0123654927', '2023-04-27 12:34:19'),
(5, 'The cutoutPercentage option determines the size of the hole in the center of the doughnut. In this example, it\'s set to 75 to create a doughnut shape.', 'Sport Steve', 'steve@gmail.com', '0114869578', '2023-04-09 13:36:09'),
(6, 'You can customize the styling of the data labels by modifying the datalabels configuration object.', 'Edna Lee', 'ednalee@gmail.com', '0186543920', '2023-05-21 08:04:28'),
(7, 'By using these utility classes in Tailwind CSS, you can easily create transition effects and animate elements with predefined durations and transformations.', 'Yeader Gil', 'yeader@mail.com', '0135689251', '2023-05-07 16:05:38'),
(8, 'Tailwind CSS provides a range of utility classes for borders, including different border widths, styles, and colors. ', 'Preeth Sing', 'preeth@mail.com', '0195685632', '2023-05-11 22:54:07');

-- --------------------------------------------------------

--
-- Table structure for table `learner_lessons`
--

CREATE TABLE `learner_lessons` (
  `user_id` int(11) NOT NULL,
  `lesson_id` int(11) NOT NULL,
  `completed` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `videoUrl` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`videoUrl`)),
  `upload_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `coverPic` varchar(255) DEFAULT NULL,
  `lecturer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`id`, `title`, `description`, `videoUrl`, `upload_time`, `coverPic`, `lecturer`) VALUES
(1, 'Furter Web Design and Development', 'This module focuses on advancing students\' knowledge in web design and development. It covers HTML5, CSS3, and dynamic scripting technologies like JavaScript and server-side scripting. Students learn to create interactive and efficient web interfaces, incorporating responsive layouts, animations, and data-driven functionalities. Practical exercises and projects reinforce their understanding.\r\nCertainly! The module aims to provide students with a comprehensive understanding of various technologies and design concepts in web design and development. It goes beyond the basics and focuses on advanced techniques that can enhance the interactivity and efficiency of a web user interface.\r\nOne of the key technologies covered in this module is HTML5. Students will delve into the latest features and elements provided by HTML5, such as semantic tags, multimedia integration, and form enhancements. They will learn how to structure web pages effectively using HTML5, ensuring clean and accessible markup.\r\nCSS3 is another important technology that will be extensively explored. Students will learn advanced CSS3 properties and techniques for creating visually appealing and responsive web designs. They will gain expertise in utilizing CSS3 transitions, animations, and transformations to bring life and interactivity to web interfaces. Additionally, students will explore the concept of CSS frameworks and preprocessors, enabling them to streamline their CSS workflow and create modular and maintainable stylesheets.\r\nFurthermore, this module emphasizes the use of various dynamic scripting technologies to enhance web interactivity. JavaScript, being a fundamental scripting language, will be taught in-depth. Students will learn how to use JavaScript to manipulate the Document Object Model (DOM) dynamically, handle user events, and perform client-side form validation. They will also be introduced to popular JavaScript libraries and frameworks like jQuery, which can significantly simplify common tasks and provide additional functionality.\r\nMoreover, the module will cover the integration of server-side scripting technologies, such as PHP or Python, with HTML and CSS. Students will learn how to create dynamic web pages by generating content on the server and seamlessly integrating it with the client-side interface. They will gain insights into concepts like database connectivity, user authentication, and session management, enabling them to develop interactive and data-driven web applications.\r\nThroughout the module, students will engage in practical exercises and projects to reinforce their understanding of the concepts taught. They will work on real-world scenarios, implementing responsive layouts, interactive forms, and dynamic content updates. Additionally, they will be encouraged to explore emerging trends and best practices in web design and development, keeping them up-to-date with the ever-evolving industry.\r\nIn conclusion, this module provides an extensive exploration of HTML5, CSS3, and dynamic scripting technologies to equip students with the skills and knowledge necessary to create modern and efficient web user interfaces. By applying these technologies effectively, students will be able to enhance the interactivity and user experience of web applications they develop.', '[{\"title\":\"01 HTML 5\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/Ef47s0JTzuhDvA7UNMvU7DABSgy5r678wn2JRz9x7GSZWA?e=pCEBOp\"},{\"title\":\"02 Web Form\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EfXY-uhgoQJKhH5W0-uzfgAB-_psdHdPS6WyWaRLnvekhA?e=MLkB7K\"},{\"title\":\"03 CSS 3\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EddfjVthKthOtIm1AqgC6I0BYw9aCYPb2pgcNEuwYExp1g?e=z7Qxqb\"},{\"title\":\"04 Responsive Design\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EcE7fodRPMdHpD7h0QEG6nQBdmyr-SwC-6PKWpIp5rmqTw?e=RAHqiw\"},{\"title\":\"05 Multimedia & Geolocation\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/ET0zd_8lhv9Cvv4FT48CGnoB64A_ODx76ozEU3o6XYyFQA?e=N2fmti\"},{\"title\":\"06 PHP\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EVu6J9lAWktHp634Bo8BazoBhjuyKzC6ADsju3GZlfBPqQ?e=KybBIG\"},{\"title\":\"07 MySQL\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EXVNcFOCX91Bnr_7RQ8kP7cBmg7CIzoK0C-03x3ZfgibQQ?e=i5a3rD\"},{\"title\":\"08 User Interface Design Guideline\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/ESgeG5liuDpNsgmUQLTnLZUBjGnwHPeojwo7c80SMLRgtQ?e=GbEmrR\"},{\"title\":\"09 JQuery\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EcWU1dEl-e1LuH8nE0qLlYcB__QTQMEVoimZKXP-ROm0Nw?e=cz7ueo\"},{\"title\":\"10 AJAX\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EUip1bNJU4xDgWaCjDWEbWcBcqx9LSvxY0H8xwrM8KJBdg?e=xN77ow\"},{\"title\":\"11 Testing\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/CT117-3-2-FWDD-L-1565/EfNEIHYnTwJDicKf7S1HQukBlH7pG6YvimDRErCw9Pdc6A?e=3vDahf\"}]', '2023-05-21 05:20:35', '../upload/646a14ce19766_fwdd.png', 'Mohamad Firdaus Bin Che Abdul Rani'),
(2, 'Data Structure', 'This module introduces fundamental data structures used in computing and emphasizes their implementation through a suitable programming language. It aims to empower students to select and utilize appropriate data structures for effective problem-solving, thereby enhancing their overall skills and understanding in the field of computer science.\r\nThis module serves as a gateway to understanding the significance of common data structures in the realm of computing. It provides students with a comprehensive introduction to essential data structures and their applications. Through practical implementation exercises using a suitable programming language, students gain hands-on experience in creating and manipulating these structures. By focusing on both theoretical concepts and practical implementation, the module equips students with the necessary skills to identify and choose appropriate data structures for solving various computational problems.\r\nThroughout the module, students explore a range of data structures, including arrays, linked lists, stacks, queues, trees, and graphs. They learn the underlying principles and characteristics of each data structure, such as their efficiency, memory usage, and suitability for specific scenarios. Additionally, students study algorithms associated with these data structures, examining how they enable efficient retrieval, insertion, deletion, and traversal operations.\r\nThe practical component of the module involves implementing data structures in a suitable programming language. Students are encouraged to apply their theoretical knowledge to solve real-world problems by designing and implementing data structures to efficiently manage and manipulate data. Through hands-on coding exercises, students develop their programming skills, enhance their logical thinking abilities, and gain proficiency in selecting the most appropriate data structures based on problem requirements.\r\nBy the end of the module, students are expected to have a deep understanding of various data structures and their associated algorithms. They should be capable of analyzing computational problems and determining the most effective data structure for solving them. Furthermore, students will have honed their programming skills and gained valuable experience in implementing and manipulating data structures, equipping them with a solid foundation for further studies and practical applications in computer science and related fields.\r\nIn conclusion, this module provides students with a comprehensive understanding of common data structures and their practical implementation. By exploring theoretical concepts and engaging in hands-on programming exercises, students develop the skills and knowledge necessary to select and apply appropriate data structures for problem-solving. ', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/General-20230221_105156-Meeting%20Recording.mp4?csf=1&web=1&e=hXQIFb\"},{\"title\":\"02 Overview of C++\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/CT077-3-2-DSTR-L-2-20230228_104530-Meeting%20Recording.mp4?csf=1&web=1&e=y1kwna\"},{\"title\":\"03 Bubble Sort\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/CT077-3-2-DSTR-L-2-20230307_104451-Meeting%20Recording.mp4?csf=1&web=1&e=BCwrY4\"},{\"title\":\"04 Insertion Sort\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/Meeting%20in%20_General_-20230314_105016-Meeting%20Recording.mp4?csf=1&web=1&e=wvRxo9\"},{\"title\":\"05 Linked List - 1\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/CT077-3-2-DSTR-L-2-20230328_104813-%E4%BC%9A%E8%AE%AE%E8%AE%B0%E5%BD%95.mp4?csf=1&web=1&e=GWBqVw\"},{\"title\":\"06 Linked List - 2\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/Meeting%20in%20_General_-20230411_105417-Meeting%20Recording.mp4?csf=1&web=1&e=guEQFT\"},{\"title\":\"07 Stacks\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/Meeting%20in%20_General_-20230418_104833-Meeting%20Recording.mp4?csf=1&web=1&e=hRyg8v\"},{\"title\":\"08 Trees\",\"url\":\"https://cloudmails.sharepoint.com/:v:/r/sites/DataStructures022023-CMM/Shared%20Documents/General/Recordings/Meeting%20in%20_General_-20230509_104508-Meeting%20Recording.mp4?csf=1&web=1&e=WPz5BP\"}]', '2023-05-21 14:12:13', '../upload/646a26bdc2721_dstr.png', 'Chong Mien May'),
(3, 'Research Methods for Computing and Technology', 'This module focuses on applying Design Science concepts to address problems by creating software artifacts. It equips computing and IT students with the necessary tools and techniques to successfully complete their final year investigation and project. Additionally, it fosters a comprehensive understanding of conducting effective research in the field.\r\nThe primary objective of this module is to introduce students to the practical application of Design Science concepts in the context of problem-solving through the creation of software artifacts. By combining theoretical knowledge with hands-on implementation, students gain a deeper understanding of how Design Science principles can be utilized to investigate and address real-world problems. Through various case studies and practical exercises, students learn to conceptualize, design, and develop software artifacts that offer innovative solutions to identified problems.\r\nIn addition to focusing on the application of Design Science, this module serves as a valuable resource for final year investigation and project work for computing and IT students. It provides them with essential tools, techniques, and methodologies to effectively plan, execute, and present their final year projects. Students learn project management skills, including requirements gathering, project scoping, and task scheduling. They also gain insights into software development methodologies, quality assurance practices, and project documentation, enabling them to deliver high-quality and well-structured final projects.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/ES46DafJGyBOtthHdF3OEt4BESofjxkCEQ5eC2RsfEdItA?e=KdYOaQ\"},{\"title\":\"02 Research & Literature Searches\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/EZXuj_H_LydDs6E45r1rqsYBrEaxS8WPEHUH6U9nlPCxCg?e=VfSVNE\"},{\"title\":\"03 Ethics in Research\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/ET8Om9G7lxRLj7YPbKOsnFUBpML1hShMBVS9TT-LDMRXWw?e=cqR61L\"},{\"title\":\"04 Formulating Research Questions\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/EQxTFqD_9PNMtITS3ro3LXIBHlTNWg-a1vMxDIPwRXRP-Q?e=XXZ6Ww\"},{\"title\":\"05 Literature Review\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/EYc6CYupx2pOmHXb1VvDNWIBZW7qiV75wgH2kBzgJWOymA?e=eff0Z4\"},{\"title\":\"06 Citing & Referencing\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/ER8SDW0gSqRDg3cIsMDIwxcB2KlOFYyVNaBsHC96pHvyLw?e=lLa4A1\"},{\"title\":\"07 Sampling\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/EUimCxVKIrFKuOadkeynTbwBDPbiA0Mt1jxEB6nGORw4wQ?e=gdmmF5\"},{\"title\":\"08 Survey\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/ERBl38M3oFVEuz0bGEkRH_wB4XY_PYPe153eb3Wk6v84MQ?e=1Zv2GR\"},{\"title\":\"09 Data Analysis\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/EahwbsJi6ktBm61WUCm6IogB4Ztt5HHEcExbb3CmD88eoA?e=1pllB2\"},{\"title\":\"10 Research Discussion\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/RMCT-022023-SMR-L/EWUkII5Cn1FAq1bGIblxjYQBC3YC2xQFtQsccewHt7JE6A?e=6McgQI\"}]', '2023-05-21 14:35:29', '../upload/646a2c317979d_rmct.png', 'Dr. S.Mohanarajah'),
(4, 'Software Architecture Testing', 'This module aims to enable students to expand their knowledge and skills in the areas of Software Architecture, Architecture-based testing, and software interconnection technologies, providing them with a comprehensive understanding of these crucial aspects of software development and testing.\r\nStudents explore various architectural styles and patterns, such as layered architecture, client-server architecture, and microservices architecture. They learn how to analyze system requirements, identify architectural drivers, and make informed decisions regarding system structure and component interactions. Through practical exercises and case studies, students gain hands-on experience in creating software architectures that align with specific design goals and meet functional and non-functional requirements.\r\nAnother key focus of the module is Architecture-based testing, which involves verifying and validating software systems based on their architectural design. Students learn techniques to define and execute tests that target specific architectural aspects, such as component interactions, data flows, and performance characteristics. They explore tools and frameworks that facilitate architecture-based testing and gain insights into the integration of testing activities throughout the software development lifecycle. By understanding how architectural decisions impact system behavior and quality attributes, students become proficient in designing comprehensive test strategies to ensure the reliability and efficiency of software systems.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EemNgt9WTWtKs65VoPY-46YB8hy9LDP7zSYjG8K69sI7sQ?e=7P7eC1\"},{\"title\":\"02 Quality Attribute\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EbBMnSW1pfhNjzxcS2A7I5cBtHaL0boGpbvhRsgEj0TC1Q?e=5cFUky\"},{\"title\":\"03 4+1 View Model\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EZz5yo5i3YpIqUVJfO5CSWIBLKSK3M6vDeUlpntXrSRiyQ?e=YLbApg\"},{\"title\":\"04 Software Architecture Pattern\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EUeaP1uMtY9Pr02RoUDtcxoBBdL5X-PWovsU57ST2lYnNA?e=igIBfA\"},{\"title\":\"05 Principle of Software Architecture\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EQskyY8QM-pKgn7sJ7HbaR0BHVEHvWc5AVRigxr9SnkH5g?e=3dpUmD\"},{\"title\":\"06 Evaluation Software Architecture\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EbSMOj8vjZ9KgSj_M9kUxzgBkfOC5ffzcXLOdHSkClJHFg?e=29dGMR\"},{\"title\":\"07 The Architecture Tradeoff Analysis Method (ATAM)\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EapaFM8Qzo1HlN5Pb9a0L7MB1vgT0rmyvu75GfKXWolmFg?e=slEo0O\"},{\"title\":\"08 Active Review for Intermediate Design (ARID)\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/SATFEB2023/EbXc-US4WStCi_j4RTQfjVMBvASC8wtXwcffONijSgz_Og?e=sTlCUP\"}]', '2023-05-21 15:19:08', '../upload/646a366c540a7_sat.png', 'Halimaton Saadiah Binti Hakimi'),
(12, 'Design Method', 'This module provides an introduction to Object-Oriented Systems Analysis and Modeling using the Unified Modeling Language (UML), emphasizing fundamental concepts, customer requirement capture through use cases, and the modeling of static classes and dynamic object behaviors to facilitate effective object-oriented analysis and design.\r\nThe objective of this module is to familiarize students with the fundamentals of Object-Oriented Systems Analysis and Modeling using the Unified Modeling Language (UML). It serves as a comprehensive introduction to the key concepts and methodologies involved in object-oriented analysis and design, enabling students to effectively capture customer requirements, transform them into static classes or objects, and model dynamic object behaviors for successful system development.\r\nThe module commences by presenting the fundamental concepts of object-oriented analysis and design. Students learn about key principles such as encapsulation, inheritance, and polymorphism. They explore the benefits of object-oriented programming paradigms, including code reusability, modularity, and maintainability. Through practical examples and exercises, students gain a solid understanding of these concepts, establishing a strong foundation for subsequent topics.\r\nA significant aspect of the module revolves around capturing customer requirements through use cases. Students learn how to elicit and document user requirements by identifying and analyzing system functionalities from the perspective of end-users. They delve into the process of constructing use case diagrams and scenarios, effectively mapping out interactions between system actors and the system itself. By mastering the use case approach, students acquire the skills necessary to establish clear and comprehensive requirements, facilitating effective system development.\r\nThe module also focuses on the modeling of static classes and objects, which form the building blocks of object-oriented systems. Students gain proficiency in creating class diagrams, identifying classes and their relationships, and defining attributes and methods. They learn how to utilize UML notation to accurately represent the structure of a system and its components. Furthermore, students explore techniques for refining class diagrams, including generalization, aggregation, and association, enabling them to create well-designed and organized systems.\r\nDynamic object behaviors are another vital aspect covered in the module. Students learn how to model the dynamic aspects of object-oriented systems, including object interactions, state transitions, and event-driven behaviors. They gain practical experience in creating sequence diagrams and state machine diagrams, effectively visualizing the flow of activities and system behavior over time. By modeling dynamic object behaviors, students develop a holistic understanding of how objects interact within a system, allowing them to identify potential issues and optimize system performance.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EYdHrT8D8E5KlgdP6SWhp50BpafpPRMsBbFPmFugsx6StQ?e=4OK1v8\"},{\"title\":\"02 Object Oriented Analysis and Modelling - 1\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EV6CtpCQkCxGnUg22zq3T2EBVw5cJZa5qsKTXVSDObcmYA?e=1xa3eT\"},{\"title\":\"02 Object Oriented Analysis and Modelling - 2\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/Edl1eUCUDmlFkKVbw_G_GIAB-6ntkqckLRMpNCluj8Q-BQ?e=CdPNhw\"},{\"title\":\"04 Use Case Modelling\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EaUMzDARNrRLsyeN37IG41ABtxn3OgAdrVkJVnKGx42hqQ?e=BZCA7N\"},{\"title\":\"05 Use Case Specification\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EZwPy8zGORZNmScukDKTTusBawNOjDvL2AmVLCl1lXR6jA?e=eYVArk\"},{\"title\":\"06 Activity Diagram Modelling\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EXF0_NKXIdBEqG5-h1OuoncBvMHi4s5fRcw5qwxlfuuIug?e=Ud74gk\"},{\"title\":\"07 Static Modelling\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EVTt0weCe0FOvKOXBOJIn1EBfYYdneVE4GvjJxnpZFNReg?e=f1Hdgf\"},{\"title\":\"08 Object and Class Structuring\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EcCCOEsppfRCspksYszf8OkBOE31uYvKYEV-gLdFPU2ezw?e=OM9MDk\"},{\"title\":\"09 Interaction Modelling\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EYsQ8vM7j4hAlq4GjDy08KYBepAsFtTIuon_18Xf36P9zg?e=z29NBM\"},{\"title\":\"10 Finite State Machine\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/ETR12-9chzNGlrOdpCL-qVsBM7zIaJpsH61s8PbH9bYZAA?e=NGgyhi\"},{\"title\":\"11 Other UML Diagram\",\"url\":\"https://cloudmails.sharepoint.com/:v:/s/DesignMethods022023-SLS/EQpxEJacPc5PjsPIiIOfJ4oBiAUukhUHPiyv3B_zAaG-tA?e=phdNda\"}]', '2023-05-22 09:56:13', '../upload/646b3c3d0b4d8_dmtd.png', 'Salasiah Binti Sulaiman');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `option1` varchar(255) DEFAULT NULL,
  `option2` varchar(255) DEFAULT NULL,
  `option3` varchar(255) DEFAULT NULL,
  `option4` varchar(255) DEFAULT NULL,
  `correct_answer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(11) NOT NULL,
  `lesson_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `ROLE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `NAME`, `EMAIL`, `PASSWORD`, `ROLE`) VALUES
(1, 'Lennon Tan', 'lennon@gmail.com', 'lennontan123', 0),
(2, 'Yannis Leng', 'yannis@gmail.com', 'yannisleng123', 1),
(3, 'Phey Min', 'pheymin@gmail.com', 'pheymin123', 0),
(4, 'Kai Kiat', 'kaikiat@gmail.com', 'kaikiat123', 1),
(5, 'Innis Yu', 'innis@gmail.com', 'innis123', 0),
(6, 'Seng Feng', 'sengfeng@gmail.com', 'sengfeng123', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `learner_lessons`
--
ALTER TABLE `learner_lessons`
  ADD PRIMARY KEY (`user_id`,`lesson_id`),
  ADD KEY `lesson_id` (`lesson_id`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_id` (`quiz_id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lesson_id` (`lesson_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `learner_lessons`
--
ALTER TABLE `learner_lessons`
  ADD CONSTRAINT `learner_lessons_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `learner_lessons_ibfk_2` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes` (`id`);

--
-- Constraints for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD CONSTRAINT `quizzes_ibfk_1` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
