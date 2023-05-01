import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'who is the indian national animal?',
			answerOptions: [
				{ answerText: 'monkey', isCorrect: false },
				{ answerText: 'tiger', isCorrect: true },
				{ answerText: 'horse', isCorrect: false },
				{ answerText: 'elephant', isCorrect: false },
			],
		},
		{
			questionText: '1024 kilobytes is equal to?',
			answerOptions: [
				{ answerText: '1 TB', isCorrect: false },
				{ answerText: '1 KB', isCorrect: false },
				{ answerText: '1 MB', isCorrect: true },
				{ answerText: '1 GB', isCorrect: false },
			],
		},
		{
			questionText: 'where is burj khalifa?',
			answerOptions: [
				{ answerText: 'seoul', isCorrect: false },
				{ answerText: 'hanoi', isCorrect: false },
				{ answerText: 'dubling', isCorrect: false },
				{ answerText: 'dubai', isCorrect: true },
			],
		},
		{
			questionText: 'which space agency 1st go to the mars?',
			answerOptions: [
				{ answerText: 'isro', isCorrect: true },
				{ answerText: 'roscosmos', isCorrect: false },
				{ answerText: 'space x', isCorrect: false },
				{ answerText: 'nasa', isCorrect: false },
			],
		},
	];	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}