<?php
require('dbConfig.php');

// Retrieve the lesson ID from the query parameters
$lessonId = $_GET['id'];

// Retrieve the lesson name from the database
$lessonNameQuery = "SELECT lesson_name FROM lessons WHERE id = " . $lessonId;
$lessonNameResult = mysqli_query($db, $lessonNameQuery);
$lessonNameRow = mysqli_fetch_assoc($lessonNameResult);
$lessonName = $lessonNameRow['lesson_name'];

// Retrieve the quiz questions and answers from the database
$questionsQuery = "SELECT q.id, q.question_text, o.id AS option_id, o.option_text, o.is_answer
                  FROM questions q
                  INNER JOIN options o ON q.id = o.question_id
                  WHERE q.quiz_id = " . $lessonId;
$questionsResult = mysqli_query($db, $questionsQuery);

$quizData = array();

while ($row = mysqli_fetch_assoc($questionsResult)) {
    $questionId = $row['id'];
    $optionId = $row['option_id'];

    // Create or append to the question in the quiz data array
    if (!isset($quizData[$questionId])) {
        $quizData[$questionId] = array(
            'question_text' => $row['question_text'],
            'options' => array()
        );
    }

    // Add the option to the question in the quiz data array
    $quizData[$questionId]['options'][] = array(
        'option_id' => $optionId,
        'option_text' => $row['option_text'],
        'is_answer' => $row['is_answer']
    );
}

// Prepare the data to be sent as a response
$responseData = array(
    'lessonName' => $lessonName,
    'quizData' => $quizData
);

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($responseData);
?>