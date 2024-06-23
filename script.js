function calculate() {
    const scores = {
        chinese: parseFloat(document.getElementById('chinese').value) || 0,
        math: parseFloat(document.getElementById('math').value) || 0,
        english: parseFloat(document.getElementById('english').value) || 0,
        politics: parseFloat(document.getElementById('politics').value) || 0,
        history: parseFloat(document.getElementById('history').value) || 0,
        physics: parseFloat(document.getElementById('physics').value) || 0,
        chemistry: parseFloat(document.getElementById('chemistry').value) || 0,
        biology: parseFloat(document.getElementById('biology').value) || 0,
        geography: parseFloat(document.getElementById('geography').value) || 0,
        sports: parseFloat(document.getElementById('sports').value) || 0
    };

    const originalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const convertedScore = (
        scores.chinese + scores.math + scores.english +
        scores.politics * 0.5 + scores.history * 0.5 +
        scores.physics * 0.9 + scores.chemistry * 0.6 +
        scores.biology * 0.3 + scores.geography * 0.3 + scores.sports
    );

    document.getElementById('result').innerText = `原始分: ${originalScore} 折算分: ${convertedScore} \r\n满分: 1090/800`;
}
