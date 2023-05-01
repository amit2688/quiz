import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'where is eiffel tower?',
			answerOptions: [
				{ answerText: 'germany', isCorrect: false },
				{ answerText: 'singapore', isCorrect: false },
				{ answerText: 'london', isCorrect: false },
				{ answerText: 'paris', isCorrect: true },
			],
		},
		{
			questionText: 'most populated country?',
			answerOptions: [
				{ answerText: 'africa', isCorrect: false },
				{ answerText: 'india', isCorrect: true },
				{ answerText: 'china', isCorrect: false },
				{ answerText: 'russia', isCorrect: false },
			],
		},
		{
			questionText: 'which is the longest river in india?',
			answerOptions: [
				{ answerText: 'ganga', isCorrect: true },
				{ answerText: 'godavari', isCorrect: false },
				{ answerText: 'yamuna', isCorrect: false },
				{ answerText: 'sutlej', isCorrect: false },
			],
		},
		{
			questionText: 'world biggest mountain?',
			answerOptions: [
				{ answerText: 'k2', isCorrect: false },
				{ answerText: 'himalays', isCorrect: false },
				{ answerText: 'everest', isCorrect: true },
				{ answerText: 'hindu kush', isCorrect: false },
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