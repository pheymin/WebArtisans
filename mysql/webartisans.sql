-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 01:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `COMMENT` varchar(255) DEFAULT NULL,
  `POSTEDTIME` datetime NOT NULL DEFAULT current_timestamp(),
  `FORUM_ID` int(255) DEFAULT NULL,
  `THUMB` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`ID`, `NAME`, `COMMENT`, `POSTEDTIME`, `FORUM_ID`, `THUMB`) VALUES
(1, 'Tomyam Mee', 'These changes should fix the issues you mentioned and provide the desired behavior of opening and closing the modal.', '2023-05-15 06:35:46', 1, 5),
(2, 'Henry Iloka', 'Feel free to customize the sentence according to your specific requirements or branding.', '2023-05-15 06:28:12', 1, 2),
(3, 'Marcus Lee', 'In the modified code, I added a modal-container div around the logoutModal HTML to easily remove the entire modal when closing it. ', '2023-05-15 13:24:37', 1, 1),
(4, 'Halimathon', 'The closeLogoutModal function removes the modal-container element from the DOM when called.', '2023-05-15 14:14:51', 1, 0),
(5, 'Mercury Ooi', 'Certainly! Here\'s an example of a logout confirmation sentence:', '2023-05-16 02:10:24', 1, 2),
(6, 'Tomcat YB', 'The OpenBay system compiles the quotes into a list and displays them to the customer ', '2023-05-16 03:11:22', 1, 3),
(7, 'Chew Peng', 'The system suggests the customer to select a different provider or contact OpenBay support.', '2023-05-16 03:10:35', 1, 6),
(8, 'Lian Peng', 'here\'s an activity diagram that shows the steps involved in the process you described, including the roles of customer, system, and service provider:', '2023-05-16 03:24:03', 1, 0),
(9, 'Mathew Goh', '\"Improving the Internet interface between Personal Privacy and Cybersecurity within the Context of Bank Account Fraud\":', '2023-05-16 04:53:13', 1, 8),
(10, 'Pinky Liew', 'When searching for articles, make sure to use a combination of relevant keywords and phrases to narrow down your search results.', '2023-05-16 05:31:04', 1, 10),
(11, 'Joshua Gan', 'By working together, we can reduce the risk of bank account fraud and ensure that personal privacy and cybersecurity are adequately protected in the digital age.', '2023-05-16 11:40:48', 1, 15),
(12, 'Perry Tan', 'Cybersecurity awareness campaigns and education programs can help individuals better understand the risks and take proactive steps to protect themselves.', '2023-05-17 13:08:19', 1, 5),
(13, 'Ferry Goh', 'Furthermore, financial institutions also play a critical role in improving the Internet interface between personal privacy and cybersecurity.', '2023-05-05 03:40:12', 2, 15),
(14, 'Penny Lai', 'The Internet has brought significant improvements in the way people communicate, work, and transact.', '2023-05-05 08:08:46', 2, 3),
(15, 'Goh Bee', 'The benefits and drawbacks of incorporating ChatGPT technology into literature review processes and its effect on academic integrity.', '2023-05-05 07:09:23', 2, 5),
(16, '169 Twin Tower', 'Examining the role of ChatGPT technology in promoting or hindering academic integrity in literature research', '2023-05-05 08:12:46', 2, 0),
(17, 'Water 100Plus', 'The ethical implications of using ChatGPT technology for literature review in relation to academic integrity', '2023-05-24 22:28:15', 2, 4),
(18, 'Mineral Water', 'Mitigating the challenges posed by ChatGPT technology on academic integrity in literature research', '2023-05-24 22:28:15', 2, 5),
(19, 'Peter Harry', 'The code contains several conditional statements that check the value of curPage and determine which pages should be displayed.', '2023-05-05 06:42:04', 2, 3),
(20, 'Polo Shirt', 'Some of these conditionals can be simplified by combining them into a single expression.', '2023-05-05 11:05:04', 2, 12),
(21, '169 Twin Tower', 'The code contains several instances of unnecessary parentheses that can be removed to simplify the code.', '2023-05-06 15:08:18', 2, 0),
(22, '887 Elephant Bean', 'Some of these conditionals can be simplified by combining them into a single expression.', '2023-05-06 08:46:18', 2, 5),
(23, 'Mathiew Goh', 'Instead of using the spread operator ([...Array(4)]) to create an array of a fixed length, you can use the Array.from() method. This can make the code more concise and easier to read.', '2023-05-01 07:48:13', 3, 5),
(24, 'Peter Chew', 'Instead of passing the entire props object to the PaginationCard component, you can destructure the specific props that are needed. ', '2023-05-02 11:17:13', 3, 0),
(25, 'Mary Ting', 'To further investigate the issue, you can try inspecting the server logs or enabling debug mode in your Flask app.', '2023-05-03 09:40:26', 3, 10),
(26, 'Mercury Tan', 'Even a small syntax error can cause the server to reject the request. You can use a tool like JSONLint to validate your JSON data.', '2023-05-05 00:42:30', 3, 14),
(27, 'Perry Kuan', 'Check the API documentation to make sure you are sending the correct headers and values.', '2023-05-15 01:06:17', 4, 3),
(28, 'Forgery Pang', 'If the server is using Cross-Site Request Forgery (CSRF) protection, you may need to include a CSRF token in the request headers or as a query parameter.', '2023-05-15 04:01:54', 4, 1),
(29, 'Bryan Pang', 'Double-check that you are using the correct HTTP method (POST in this case) for the API endpoint you are trying to access.', '2023-05-15 05:17:41', 4, 3),
(30, 'Marcus Fox', 'The server may be validating the data in the request and rejecting it if it doesn\'t meet certain criteria.', '2023-05-15 07:17:35', 4, 3),
(31, 'Yun Tian', 'Note that you can also configure the extension to only allow requests from specific origins, methods, headers, and more by passing additional parameters to CORS().', '2023-05-17 10:15:35', 4, 0),
(32, 'Xian En', 'By initializing the Flask app with CORS(app), you allow the app to respond to CORS preflight requests (OPTIONS) and add the appropriate headers to allow cross-origin requests. ', '2023-05-18 20:12:35', 4, 10),
(33, 'Author Oi', 'With these changes, your GET request from localhost:5173 to 127.0.0.1:5173 should now work without any CORS errors.', '2023-05-19 06:04:35', 4, 5),
(34, 'Penny Tan', ' This should provide more information about what went wrong with the request.', '2023-05-19 11:17:35', 4, 0),
(35, 'John Doe', 'If a file was sent, we extract the filename using file.filename, and save the file to the ./uploads directory using file.save(os.path.join(\'./uploads\', filename)).', '2023-05-19 16:46:30', 5, 17),
(36, 'Tomboy GOD', 'We define an API endpoint at the URL /upload that accepts POST requests.', '2023-05-19 22:46:30', 5, 13),
(37, 'KFC the Best', 'Note that this code is just an example and may need to be adapted to fit your specific use case. ', '2023-05-20 01:13:30', 5, 0),
(38, 'MCD the Best', 'We check if a file was actually sent by checking if the file variable is not None.', '2023-05-20 06:39:30', 5, 4),
(39, 'Guan Jie', 'Instead of using nested if-else statements, you can use early returns for error handling. ', '2023-05-18 17:48:58', 6, 6),
(40, 'Perry Kuan', 'Checking the file type and size, and setting appropriate permissions on the upload directory.', '2023-05-18 07:48:58', 6, 7),
(41, 'Suresh Yan', 'This makes it easier to change the requirements in the future if needed.', '2023-05-10 08:37:07', 9, 0),
(42, 'Java Tomcat', 'Use constants for minimum lengths of name, email, contact number and password to avoid magic numbers.', '2023-05-24 07:51:48', 12, 4),
(43, 'Marcus Foo', 'This makes it easier to change the requirements in the future if needed.', '2023-05-24 22:53:06', 12, 5),
(44, 'Marry Liew', 'This can help identify any issues that may be causing slow response times and optimize the system\'s performance accordingly.', '2023-05-19 07:29:06', 11, 18),
(45, 'Coding Python', 'You can write a separate function that takes in the user input and the minimum length required for that input, and returns the validated input. ', '2023-05-18 12:50:07', 9, 6),
(46, 'NB Jason', 'Load testing can be conducted by simulating a high volume of user traffic to measure the system\'s performance under heavy load.', '2023-05-20 02:17:06', 11, 5),
(47, 'Double Ayam', 'This can help identify any latency issues and optimize the system\'s performance accordingly.', '2023-05-01 09:40:03', 10, 4),
(48, 'Maggie Goreng', 'To measure channel capacity, the system can be tested using tools like bandwidth testers.', '2023-05-04 08:06:31', 10, 0),
(49, 'Robert Fox', 'To measure latency, the system can be monitored using tools like ping or traceroute to determine the time it takes for a request to be processed and returned to the user. ', '2023-05-12 08:39:03', 10, 13);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
(8, 'Tailwind CSS provides a range of utility classes for borders, including different border widths, styles, and colors. ', 'Preeth Sing', 'preeth@mail.com', '0195685632', '2023-05-11 22:54:07'),
(9, 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.', 'Shooting Stars', 'shootingstars@gmail.com', '0152698878', '2023-05-27 15:38:10'),
(10, 'In this example, we have three routes: the root path /, the /about path, and the /contact path. Each route has a corresponding component that will be rendered when the path is matched.', 'Bryan Lim', 'bryanlim@mail.com', '0129889324', '2023-05-23 12:16:05'),
(11, 'Now, when a user navigates to the root path /, the Home component will be rendered. When they navigate to the /about path, the About component will be rendered, and so on.', 'Mei Ying', 'meiying@mail.com', '018996345', '2023-05-10 06:10:17'),
(12, 'How to use `Outlet` component in the parent component to render the child routes.', 'Yeoung Kim', 'yeoung@blazer.com', '0156667789', '2023-05-16 13:10:32'),
(13, 'Note that the Outlet component should only be used in the parent component, and not in any of the child components. The child components should only define their own routes using the Route and Switch components.', 'Jia Hao', 'jiahao@bbq.com', '0125659412', '2023-05-24 03:38:07'),
(14, 'Make sure that you have installed the react-router-dom module and that it is up-to-date. You can do this by running npm install react-router-dom in your terminal.', 'Toyzz Man', 'toyzzman@klia.bo', '0145328870', '2023-05-12 04:20:47'),
(15, 'How to solve \"Uncaught SyntaxError: The requested module \'/node_modules/.vite/deps/react-router-dom.js?v=79b8a667\' does not provide an export named \'Switch\'\"', 'Wai Meng', 'waimeng@klcc.bo', '0121023307', '2023-05-17 15:04:34'),
(16, 'Incorrect file path Double check that the file path in your HTML code is correct and matches the location of the CSS file on your server.', 'Ryan Buzz', 'ryanbuz@fake.co', '0153329800', '2023-05-16 12:16:17'),
(17, 'I love web development', 'yannis ', 'yannis@gmail.com', '0123456789', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `forums`
--

CREATE TABLE `forums` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `TITLE` varchar(255) DEFAULT NULL,
  `CONTENT` text DEFAULT NULL,
  `DATE` datetime NOT NULL DEFAULT current_timestamp(),
  `THUMB` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forums`
--

INSERT INTO `forums` (`ID`, `NAME`, `TITLE`, `CONTENT`, `DATE`, `THUMB`) VALUES
(1, 'John Doe', 'ATAM is commonly used for evaluating and selecting software architectures during the early stages of a project', 'ARID is applied in domains where augmented reality can enhance design, visualization, collaboration, training, marketing, maintenance, and user experience, such as architecture, engineering, training simulations, and marketing.', '2023-05-14 21:05:48', 67),
(2, 'Robert Fox', 'If it doesn\'t exist, we return null indicating that the user is not authenticated.', 'localStorage.getItem(\"googleAuth\") retrieves the googleAuth object from the localStorage, and JSON.parse() converts the string representation of the object back to a JavaScript object.', '2023-05-04 15:49:23', 8),
(3, 'William May', 'utils.ts:900 Matched leaf route at location \"/\" does not have an element. ', 'We then check if the current time is greater than the expiresAt time. If it is, the token has expired and we remove the googleAuth object from the localStorage and return null.', '2023-04-19 05:47:06', 12),
(4, 'Marcus Mock', 'How do SOLS Energy, and UrbanMetry do their product packaging?', 'In terms of product packaging for SOLS Energy and UrbanMetry, it is best to contact the companies directly or refer to their official websites for specific information on their packaging practices.', '2023-05-14 14:05:19', 51),
(5, 'Michael', 'As an AI language model, I do not have access to real-time information on the packaging practices of specific companies.', 'Product packaging typically serves multiple purposes, such as protecting the product during transportation, marketing the product to potential customers, and providing important information about the product to consumers. ', '2023-05-19 18:57:02', 17),
(6, 'Henry Queen', 'Companies may use different materials and designs for packaging.', 'In terms of product packaging for SOLS Energy and UrbanMetry, it is best to contact the companies directly or refer to their official websites for specific information on their packaging practices.', '2023-05-17 07:12:56', 5),
(7, 'Vite', 'When developing the e-Commerce system for BulanBintang.co', 'Response time can be measured using tools like Selenium or Chrome DevTools to monitor the time it takes for the system to load a page or execute a specific action. This can help identify any issues that may be causing slow response times and optimize the system\'s performance accordingly.', '2023-05-22 23:14:46', 3),
(8, 'Mercury Lim', 'This can help identify potential bottlenecks and optimize the system\'s network configuration to improve performance.', 'To measure channel capacity, the system can be tested using tools like bandwidth testers or network analyzers to determine the maximum throughput of the system\'s communication channels. ', '2023-05-05 10:04:59', 0),
(9, 'Halimathon', 'Load testing can be done using tools like Apache JMeter or LoadRunner.', 'Load testing can be conducted by simulating a high volume of user traffic to measure the system\'s performance under heavy load. This can help identify any performance issues related to latency or channel capacity, as well as other factors such as CPU and memory usage.', '2023-05-06 01:48:32', 5),
(10, '169 Twin Tower', 'The website is built with the aim of making the process of doing assignments easier, less stressful, and more enjoyable for students.', 'The website provides tools and resources to help students plan and organize their study schedule, prioritize tasks, and set goals. This helps students to stay on track and avoid getting overwhelmed by the demands of their coursework.', '2023-04-13 05:26:18', 37),
(11, 'Bryan Lai', 'OpenAI make it a unique and effective solution for students struggling with assignments and coursework.', 'The website also offers tools to help students check their work for plagiarism and grammar errors, ensuring that their work is of high quality and meets academic standards.', '2023-05-11 16:48:22', 23),
(12, 'Mei Mei', '\r\n\"Ease your mind, simplify your workload - with Paper-Partner.\"', 'Paper-Partner is the perfect solution. Try it today and experience the peace of mind that comes with having a trusted partner by your side.', '2023-05-23 08:11:34', 10),
(13, 'Mei Yan', 'The platform offers a range of resources and materials to help students improve their writing skills', 'The slogan \"Ease your mind, simplify your workload - with Paper-Partner\" suggests that Paper-Partner is a platform that can make the process of completing assignments easier and more manageable for students. ', '2023-05-05 09:41:16', 23),
(14, 'Vite', 'Let me try to append a new post on the forum page.', 'Ultimately, Paper-Partner is a trusted partner for students looking to improve their academic performance and ease the stress and anxiety associated with coursework.', '2023-05-24 02:31:33', 0);

-- --------------------------------------------------------

--
-- Table structure for table `learner_lessons`
--

CREATE TABLE `learner_lessons` (
  `user_id` int(11) NOT NULL,
  `lesson_id` int(11) NOT NULL,
  `completed` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `learner_lessons`
--

INSERT INTO `learner_lessons` (`user_id`, `lesson_id`, `completed`) VALUES
(1, 1, 1),
(1, 2, 1),
(2, 3, 0),
(2, 4, 1),
(3, 1, 1),
(3, 2, 1),
(3, 12, 0),
(3, 13, 0),
(4, 1, 1),
(4, 4, 0),
(5, 12, 1),
(5, 13, 0),
(6, 3, 1),
(6, 13, 0);

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `videoUrl` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `upload_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `coverPic` varchar(255) DEFAULT NULL,
  `lecturer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`id`, `title`, `description`, `videoUrl`, `upload_time`, `coverPic`, `lecturer`) VALUES
(1, 'Furter Web Design and Development', 'This module focuses on advancing students\' knowledge in web design and development. It covers HTML5, CSS3, and dynamic scripting technologies like JavaScript and server-side scripting. Students learn to create interactive and efficient web interfaces, incorporating responsive layouts, animations, and data-driven functionalities. Practical exercises and projects reinforce their understanding.\nCertainly! The module aims to provide students with a comprehensive understanding of various technologies and design concepts in web design and development. It goes beyond the basics and focuses on advanced techniques that can enhance the interactivity and efficiency of a web user interface.\nOne of the key technologies covered in this module is HTML5. Students will delve into the latest features and elements provided by HTML5, such as semantic tags, multimedia integration, and form enhancements. They will learn how to structure web pages effectively using HTML5, ensuring clean and accessible markup.\nCSS3 is another important technology that will be extensively explored. Students will learn advanced CSS3 properties and techniques for creating visually appealing and responsive web designs. They will gain expertise in utilizing CSS3 transitions, animations, and transformations to bring life and interactivity to web interfaces. Additionally, students will explore the concept of CSS frameworks and preprocessors, enabling them to streamline their CSS workflow and create modular and maintainable stylesheets.\nFurthermore, this module emphasizes the use of various dynamic scripting technologies to enhance web interactivity. JavaScript, being a fundamental scripting language, will be taught in-depth. Students will learn how to use JavaScript to manipulate the Document Object Model (DOM) dynamically, handle user events, and perform client-side form validation. They will also be introduced to popular JavaScript libraries and frameworks like jQuery, which can significantly simplify common tasks and provide additional functionality.\nMoreover, the module will cover the integration of server-side scripting technologies, such as PHP or Python, with HTML and CSS. Students will learn how to create dynamic web pages by generating content on the server and seamlessly integrating it with the client-side interface. They will gain insights into concepts like database connectivity, user authentication, and session management, enabling them to develop interactive and data-driven web applications.\nThroughout the module, students will engage in practical exercises and projects to reinforce their understanding of the concepts taught. They will work on real-world scenarios, implementing responsive layouts, interactive forms, and dynamic content updates. Additionally, they will be encouraged to explore emerging trends and best practices in web design and development, keeping them up-to-date with the ever-evolving industry.\nIn conclusion, this module provides an extensive exploration of HTML5, CSS3, and dynamic scripting technologies to equip students with the skills and knowledge necessary to create modern and efficient web user interfaces. By applying these technologies effectively, students will be able to enhance the interactivity and user experience of web applications they develop.', '[{\"title\":\"01 HTML 5\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=42b33bfe-ce53-43e8-bc0e-d434cbd4ec30&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Web Form\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=e8fad8f5-a160-4a02-847e-56d3ebb37e00&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 CSS 3\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=5b8d5fd7-2a61-4ed8-b489-b502a802e88d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Responsive Design\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=877e3bc1-3c51-47c7-a43e-e1d10106ea74&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Multimedia & Geolocation\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=ff77333d-8625-42ff-befe-054f8f021a7a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 PHP\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=d927ba5b-5a40-474b-a7ad-f8068f016b3a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 MySQL\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=53704d75-5f82-41dd-9ebf-fb450f243fb7&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 User Interface Design Guideline\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=991b1e28-b862-4d3a-b209-9440b4e72d95&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"09 JQuery\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=d1d594c5-f925-4bed-b87f-27134a8b9587&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"10 AJAX\",\"url\":\"https://cloudmails.sharepoint.com/sites/CT117-3-2-FWDD-L-1565/_layouts/15/embed.aspx?UniqueId=b3d5a948-5349-438c-8166-828c35846d67&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 05:20:35', '../upload/646a14ce19766_fwdd.png', 'Mohamad Firdaus Bin Che Abdul Rani'),
(2, 'Data Structure', 'This module introduces fundamental data structures used in computing and emphasizes their implementation through a suitable programming language. It aims to empower students to select and utilize appropriate data structures for effective problem-solving, thereby enhancing their overall skills and understanding in the field of computer science.\r\nThis module serves as a gateway to understanding the significance of common data structures in the realm of computing. It provides students with a comprehensive introduction to essential data structures and their applications. Through practical implementation exercises using a suitable programming language, students gain hands-on experience in creating and manipulating these structures. By focusing on both theoretical concepts and practical implementation, the module equips students with the necessary skills to identify and choose appropriate data structures for solving various computational problems.\r\nThroughout the module, students explore a range of data structures, including arrays, linked lists, stacks, queues, trees, and graphs. They learn the underlying principles and characteristics of each data structure, such as their efficiency, memory usage, and suitability for specific scenarios. Additionally, students study algorithms associated with these data structures, examining how they enable efficient retrieval, insertion, deletion, and traversal operations.\r\nThe practical component of the module involves implementing data structures in a suitable programming language. Students are encouraged to apply their theoretical knowledge to solve real-world problems by designing and implementing data structures to efficiently manage and manipulate data. Through hands-on coding exercises, students develop their programming skills, enhance their logical thinking abilities, and gain proficiency in selecting the most appropriate data structures based on problem requirements.\r\nBy the end of the module, students are expected to have a deep understanding of various data structures and their associated algorithms. They should be capable of analyzing computational problems and determining the most effective data structure for solving them. Furthermore, students will have honed their programming skills and gained valuable experience in implementing and manipulating data structures, equipping them with a solid foundation for further studies and practical applications in computer science and related fields.\r\nIn conclusion, this module provides students with a comprehensive understanding of common data structures and their practical implementation. By exploring theoretical concepts and engaging in hands-on programming exercises, students develop the skills and knowledge necessary to select and apply appropriate data structures for problem-solving. ', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=2be4e3ae-adc2-4a4b-b2be-945a3cd707a9&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Overview of C++\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=b4bc4621-0538-4728-9c2a-8a744b7d691f&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Bubble Sort\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=901d4634-3d76-45f3-b04b-adae7c94743a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Insertion Sort\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=094f10ad-8a01-42e0-8df4-0d41d234bc78&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Linked List - 1\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=219f18e7-91e2-4d80-b2ef-3c28a461080e&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Linked List - 2\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=1e191aa9-90cd-411c-bad9-88976d9dc1f3&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 Stacks\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=1896c764-ccf9-49e8-91c1-3bf357a75e96&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Trees\",\"url\":\"https://cloudmails.sharepoint.com/sites/DataStructures022023-CMM/_layouts/15/embed.aspx?UniqueId=9cf4cc82-3e0b-4680-98ff-eef60d2a4740&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 14:12:13', '../upload/646a26bdc2721_dstr.png', 'Chong Mien May'),
(3, 'Research Methods for Computing and Technology', 'This module focuses on applying Design Science concepts to address problems by creating software artifacts. It equips computing and IT students with the necessary tools and techniques to successfully complete their final year investigation and project. Additionally, it fosters a comprehensive understanding of conducting effective research in the field.\r\nThe primary objective of this module is to introduce students to the practical application of Design Science concepts in the context of problem-solving through the creation of software artifacts. By combining theoretical knowledge with hands-on implementation, students gain a deeper understanding of how Design Science principles can be utilized to investigate and address real-world problems. Through various case studies and practical exercises, students learn to conceptualize, design, and develop software artifacts that offer innovative solutions to identified problems.\r\nIn addition to focusing on the application of Design Science, this module serves as a valuable resource for final year investigation and project work for computing and IT students. It provides them with essential tools, techniques, and methodologies to effectively plan, execute, and present their final year projects. Students learn project management skills, including requirements gathering, project scoping, and task scheduling. They also gain insights into software development methodologies, quality assurance practices, and project documentation, enabling them to deliver high-quality and well-structured final projects.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=f18fee95-2fff-4327-b3a1-38e6bd6baac6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Research & Literature Searches\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=f18fee95-2fff-4327-b3a1-38e6bd6baac6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Ethics in Research\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=d19b0e3f-97bb-4b14-8fb6-0f6ca3ac9c55&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Formulating Research Questions\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=d214c1c3-7b5e-46e3-9bb8-7eada71cc7dc&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Literature Review\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=8b093a87-c7a9-4e6a-9875-dbd55bc33562&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Citing & Referencing\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=6d0d121f-4a20-43a4-8377-08b0c0c8c317&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 Sampling\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=150ba648-224a-4ab1-b8e6-9d91eca74dbc&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Survey\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=c3df6510-a037-4455-bb3d-1b1849111ffc&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"09 Data Analysis\",\"url\":\"https://cloudmails.sharepoint.com/sites/RMCT-022023-SMR-L/_layouts/15/embed.aspx?UniqueId=a7d440d2-7817-4351-9ab5-7fef61032108&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 14:35:29', '../upload/646a2c317979d_rmct.png', 'Dr. S.Mohanarajah'),
(4, 'Software Architecture Testing', 'This module aims to enable students to expand their knowledge and skills in the areas of Software Architecture, Architecture-based testing, and software interconnection technologies, providing them with a comprehensive understanding of these crucial aspects of software development and testing.\r\nStudents explore various architectural styles and patterns, such as layered architecture, client-server architecture, and microservices architecture. They learn how to analyze system requirements, identify architectural drivers, and make informed decisions regarding system structure and component interactions. Through practical exercises and case studies, students gain hands-on experience in creating software architectures that align with specific design goals and meet functional and non-functional requirements.\r\nAnother key focus of the module is Architecture-based testing, which involves verifying and validating software systems based on their architectural design. Students learn techniques to define and execute tests that target specific architectural aspects, such as component interactions, data flows, and performance characteristics. They explore tools and frameworks that facilitate architecture-based testing and gain insights into the integration of testing activities throughout the software development lifecycle. By understanding how architectural decisions impact system behavior and quality attributes, students become proficient in designing comprehensive test strategies to ensure the reliability and efficiency of software systems.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=df828de9-4d56-4a6b-b3ae-55a0f63ee3a6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Quality Attribute\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=259d4cb0-a5b5-4df8-8f3c-5c4b603b2397&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 4+1 View Model\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=8ecaf99c-dd62-488a-a945-497cee424962&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Software Architecture Pattern\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=2dd1b2ee-1fff-41d2-a7c3-d6a9dac6802d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Principle of Software Architecture\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=8fc9240b-3310-4aea-827e-ec27b1db691d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Evaluation Software Architecture\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=3f3a8cb4-8d2f-4a9f-8128-ff33d914c738&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 The Architecture Tradeoff Analysis Method (ATAM)\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=cf145aaa-ce10-478d-94de-4f6fd6b42fb3&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Active Review for Intermediate Design (ARID)\",\"url\":\"https://cloudmails.sharepoint.com/sites/SATFEB2023/_layouts/15/embed.aspx?UniqueId=44f9dcb5-59b8-422b-8bf8-f845341f8d53&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-21 15:19:08', '../upload/646a366c540a7_sat.png', 'Halimaton Saadiah Binti Hakimi'),
(12, 'Design Method', 'This module provides an introduction to Object-Oriented Systems Analysis and Modeling using the Unified Modeling Language (UML), emphasizing fundamental concepts, customer requirement capture through use cases, and the modeling of static classes and dynamic object behaviors to facilitate effective object-oriented analysis and design.\r\nThe objective of this module is to familiarize students with the fundamentals of Object-Oriented Systems Analysis and Modeling using the Unified Modeling Language (UML). It serves as a comprehensive introduction to the key concepts and methodologies involved in object-oriented analysis and design, enabling students to effectively capture customer requirements, transform them into static classes or objects, and model dynamic object behaviors for successful system development.\r\nThe module commences by presenting the fundamental concepts of object-oriented analysis and design. Students learn about key principles such as encapsulation, inheritance, and polymorphism. They explore the benefits of object-oriented programming paradigms, including code reusability, modularity, and maintainability. Through practical examples and exercises, students gain a solid understanding of these concepts, establishing a strong foundation for subsequent topics.\r\nA significant aspect of the module revolves around capturing customer requirements through use cases. Students learn how to elicit and document user requirements by identifying and analyzing system functionalities from the perspective of end-users. They delve into the process of constructing use case diagrams and scenarios, effectively mapping out interactions between system actors and the system itself. By mastering the use case approach, students acquire the skills necessary to establish clear and comprehensive requirements, facilitating effective system development.\r\nThe module also focuses on the modeling of static classes and objects, which form the building blocks of object-oriented systems. Students gain proficiency in creating class diagrams, identifying classes and their relationships, and defining attributes and methods. They learn how to utilize UML notation to accurately represent the structure of a system and its components. Furthermore, students explore techniques for refining class diagrams, including generalization, aggregation, and association, enabling them to create well-designed and organized systems.\r\nDynamic object behaviors are another vital aspect covered in the module. Students learn how to model the dynamic aspects of object-oriented systems, including object interactions, state transitions, and event-driven behaviors. They gain practical experience in creating sequence diagrams and state machine diagrams, effectively visualizing the flow of activities and system behavior over time. By modeling dynamic object behaviors, students develop a holistic understanding of how objects interact within a system, allowing them to identify potential issues and optimize system performance.', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=3fad4787-f003-4a4e-9607-4fe925a1a79d&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Object Oriented Analysis and Modelling - 1\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=90b6825e-9090-462c-9d48-36db3ab74f61&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Object Oriented Analysis and Modelling - 2\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=407975d9-0e94-4569-90a5-5bc3f1bf1880&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Use Case Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=30cc0ca5-3611-4bb4-b327-8ddfb206e350&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Use Case Specification\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=cccb0f9c-39c6-4d16-9927-2e9032934eeb&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Activity Diagram Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=d2fc7471-2197-44d0-a86e-7e8753aea277&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"07 Static Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=07d3ed54-7b82-4e41-bca3-9704e2489f51&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"08 Object and Class Structuring\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=4b3882c0-a529-42f4-b299-2c62ccdff0e9&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"09 Interaction Modelling\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=f3f2108b-8f3b-4088-96ae-068c3cb4f0a6&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"10 Finite State Machine\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=efdb7534-875c-4633-96b3-9da422fea95b&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"11 Other UML Diagram\",\"url\":\"https://cloudmails.sharepoint.com/sites/DesignMethods022023-SLS/_layouts/15/embed.aspx?UniqueId=9610710a-3d9c-4fce-8ec3-c888839f278a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-22 09:56:13', '../upload/646b3c3d0b4d8_dmtd.png', 'Salasiah Binti Sulaiman'),
(13, 'Requirements Engineering', 'This module provides a comprehensive introduction to the processes involved in requirements engineering for complex systems. It covers the concepts of eliciting, developing, analyzing, validating, and managing requirements. Students gain a deep understanding of the principles and practical skills required for software development, including methodologies and tools for specification, design, development, testing, evaluation, and maintenance of software systems. The module emphasizes the importance of requirements engineering throughout the software development life cycle and explores specific techniques that can be applied to ensure successful project outcomes. ', '[{\"title\":\"01 Introduction\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=b3822f75-f33c-4319-9039-c60aa6691391&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"02 Requirement Elicitation\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=0eb9a2de-20e9-4dfd-b080-ec2eb9b87d79&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"03 Requirement Documentation - Natural Language Based - 1\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=cb80312a-2d6f-4b1e-86c7-d90d45caa249&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"04 Requirement Documentation - Natural Language Based - 2\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=52893ebe-110d-468d-8a72-61f60cbcb062&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"05 Requirement Management\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=fe8d564a-ee6b-44dc-b74c-79df7f8dcd61&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"},{\"title\":\"06 Requirements\",\"url\":\"https://cloudmails.sharepoint.com/sites/RENGAPD2F2209SE/_layouts/15/embed.aspx?UniqueId=73442321-a217-43c3-aab0-ebe6823e2b5a&embed=%7B%22ust%22%3Afalse%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create\"}]', '2023-05-22 17:35:31', '../upload/646ba7e32c249_reng.png', 'Nur Amira Abdul Majid');

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `id` int(10) UNSIGNED NOT NULL,
  `question_id` int(10) UNSIGNED DEFAULT NULL,
  `option_text` varchar(500) NOT NULL,
  `is_answer` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `question_id`, `option_text`, `is_answer`) VALUES
(25, 7, 'Break tag', 1),
(26, 7, 'Bold tag', 0),
(27, 7, 'Paragraph tag', 0),
(28, 7, 'Header tag', 0),
(29, 8, 'font-size', 0),
(30, 8, 'background-color', 0),
(31, 8, 'color', 1),
(32, 8, 'text-align', 0),
(33, 9, 'String', 0),
(34, 9, 'Boolean', 0),
(35, 9, 'Number', 0),
(36, 9, 'Character', 1),
(37, 10, 'Asynchronous JavaScript and XML', 1),
(38, 10, 'Asynchronous Java and XML', 0),
(39, 10, 'Asynchronous JavaScript and XHTML', 0),
(40, 10, 'Asynchronous Java and XHTML', 0),
(41, 11, 'mysqli_query()', 0),
(42, 11, 'mysqli_fetch_assoc()', 0),
(43, 11, 'mysqli_connect()', 1),
(44, 11, 'mysqli_close()', 0),
(65, 17, 'Queue', 0),
(66, 17, 'Stack', 1),
(67, 17, 'Linked List', 0),
(68, 17, 'Tree', 0),
(69, 18, 'Array', 0),
(70, 18, 'Queue', 0),
(71, 18, 'Stack', 0),
(72, 18, 'Doubly Linked List', 1),
(73, 19, 'Queue', 0),
(74, 19, 'Stack', 0),
(75, 19, 'Heap', 0),
(76, 19, 'Binary Search Tree', 1),
(77, 20, 'Queue', 1),
(78, 20, 'Stack', 0),
(79, 20, 'Linked List', 0),
(80, 20, 'Hash Table', 0),
(81, 21, 'Heap', 1),
(82, 21, 'Queue', 0),
(83, 21, 'Stack', 0),
(84, 21, 'Binary Search Tree', 0),
(85, 22, 'Data analysis', 0),
(86, 22, 'Formulating research questions', 1),
(87, 22, 'Literature review', 0),
(88, 22, 'Data collection', 0),
(89, 23, 'Cross-sectional study', 0),
(90, 23, 'Case study', 0),
(91, 23, 'Longitudinal study', 1),
(92, 23, 'Experimental study', 0),
(93, 24, 'Simple random sampling', 0),
(94, 24, 'Convenience sampling', 1),
(95, 24, 'Stratified sampling', 0),
(96, 24, 'Cluster sampling', 0),
(97, 25, 'To summarize the research findings', 0),
(98, 25, 'To provide a detailed background of the study', 0),
(99, 25, 'To guide the research process and make predictions', 1),
(100, 25, 'To present statistical analyses of the data', 0),
(101, 26, 'Survey research', 0),
(102, 26, 'Experimental research', 0),
(103, 26, 'Case study research', 1),
(104, 26, 'Correlational research', 0);

-- --------------------------------------------------------

--
-- Table structure for table `qr_details`
--

CREATE TABLE `qr_details` (
  `id` int(11) NOT NULL,
  `student_name` varchar(50) NOT NULL,
  `lesson_name` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `qr_details`
--

INSERT INTO `qr_details` (`id`, `student_name`, `lesson_name`, `date`) VALUES
(2, 'Lennon Tan', 'Furter Web Design and Development', '2023-05-26'),
(3, 'Phey Min', 'Furter Web Design and Development', '2023-05-26'),
(4, 'Innis Yu', 'Data Structure', '2023-05-26');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(10) UNSIGNED NOT NULL,
  `quiz_id` int(10) UNSIGNED DEFAULT NULL,
  `question_text` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `quiz_id`, `question_text`) VALUES
(7, 3, 'What does the <br> tag represent in HTML?'),
(8, 3, 'Which property is used to change the text color of an element in CSS?'),
(9, 3, 'Which of the following is NOT a JavaScript data type?'),
(10, 3, 'What does AJAX stand for?'),
(11, 3, 'Which PHP function is used to establish a connection to a MySQL database?'),
(17, 5, 'Which data structure follows the Last-In-First-Out (LIFO) principle?'),
(18, 5, 'Which data structure allows efficient insertion and deletion at both ends?'),
(19, 5, 'Which data structure organizes elements in a sorted manner?'),
(20, 5, 'Which data structure uses a First-In-First-Out (FIFO) approach?'),
(21, 5, 'Which data structure allows efficient retrieval of the maximum or minimum element?'),
(22, 6, 'What is the first step in the research process?'),
(23, 6, 'Which research design focuses on studying a group of participants over an extended period?'),
(24, 6, 'Which sampling technique involves selecting participants based on their availability and willingness to participate?'),
(25, 6, 'What is the purpose of a research hypothesis?'),
(26, 6, 'Which of the following research methods focuses on gathering qualitative data through in-depth interviews or observations?');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(10) UNSIGNED NOT NULL,
  `lesson_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `lesson_id`) VALUES
(3, 1),
(5, 2),
(6, 3);

-- --------------------------------------------------------

--
-- Table structure for table `quiz_results`
--

CREATE TABLE `quiz_results` (
  `id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `lesson_name` varchar(255) NOT NULL,
  `result` decimal(5,2) NOT NULL,
  `grade` char(1) NOT NULL,
  `submit_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `quiz_results`
--

INSERT INTO `quiz_results` (`id`, `student_name`, `lesson_name`, `result`, `grade`, `submit_time`) VALUES
(1, 'Lennon Tan', 'Furter Web Design and Development', 80.00, 'B', '2023-05-26 17:55:19'),
(2, 'Lennon Tan', 'Data Structure', 40.00, 'F', '2023-05-26 17:55:48'),
(3, 'Phey Min', 'Research Methods for Computing and Technology', 20.00, 'F', '2023-05-26 17:56:49'),
(4, 'Phey Min', 'Furter Web Design and Development', 100.00, 'A', '2023-05-26 17:57:08'),
(5, 'Innis Yu', 'Furter Web Design and Development', 20.00, 'F', '2023-05-26 17:57:59'),
(6, 'Innis Yu', 'Data Structure', 60.00, 'D', '2023-05-26 17:58:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `ROLE` int(11) DEFAULT NULL,
  `PHONE` varchar(11) DEFAULT NULL,
  `GENDER` int(11) DEFAULT NULL,
  `OCCUPATION` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `NAME`, `EMAIL`, `PASSWORD`, `ROLE`, `PHONE`, `GENDER`, `OCCUPATION`) VALUES
(1, 'Lennon Tan', 'lennon@gmail.com', 'lennontan123', 0, '0162345678', 1, 'Student'),
(2, 'Yannis Leng', 'yannis@gmail.com', 'yannisleng123', 1, '0125642467', 0, 'Student'),
(3, 'Phey Min', 'pheymin@gmail.com', 'pheymin123', 0, NULL, NULL, NULL),
(4, 'Kai Kiat', 'kaikiat@gmail.com', 'kaikiat123', 1, NULL, NULL, NULL),
(5, 'Innis Yu', 'innis@gmail.com', 'innis123', 0, NULL, NULL, NULL),
(6, 'Seng Feng', 'sengfeng@gmail.com', 'sengfeng123', 1, NULL, NULL, NULL),
(7, 'Perry Lim', 'perrylim@mail.com', 'perry123', 0, NULL, NULL, NULL),
(8, 'Mathieu', 'mathieu@mail.com', 'mathieu456', 0, NULL, NULL, NULL),
(9, 'Bryan Lai', 'bryanlai@gmail.com', 'bryanlai123', 1, NULL, NULL, NULL),
(10, 'John Doe', 'johndoe@klia.bo', 'johndoe123', 0, NULL, NULL, NULL),
(11, 'Robert Fox', 'robertfox@bezza.bo', 'robertfox123', 0, NULL, NULL, NULL),
(12, 'Marcus Mock', 'marcusmock@lagging.co', 'marcusmock123', 0, NULL, NULL, NULL),
(13, 'William May', 'williammay@buzz.co', 'williammay123', 0, NULL, NULL, NULL),
(14, 'Michael', 'michael@buzzer.coco', 'michael123', 0, NULL, NULL, NULL),
(15, 'Henry', 'henry@buzz.bo', 'henry123', 0, NULL, NULL, NULL),
(16, 'Vite', 'vite@javascript.co', 'vite123', 0, NULL, NULL, NULL),
(17, 'Marched', 'marched@coconut.co', 'marched123', 0, NULL, NULL, NULL),
(18, 'Halimathon', 'halimathon@next.co', 'halimathon123', 0, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `forums`
--
ALTER TABLE `forums`
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
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `qr_details`
--
ALTER TABLE `qr_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_id` (`quiz_id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lesson_id` (`lesson_id`);

--
-- Indexes for table `quiz_results`
--
ALTER TABLE `quiz_results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `forums`
--
ALTER TABLE `forums`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `lessons`
--
ALTER TABLE `lessons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `qr_details`
--
ALTER TABLE `qr_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `quiz_results`
--
ALTER TABLE `quiz_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`);

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
