'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [expandedTeam, setExpandedTeam] = useState(null);
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const tournamentData = [
    {
      rank: 1,
      name: "The Angels",
      totalPoints: 50.0,
      round1: 24.0,
      finalRound: 26.0, // Renamed from round2 to finalRound
      inFinalRound: true,
      players: [
        { name: "Hunter", round1: 11.0, finalRound: 10.0 },
        { name: "Angel", round1: 13.0, finalRound: 16.0 }
      ]
    },
    {
      rank: 2,
      name: "EDP",
      totalPoints: 41.0,
      round1: 23.0,
      finalRound: 18.0, // Renamed from round2 to finalRound
      inFinalRound: true,
      players: [
        { name: "Matt", round1: 14.0, finalRound: 7.0 },
        { name: "Steven", round1: 9.0, finalRound: 11.0 }
      ]
    },
    {
      rank: 3,
      name: "TTV",
      totalPoints: 34.0,
      round1: 26.0,
      finalRound: 8.0, // Renamed from round2 to finalRound
      inFinalRound: true,
      players: [
        { name: "Elijah", round1: 22.0, finalRound: 3.0 },
        { name: "Josiah", round1: 4.0, finalRound: 5.0 }
      ]
    },
    {
      rank: 4,
      name: "Kings",
      totalPoints: 29.0,
      round1: 23.0,
      finalRound: 6.0, // Renamed from round2 to finalRound
      inFinalRound: true,
      players: [
        { name: "Davian", round1: 14.0, finalRound: 6.0 },
        { name: "Isaiah", round1: 9.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 5,
      name: "The Bombers",
      totalPoints: 28.0,
      round1: 28.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: true,
      players: [
        { name: "Tye", round1: 15.0, finalRound: 0.0 },
        { name: "Skye", round1: 13.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 5,
      name: "USA",
      totalPoints: 28.0,
      round1: 28.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "Gavin", round1: 4.0, finalRound: 0.0 },
        { name: "Liam", round1: 24.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 7,
      name: "Sigma",
      totalPoints: 22.0,
      round1: 22.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "Liam", round1: 4.0, finalRound: 0.0 },
        { name: "Brandon", round1: 18.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 8,
      name: "Rizzlers",
      totalPoints: 20.0,
      round1: 20.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "Preston", round1: 18.0, finalRound: 0.0 },
        { name: "Ledger", round1: 2.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 9,
      name: "The Skibidi",
      totalPoints: 18.0,
      round1: 18.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "Wilder", round1: 10.0, finalRound: 0.0 },
        { name: "Nathan", round1: 8.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 10,
      name: "Team Doge",
      totalPoints: 17.0,
      round1: 17.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "Gabriel", round1: 11.0, finalRound: 0.0 },
        { name: "Ethan", round1: 6.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 11,
      name: "Rizzlers of Oz",
      totalPoints: 6.0,
      round1: 6.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "Samuel", round1: 1.0, finalRound: 0.0 },
        { name: "Matthew", round1: 5.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 11,
      name: "XR",
      totalPoints: 6.0,
      round1: 6.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "XR", round1: 1.0, finalRound: 0.0 },
        { name: "Malakai", round1: 5.0, finalRound: 0.0 }
      ]
    },
    {
      rank: 13,
      name: "Alphas",
      totalPoints: 5.0,
      round1: 5.0,
      finalRound: 0.0, // Renamed from round2 to finalRound
      inFinalRound: false,
      players: [
        { name: "Cambden", round1: 2.0, finalRound: 0.0 },
        { name: "Racer", round1: 3.0, finalRound: 0.0 }
      ]
    }
  ];

  // Helper function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Helper function to get all players with their total points
  const getAllPlayersWithPoints = () => {
    const players = [];
    tournamentData.forEach(team => {
      team.players.forEach(player => {
        players.push({
          name: player.name,
          totalPoints: player.round1 + player.finalRound
        });
      });
    });
    return players;
  };

  // Helper function to get the player(s) with the most points
  const getTopScorers = () => {
    const allPlayers = getAllPlayersWithPoints();
    if (allPlayers.length === 0) return [];
    const maxPoints = Math.max(...allPlayers.map(p => p.totalPoints));
    return allPlayers.filter(p => p.totalPoints === maxPoints);
  };

  const analyzeQuestion = (questionText) => {
    const questionLower = questionText.toLowerCase();

    // Helper function to calculate total points
    const calculateTotalPoints = () => {
      return tournamentData.reduce((sum, team) => sum + team.totalPoints, 0);
    };

    // Helper function to get teams in the final round
    const getFinalRoundTeams = () => {
      return tournamentData.filter(team => team.inFinalRound).map(team => team.name);
    };

    // Helper function to find player's teams and ranks
    const findPlayerTeamsAndRanks = (playerName) => {
      const matchingTeams = tournamentData.filter(team => 
        team.players.some(player => 
          player.name.toLowerCase() === playerName.toLowerCase()
        )
      );
      return matchingTeams.map(team => ({ teamName: team.name, rank: team.rank }));
    };

    // Regular Expressions for different question types
    const whoWonRegex = /(?:who|which team) won(?: the tournament)?/i;
    const whatPlaceRegex = /(?:what place|what rank) did\s+([a-zA-Z]+)\s*(?:get|have)?/i;
    const whoOnTeamRegex = /who\s+(?:is|are|was|were)\s+on\s+team\s+([a-zA-Z\s]+)/i;
    const howManyTeamsRegex = /how many teams/i;
    const totalPointsRegex = /total points|points in total/i;
    const finalsRegex = /finals|final round|who made the finals|who was in the finals|who was in the final round|which teams were in the finals/i;
    const howManyPointsPlayerRegex = /how many points did\s+([a-zA-Z]+)\s+(?:have|get)/i;
    const whatTeamPlayerOnRegex = /what team was\s+([a-zA-Z]+)\s+on/i;
    const whoHadMostPointsRegex = /(?:who|which player) had the most points in the tournament/i;
    const howDidPlayerDoRegex = /how did\s+([a-zA-Z]+)\s+do\s+in\s+the\s+tournament/i;

    // Different question types
    if (whoWonRegex.test(questionText)) {
      const winner = tournamentData.find(team => team.rank === 1);
      if (winner) {
        const playerNames = winner.players.map(player => player.name).join(' and ');
        const prefix = winner.name.startsWith('The ') ? '' : 'The ';
        return `${prefix}${winner.name} won the tournament with ${winner.totalPoints} points! The winning team consisted of ${playerNames}.`;
      }
      return "I'm sorry, but I couldn't determine the winning team.";
    }

    const whatPlaceMatch = questionLower.match(whatPlaceRegex);
    if (whatPlaceMatch) {
      const playerNameInput = whatPlaceMatch[1];
      const playerInfo = findPlayerTeamsAndRanks(playerNameInput);
      if (playerInfo.length > 0) {
        const infoStrings = playerInfo.map(info => `${capitalizeFirstLetter(playerNameInput)} was on team ${info.teamName} which placed #${info.rank}.`);
        return infoStrings.join(' ');
      }
      return `I couldn't find any information about ${capitalizeFirstLetter(playerNameInput)} in the tournament data.`;
    }

    const whoOnTeamMatch = questionLower.match(whoOnTeamRegex);
    if (whoOnTeamMatch) {
      const teamNameInput = whoOnTeamMatch[1].trim();
      const team = tournamentData.find(t => 
        t.name.toLowerCase() === teamNameInput.toLowerCase()
      );
      if (team) {
        const playerNames = team.players.map(player => player.name).join(' and ');
        return `Team ${team.name} consisted of ${playerNames}.`;
      }
      return `I couldn't find any information about team "${capitalizeFirstLetter(teamNameInput)}" in the tournament data.`;
    }

    if (howManyTeamsRegex.test(questionLower)) {
      return `There were ${tournamentData.length} teams that participated in the tournament.`;
    }

    if (totalPointsRegex.test(questionLower)) {
      const totalPoints = calculateTotalPoints();
      return `The total points scored in the tournament were ${totalPoints}.`;
    }

    if (finalsRegex.test(questionLower)) {
      const finalsTeams = getFinalRoundTeams();
      if (finalsTeams.length > 0) {
        return `The teams that made it to the finals were: ${finalsTeams.join(', ')}.`;
      }
      return "No teams made it to the finals.";
    }

    const howManyPointsPlayerMatch = questionLower.match(howManyPointsPlayerRegex);
    if (howManyPointsPlayerMatch) {
      const playerNameInput = howManyPointsPlayerMatch[1];
      const teams = tournamentData.filter(team => 
        team.players.some(player => player.name.toLowerCase() === playerNameInput.toLowerCase())
      );
      if (teams.length > 0) {
        // Assuming we want to show all instances if multiple
        const pointsInfo = teams.map(team => {
          const player = team.players.find(p => p.name.toLowerCase() === playerNameInput.toLowerCase());
          return `${player.name} from team ${team.name} had a total of ${player.round1 + player.finalRound} points.`;
        }).join(' ');
        return pointsInfo;
      }
      return `I couldn't find any information about ${capitalizeFirstLetter(playerNameInput)} in the tournament data.`;
    }

    const whatTeamPlayerOnMatch = questionLower.match(whatTeamPlayerOnRegex);
    if (whatTeamPlayerOnMatch) {
      const playerNameInput = whatTeamPlayerOnMatch[1];
      const playerInfo = findPlayerTeamsAndRanks(playerNameInput);
      if (playerInfo.length > 0) {
        const teamNames = playerInfo.map(info => info.teamName).join(', ');
        return `${capitalizeFirstLetter(playerNameInput)} was on the following team(s): ${teamNames}.`;
      }
      return `I couldn't find any information about ${capitalizeFirstLetter(playerNameInput)} in the tournament data.`;
    }

    const whoHadMostPointsMatch = questionLower.match(whoHadMostPointsRegex);
    if (whoHadMostPointsMatch) {
      const topPlayers = getTopScorers();
      if (topPlayers.length === 0) {
        return "I couldn't find any player data in the tournament.";
      }
      if (topPlayers.length === 1) {
        return `${topPlayers[0].name} had the most points in the tournament with a total of ${topPlayers[0].totalPoints} points.`;
      } else {
        const playerNames = topPlayers.map(p => p.name).join(', ');
        return `${playerNames} had the most points in the tournament with a total of ${topPlayers[0].totalPoints} points each.`;
      }
    }

    const howDidPlayerDoMatch = questionLower.match(howDidPlayerDoRegex);
    if (howDidPlayerDoMatch) {
      const playerNameInput = howDidPlayerDoMatch[1];
      const teams = tournamentData.filter(team => 
        team.players.some(player => player.name.toLowerCase() === playerNameInput.toLowerCase())
      );
      if (teams.length > 0) {
        const performanceInfo = teams.map(team => {
          const player = team.players.find(p => p.name.toLowerCase() === playerNameInput.toLowerCase());
          return `${player.name} from team ${team.name} scored ${player.round1 + player.finalRound} points (${player.round1} in Round 1 and ${player.finalRound} in the Final Round).`;
        }).join(' ');
        return performanceInfo;
      }
      return `I couldn't find any information about ${capitalizeFirstLetter(playerNameInput)} in the tournament data.`;
    }

    return "I apologize, but I don't have that specific information in our tournament data. For more detailed information, please feel free to text our team directly at 432-201-1494 and they'll be happy to help!";
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (question.trim()) {
      const answer = analyzeQuestion(question);
      setQuestions([...questions, {
        text: question,
        answer: answer,
        timestamp: new Date()
      }]);
      setQuestion('');
    }
  };

  const handleCommonQuestionClick = (commonQuestion, commonAnswer) => {
    setQuestions([...questions, {
      text: commonQuestion,
      answer: commonAnswer,
      timestamp: new Date()
    }]);
  };

  const toggleTeam = (uniqueKey) => {
    setExpandedTeam(expandedTeam === uniqueKey ? null : uniqueKey);
  };

  // Pre-set commonly asked questions
  const commonQuestions = [
    {
      question: "Who won the tournament?",
      answer: "The Angels won with 50 points! The team consisted of Hunter and Angel."
    },
    {
      question: "Which Teams were in the Finals?",
      answer: "The teams that made it to the finals were: The Angels, EDP, TTV, Kings, and The Bombers."
    },
    {
      question: "How many teams participated?",
      answer: "13 teams participated in the tournament."
    },
    {
      question: "What was the highest individual score?",
      answer: "Liam from Team USA scored the highest individual points in a single round with 24 points in Round 1."
    },
    {
      question: "How do I contact the tournament organizers?",
      answer: "You can text our team directly at 432-201-1494 for any additional questions or information."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Image 
            src="/Element14_Logo_FullColor_Transparent.png" 
            alt="Element14 Tournament" 
            width={200}
            height={60}
            className="h-16 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Tournament Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Haunted Duos Fortnite Tournament Results</h1>
        </div>

        {/* Tournament Results Section */}
        <div className="bg-white rounded-lg shadow mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Tournament Rankings</h2>
          <div className="space-y-4">
            {tournamentData.map((team) => {
              const uniqueKey = `${team.rank}-${team.name}`;
              return (
                <div key={uniqueKey} className="border rounded-lg">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleTeam(uniqueKey)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-purple-600">#{team.rank}</span>
                      <div>
                        <h3 className="font-semibold text-lg text-black">{team.name}</h3>
                        <p className="text-black">Total Points: {team.totalPoints}</p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800">
                      {expandedTeam === uniqueKey ? 'Hide Details' : 'Show Details'}
                    </button>
                  </div>
                  
                  {expandedTeam === uniqueKey && (
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {team.players.map((player, idx) => (
                          <div key={idx} className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-medium mb-2 text-black">{player.name}</h4>
                            <div className="space-y-1 text-sm">
                              <p className="text-black">Round 1: {player.round1} points</p>
                              <p className="text-black">Final Round: {player.finalRound} points</p>
                              <p className="font-medium text-black">Total: {player.round1 + player.finalRound} points</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Q&A Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Tournament Q&A</h2>
          <form onSubmit={handleSubmitQuestion} className="mb-6">
            <div className="flex gap-4">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question about the tournament..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Commonly Asked Questions Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6 text-black">Commonly Asked Questions</h2>
            <div className="space-y-4">
              {commonQuestions.map((cq, idx) => (
                <div
                  key={idx}
                  className="bg-purple-50 p-6 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors cursor-pointer"
                  onClick={() => handleCommonQuestionClick(cq.question, cq.answer)}
                >
                  <h3 className="text-lg font-medium text-purple-900 mb-2">{cq.question}</h3>
                  <p className="text-purple-800">{cq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Display Answers */}
          <div className="space-y-4 mt-8">
            {questions.map((q, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2 text-black font-semibold">Q: {q.text}</p>
                <p className="mb-2 text-black">A: {q.answer}</p>
                <p className="text-sm text-gray-600">
                  {q.timestamp.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
