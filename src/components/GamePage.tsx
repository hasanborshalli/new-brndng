import { useEffect } from "react";
import "../styles/GamePage.css";

export function GamePage() {
    useEffect(() => {
        // ✅ Load your old JavaScript file dynamically
        const script = document.createElement("script");
        script.src = "/index.js"; // Make sure index.js is inside /public folder
        script.async = true;
        document.body.appendChild(script);

        // If your original game used index2.js, load it too
        const script2 = document.createElement("script");
        script2.src = "/index2.js";
        script2.async = true;
        document.body.appendChild(script2);

        // Cleanup scripts when leaving page
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <div className="game-container">
            <div className="header">
                <div className="logo">
                    🤖 AI for Marketing: The Ultimate Challenge
                </div>
                <div className="tagline">
                    Powered by Brndng — Where AI Meets Marketing
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        id="gameProgress"
                        style={{ width: "0%" }}
                    ></div>
                </div>
                <div>
                    Mission <span id="currentMission">1</span> of 7
                </div>
            </div>

            <div className="player-stats">
                <div className="stat-card">
                    <div className="stat-value" id="salesScore">
                        0
                    </div>
                    <div className="stat-label">Sales Score</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" id="engagementScore">
                        0
                    </div>
                    <div className="stat-label">Engagement</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" id="trustScore">
                        100
                    </div>
                    <div className="stat-label">Brand Trust</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" id="aiToolsUnlocked">
                        0
                    </div>
                    <div className="stat-label">AI Tools Unlocked</div>
                </div>
            </div>

            <div className="mission-container" id="missionContainer">
                <div className="mission-header">
                    <div className="mission-icon" id="missionIcon">
                        🚀
                    </div>
                    <div>
                        <div className="mission-title" id="missionTitle">
                            Mission 1: Introduction to AI in Marketing
                        </div>
                    </div>
                </div>

                <div className="scenario-box" id="scenarioBox">
                    <h3>🎯 Your Challenge</h3>
                    <p id="scenarioText">
                        Welcome to your new role as Digital Marketing Director
                        at TechStart, an innovative startup! Your CEO just
                        announced that the company needs to embrace AI to
                        compete with larger brands.
                    </p>
                </div>

                <div id="choicesContainer" className="choices-container"></div>

                <div className="feedback-box" id="feedbackBox">
                    <h4 id="feedbackTitle">Great Choice!</h4>
                    <p id="feedbackText">
                        You've made an excellent decision that will boost your
                        marketing effectiveness!
                    </p>
                </div>

                <div className="ai-tools">
                    <div className="ai-tool locked" data-tool="chatgpt">
                        <div>🤖 ChatGPT</div>
                        <div style={{ fontSize: "0.8rem", marginTop: "5px" }}>
                            Copywriting
                        </div>
                    </div>
                    <div className="ai-tool locked" data-tool="midjourney">
                        <div>🎨 Midjourney</div>
                        <div style={{ fontSize: "0.8rem", marginTop: "5px" }}>
                            Visual Creation
                        </div>
                    </div>
                    <div className="ai-tool locked" data-tool="jasper">
                        <div>📝 Jasper</div>
                        <div style={{ fontSize: "0.8rem", marginTop: "5px" }}>
                            Campaign Builder
                        </div>
                    </div>
                    <div className="ai-tool locked" data-tool="analytics">
                        <div>📊 AI Analytics</div>
                        <div style={{ fontSize: "0.8rem", marginTop: "5px" }}>
                            Data Insights
                        </div>
                    </div>
                </div>

                <div className="mission-complete" id="missionComplete">
                    <h2>🎉 Mission Complete!</h2>
                    <p id="completionMessage">
                        Congratulations! You've successfully completed this
                        mission.
                    </p>
                    <div className="rewards" id="rewardsContainer"></div>
                </div>

                <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <button
                        className="btn btn-primary"
                        id="nextBtn"
                        onClick={() => (window as any).nextMission?.()}
                    >
                        Continue to Next Mission
                    </button>
                    <button
                        className="btn btn-secondary"
                        id="restartBtn"
                        onClick={() => (window as any).restartGame?.()}
                    >
                        Restart Game
                    </button>
                </div>
            </div>
        </div>
    );
}
