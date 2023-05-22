-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 07:38 PM
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
-- Table structure for table `forum`
--

CREATE TABLE `forum` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `TITLE` text DEFAULT NULL,
  `CONTENT` text DEFAULT NULL,
  `DATE` datetime DEFAULT NULL,
  `THUMB` int(11) DEFAULT NULL,
  `COMMENT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `forum`
--

INSERT INTO `forum` (`ID`, `NAME`, `TITLE`, `CONTENT`, `DATE`, `THUMB`, `COMMENT`) VALUES
(1, 'John Doe', 'Database design structure should need to be incorporated.', 'To trigger the transition and display the element from right to left, you can dynamically add or remove the translate-x-full class using JavaScript or by toggling a CSS class. By using these utility classes in Tailwind CSS, you can easily create transitio', '2023-05-14 21:05:48', 67, 21),
(2, 'Robert Fox', 'document.getElementById(\'myChart\')', 'By setting the width and height of the canvas element, you can control the size of the chart on the page. Keep in mind that Chart.js will respect the dimensions you provide, so make sure to adjust the values to suit your layout requirements.', '2023-05-04 15:46:23', 8, 10),
(3, 'Marcus Mock', 'The cutoutPercentage option determines the size of the hole in the center of the doughnut.', 'To display the percentage values on each segment, we\'re using the datalabels plugin. The formatter function calculates the percentage based on the provided data values and formats it with a % symbol. You can customize the styling of the data labels by modifying the datalabels configuration object.', '2023-04-19 05:47:03', 12, 4),
(4, 'Willam May', 'By setting position: \'bottom\' for the yAxes, the labels will be positioned at the bottom of the chart.', '\r\nTo position the labels at the bottom of a Chart.js chart, you can use the scales configuration option and set the yAxes property\'s position to \"bottom\". Here\'s an example:', '2023-05-14 14:05:19', 5, 8),
(5, 'Michael ', 'ATAM (Architecture Tradeoff Analysis Method), SAAM (Software Architecture Analysis Method)', 'ATAM: ATAM is primarily focused on analyzing and evaluating software architectures to identify potential risks, trade-offs, and quality attributes.\r\nSAAM: SAAM focuses on evaluating the software architecture in terms of multiple quality attributes and identifying potential trade-offs.', '2023-05-19 18:57:22', 17, 4),
(6, 'Henry', 'What is advantage it we are choose ARID method?', 'Maintenance and repair: ARID assists in maintenance and repair tasks by overlaying step-by-step instructions, annotations, and visual cues onto physical objects. This simplifies complex procedures, reduces downtime, and improves accuracy.', '2023-05-17 07:12:56', 5, 2),
(7, 'Vite', 'This is the test title.', 'This is the test contents.', '2023-05-22 23:13:46', 0, 0),
(8, 'Marched', 'Improving the Internet interface between Personal Privacy and Cybersecurity within the Context of Bank Account Fraud', 'In the context of bank account fraud, there is a critical need to improve the Internet interface between personal privacy and cybersecurity to reduce the risk of unauthorized access to sensitive financial information.', '2023-05-05 10:00:59', 0, 0);

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
(1, 'Furter Web Design and Development', 'This module focuses on advancing students\' knowledge in web design and development. It covers HTML5, CSS3, and dynamic scripting technologies like JavaScript and server-side scripting. Students learn to create interactive and efficient web interfaces, incorporating responsive layouts, animations, and data-driven functionalities. Practical exercises and projects reinforce their understanding.\r\nCertainly! The module aims to provide students with a comprehensive understanding of various technologies and design concepts in web design and development. It goes beyond the basics and focuses on advanced techniques that can enhance the interactivity and efficiency of a web user interface.\r\nOne of the key technologies covered in this module is HTML5. Students will delve into the latest features and elements provided by HTML5, such as semantic tags, multimedia integration, and form enhancements. They will learn how to structure web pages effectively using HTML5, ensuring clean and accessible markup.\r\nCSS3 is another important technology that will be extensively explored. Students will learn advanced CSS3 properties and techniques for creating visually appealing and responsive web designs. They will gain expertise in utilizing CSS3 transitions, animations, and transformations to bring life and interactivity to web interfaces. Additionally, students will explore the concept of CSS frameworks and preprocessors, enabling them to streamline their CSS workflow and create modular and maintainable stylesheets.\r\nFurthermore, this module emphasizes the use of various dynamic scripting technologies to enhance web interactivity. JavaScript, being a fundamental scripting language, will be taught in-depth. Students will learn how to use JavaScript to manipulate the Document Object Model (DOM) dynamically, handle user events, and perform client-side form validation. They will also be introduced to popular JavaScript libraries and frameworks like jQuery, which can significantly simplify common tasks and provide additional functionality.\r\nMoreover, the module will cover the integration of server-side scripting technologies, such as PHP or Python, with HTML and CSS. Students will learn how to create dynamic web pages by generating content on the server and seamlessly integrating it with the client-side interface. They will gain insights into concepts like database connectivity, user authentication, and session management, enabling them to develop interactive and data-driven web applications.\r\nThroughout the module, students will engage in practical exercises and projects to reinforce their understanding of the concepts taught. They will work on real-world scenarios, implementing responsive layouts, interactive forms, and dynamic content updates. Additionally, they will be encouraged to explore emerging trends and best practices in web design and development, keeping them up-to-date with the ever-evolving industry.\r\nIn conclusion, this module provides an extensive exploration of HTML5, CSS3, and dynamic scripting technologies to equip students with the skills and knowledge necessary to create modern and efficient web user interfaces. By applying these technologies effectively, students will be able to enhance the interactivity and user experience of web applications they develop.', '[{\"title\":\"01 HTML 5\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=42b33bfe-ce53-43e8-bc0e-d434cbd4ec30&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Web Form\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=e8fad8f5-a160-4a02-847e-56d3ebb37e00&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 CSS 3\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=5b8d5fd7-2a61-4ed8-b489-b502a802e88d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Responsive Design\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=877e3bc1-3c51-47c7-a43e-e1d10106ea74&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Multimedia & Geolocation\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=ff77333d-8625-42ff-befe-054f8f021a7a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 PHP\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=d927ba5b-5a40-474b-a7ad-f8068f016b3a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 MySQL\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=53704d75-5f82-41dd-9ebf-fb450f243fb7&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 User Interface Design Guideline\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=991b1e28-b862-4d3a-b209-9440b4e72d95&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"09 JQuery\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=d1d594c5-f925-4bed-b87f-27134a8b9587&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"10 AJAX\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=b3d5a948-5349-438c-8166-828c35846d67&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 05:20:35', '../upload/646a14ce19766_fwdd.png', 'Mohamad Firdaus Bin Che Abdul Rani'),
(2, 'Data Structure', 'This module introduces fundamental data structures used in computing and emphasizes their implementation through a suitable programming language. It aims to empower students to select and utilize appropriate data structures for effective problem-solving, thereby enhancing their overall skills and understanding in the field of computer science.\r\nThis module serves as a gateway to understanding the significance of common data structures in the realm of computing. It provides students with a comprehensive introduction to essential data structures and their applications. Through practical implementation exercises using a suitable programming language, students gain hands-on experience in creating and manipulating these structures. By focusing on both theoretical concepts and practical implementation, the module equips students with the necessary skills to identify and choose appropriate data structures for solving various computational problems.\r\nThroughout the module, students explore a range of data structures, including arrays, linked lists, stacks, queues, trees, and graphs. They learn the underlying principles and characteristics of each data structure, such as their efficiency, memory usage, and suitability for specific scenarios. Additionally, students study algorithms associated with these data structures, examining how they enable efficient retrieval, insertion, deletion, and traversal operations.\r\nThe practical component of the module involves implementing data structures in a suitable programming language. Students are encouraged to apply their theoretical knowledge to solve real-world problems by designing and implementing data structures to efficiently manage and manipulate data. Through hands-on coding exercises, students develop their programming skills, enhance their logical thinking abilities, and gain proficiency in selecting the most appropriate data structures based on problem requirements.\r\nBy the end of the module, students are expected to have a deep understanding of various data structures and their associated algorithms. They should be capable of analyzing computational problems and determining the most effective data structure for solving them. Furthermore, students will have honed their programming skills and gained valuable experience in implementing and manipulating data structures, equipping them with a solid foundation for further studies and practical applications in computer science and related fields.\r\nIn conclusion, this module provides students with a comprehensive understanding of common data structures and their practical implementation. By exploring theoretical concepts and engaging in hands-on programming exercises, students develop the skills and knowledge necessary to select and apply appropriate data structures for problem-solving. ', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=2be4e3ae-adc2-4a4b-b2be-945a3cd707a9&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Overview of C++\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=b4bc4621-0538-4728-9c2a-8a744b7d691f&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Bubble Sort\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=901d4634-3d76-45f3-b04b-adae7c94743a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Insertion Sort\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=094f10ad-8a01-42e0-8df4-0d41d234bc78&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Linked List - 1\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=219f18e7-91e2-4d80-b2ef-3c28a461080e&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Linked List - 2\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=1e191aa9-90cd-411c-bad9-88976d9dc1f3&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 Stacks\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=1896c764-ccf9-49e8-91c1-3bf357a75e96&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Trees\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=9cf4cc82-3e0b-4680-98ff-eef60d2a4740&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 14:12:13', '../upload/646a26bdc2721_dstr.png', 'Chong Mien May'),
(3, 'Research Methods for Computing and Technology', 'This module focuses on applying Design Science concepts to address problems by creating software artifacts. It equips computing and IT students with the necessary tools and techniques to successfully complete their final year investigation and project. Additionally, it fosters a comprehensive understanding of conducting effective research in the field.\r\nThe primary objective of this module is to introduce students to the practical application of Design Science concepts in the context of problem-solving through the creation of software artifacts. By combining theoretical knowledge with hands-on implementation, students gain a deeper understanding of how Design Science principles can be utilized to investigate and address real-world problems. Through various case studies and practical exercises, students learn to conceptualize, design, and develop software artifacts that offer innovative solutions to identified problems.\r\nIn addition to focusing on the application of Design Science, this module serves as a valuable resource for final year investigation and project work for computing and IT students. It provides them with essential tools, techniques, and methodologies to effectively plan, execute, and present their final year projects. Students learn project management skills, including requirements gathering, project scoping, and task scheduling. They also gain insights into software development methodologies, quality assurance practices, and project documentation, enabling them to deliver high-quality and well-structured final projects.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=f18fee95-2fff-4327-b3a1-38e6bd6baac6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Research & Literature Searches\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=f18fee95-2fff-4327-b3a1-38e6bd6baac6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Ethics in Research\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=d19b0e3f-97bb-4b14-8fb6-0f6ca3ac9c55&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Formulating Research Questions\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=d214c1c3-7b5e-46e3-9bb8-7eada71cc7dc&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Literature Review\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=8b093a87-c7a9-4e6a-9875-dbd55bc33562&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Citing & Referencing\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=6d0d121f-4a20-43a4-8377-08b0c0c8c317&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 Sampling\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=150ba648-224a-4ab1-b8e6-9d91eca74dbc&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Survey\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=c3df6510-a037-4455-bb3d-1b1849111ffc&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"09 Data Analysis\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=a7d440d2-7817-4351-9ab5-7fef61032108&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 14:35:29', '../upload/646a2c317979d_rmct.png', 'Dr. S.Mohanarajah'),
(4, 'Software Architecture Testing', 'This module aims to enable students to expand their knowledge and skills in the areas of Software Architecture, Architecture-based testing, and software interconnection technologies, providing them with a comprehensive understanding of these crucial aspects of software development and testing.\r\nStudents explore various architectural styles and patterns, such as layered architecture, client-server architecture, and microservices architecture. They learn how to analyze system requirements, identify architectural drivers, and make informed decisions regarding system structure and component interactions. Through practical exercises and case studies, students gain hands-on experience in creating software architectures that align with specific design goals and meet functional and non-functional requirements.\r\nAnother key focus of the module is Architecture-based testing, which involves verifying and validating software systems based on their architectural design. Students learn techniques to define and execute tests that target specific architectural aspects, such as component interactions, data flows, and performance characteristics. They explore tools and frameworks that facilitate architecture-based testing and gain insights into the integration of testing activities throughout the software development lifecycle. By understanding how architectural decisions impact system behavior and quality attributes, students become proficient in designing comprehensive test strategies to ensure the reliability and efficiency of software systems.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=df828de9-4d56-4a6b-b3ae-55a0f63ee3a6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Quality Attribute\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=259d4cb0-a5b5-4df8-8f3c-5c4b603b2397&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 4+1 View Model\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=8ecaf99c-dd62-488a-a945-497cee424962&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Software Architecture Pattern\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=2dd1b2ee-1fff-41d2-a7c3-d6a9dac6802d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Principle of Software Architecture\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=8fc9240b-3310-4aea-827e-ec27b1db691d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Evaluation Software Architecture\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=3f3a8cb4-8d2f-4a9f-8128-ff33d914c738&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 The Architecture Tradeoff Analysis Method (ATAM)\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=cf145aaa-ce10-478d-94de-4f6fd6b42fb3&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Active Review for Intermediate Design (ARID)\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=44f9dcb5-59b8-422b-8bf8-f845341f8d53&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 15:19:08', '../upload/646a366c540a7_sat.png', 'Halimaton Saadiah Binti Hakimi'),
(12, 'Design Method', 'This module provides an introduction to Object-Oriented Systems Analysis and Modeling using the Unified Modeling Language (UML), emphasizing fundamental concepts, customer requirement capture through use cases, and the modeling of static classes and dynamic object behaviors to facilitate effective object-oriented analysis and design.\r\nThe objective of this module is to familiarize students with the fundamentals of Object-Oriented Systems Analysis and Modeling using the Unified Modeling Language (UML). It serves as a comprehensive introduction to the key concepts and methodologies involved in object-oriented analysis and design, enabling students to effectively capture customer requirements, transform them into static classes or objects, and model dynamic object behaviors for successful system development.\r\nThe module commences by presenting the fundamental concepts of object-oriented analysis and design. Students learn about key principles such as encapsulation, inheritance, and polymorphism. They explore the benefits of object-oriented programming paradigms, including code reusability, modularity, and maintainability. Through practical examples and exercises, students gain a solid understanding of these concepts, establishing a strong foundation for subsequent topics.\r\nA significant aspect of the module revolves around capturing customer requirements through use cases. Students learn how to elicit and document user requirements by identifying and analyzing system functionalities from the perspective of end-users. They delve into the process of constructing use case diagrams and scenarios, effectively mapping out interactions between system actors and the system itself. By mastering the use case approach, students acquire the skills necessary to establish clear and comprehensive requirements, facilitating effective system development.\r\nThe module also focuses on the modeling of static classes and objects, which form the building blocks of object-oriented systems. Students gain proficiency in creating class diagrams, identifying classes and their relationships, and defining attributes and methods. They learn how to utilize UML notation to accurately represent the structure of a system and its components. Furthermore, students explore techniques for refining class diagrams, including generalization, aggregation, and association, enabling them to create well-designed and organized systems.\r\nDynamic object behaviors are another vital aspect covered in the module. Students learn how to model the dynamic aspects of object-oriented systems, including object interactions, state transitions, and event-driven behaviors. They gain practical experience in creating sequence diagrams and state machine diagrams, effectively visualizing the flow of activities and system behavior over time. By modeling dynamic object behaviors, students develop a holistic understanding of how objects interact within a system, allowing them to identify potential issues and optimize system performance.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=3fad4787-f003-4a4e-9607-4fe925a1a79d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Object Oriented Analysis and Modelling - 1\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=90b6825e-9090-462c-9d48-36db3ab74f61&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Object Oriented Analysis and Modelling - 2\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=407975d9-0e94-4569-90a5-5bc3f1bf1880&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Use Case Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=30cc0ca5-3611-4bb4-b327-8ddfb206e350&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Use Case Specification\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=cccb0f9c-39c6-4d16-9927-2e9032934eeb&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Activity Diagram Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=d2fc7471-2197-44d0-a86e-7e8753aea277&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 Static Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=07d3ed54-7b82-4e41-bca3-9704e2489f51&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Object and Class Structuring\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=4b3882c0-a529-42f4-b299-2c62ccdff0e9&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"09 Interaction Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=f3f2108b-8f3b-4088-96ae-068c3cb4f0a6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"10 Finite State Machine\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=efdb7534-875c-4633-96b3-9da422fea95b&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"11 Other UML Diagram\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=9610710a-3d9c-4fce-8ec3-c888839f278a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-22 09:56:13', '../upload/646b3c3d0b4d8_dmtd.png', 'Salasiah Binti Sulaiman'),
(13, 'Requirements Engineering', 'This module provides a comprehensive introduction to the processes involved in requirements engineering for complex systems. It covers the concepts of eliciting, developing, analyzing, validating, and managing requirements. Students gain a deep understanding of the principles and practical skills required for software development, including methodologies and tools for specification, design, development, testing, evaluation, and maintenance of software systems. The module emphasizes the importance of requirements engineering throughout the software development life cycle and explores specific techniques that can be applied to ensure successful project outcomes. ', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=b3822f75-f33c-4319-9039-c60aa6691391&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Requirement Elicitation\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=0eb9a2de-20e9-4dfd-b080-ec2eb9b87d79&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Requirement Documentation - Natural Language Based - 1\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=cb80312a-2d6f-4b1e-86c7-d90d45caa249&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Requirement Documentation - Natural Language Based - 2\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=52893ebe-110d-468d-8a72-61f60cbcb062&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Requirement Management\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=fe8d564a-ee6b-44dc-b74c-79df7f8dcd61&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Requirements\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=73442321-a217-43c3-aab0-ebe6823e2b5a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-22 17:35:31', '../upload/646ba7e32c249_reng.png', 'Nur Amira Abdul Majid');

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
-- Indexes for table `forum`
--
ALTER TABLE `forum`
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
-- AUTO_INCREMENT for table `forum`
--
ALTER TABLE `forum`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
