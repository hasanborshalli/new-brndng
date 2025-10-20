const gameState = {
    currentMission: 1,
    salesScore: 0,
    engagementScore: 0,
    trustScore: 100,
    aiToolsUnlocked: 0,
    unlockedTools: [],
    selectedChoice: null,
};

const missions = [
    {
        id: 1,
        title: "Introduction to AI in Marketing",
        icon: "🚀",
        scenario:
            "Welcome to your new role as Digital Marketing Director at TechStart, an innovative startup! Your CEO just announced that the company needs to embrace AI to compete with larger brands. Your first task is to understand what AI can do for marketing and choose the right approach for your team.",
        choices: [
            {
                id: 1,
                title: "Start with AI-powered content creation tools",
                description:
                    "Focus on using AI to create social media posts, ads, and email campaigns faster",
                impact: { sales: 15, engagement: 20, trust: 0 },
                feedback:
                    "Excellent choice! AI content creation tools can dramatically increase your team's productivity and help maintain consistent brand messaging across all channels.",
                unlockTool: "chatgpt",
            },
            {
                id: 2,
                title: "Implement AI analytics and customer insights first",
                description:
                    "Use AI to understand customer behavior and market trends before creating campaigns",
                impact: { sales: 10, engagement: 15, trust: 10 },
                feedback:
                    "Smart strategic thinking! Understanding your audience through AI analytics provides a solid foundation for all future marketing efforts.",
                unlockTool: "analytics",
            },
            {
                id: 3,
                title: "Jump into full AI automation immediately",
                description:
                    "Automate everything from email campaigns to social media posting right away",
                impact: { sales: 5, engagement: 10, trust: -15 },
                feedback:
                    "While enthusiasm is great, rushing into full automation without understanding your audience can feel impersonal to customers. Consider a more gradual approach.",
                unlockTool: null,
            },
        ],
        reward: "AI Marketing Strategist",
    },
    {
        id: 2,
        title: "AI-Powered Market Research",
        icon: "🔍",
        scenario:
            "Your startup needs to identify the perfect target audience for your new product launch. Traditional market research would take weeks and cost thousands. Your team suggests using AI tools to analyze social media trends, competitor strategies, and customer sentiment in just hours.",
        choices: [
            {
                id: 1,
                title: "Use AI to analyze competitor social media and identify gaps",
                description:
                    "Deploy AI tools to study what competitors are doing and find opportunities they're missing",
                impact: { sales: 20, engagement: 15, trust: 5 },
                feedback:
                    "Brilliant competitive intelligence! AI analysis revealed that competitors are neglecting the 25-34 age group on LinkedIn, giving you a clear opportunity.",
                unlockTool: "analytics",
            },
            {
                id: 2,
                title: "Create AI-generated customer personas from data",
                description:
                    "Use machine learning to analyze customer data and create detailed buyer personas",
                impact: { sales: 25, engagement: 20, trust: 0 },
                feedback:
                    "Outstanding approach! Your AI-generated personas revealed three distinct customer segments with unique pain points and preferences.",
                unlockTool: "analytics",
            },
            {
                id: 3,
                title: "Rely on traditional surveys and focus groups instead",
                description:
                    "Stick with proven methods rather than trusting AI for important research",
                impact: { sales: 5, engagement: 5, trust: 10 },
                feedback:
                    "Traditional methods are valuable, but in today's fast-paced market, AI can provide insights in hours rather than weeks, giving you a competitive advantage.",
                unlockTool: null,
            },
        ],
        reward: "Market Research Expert",
    },
    {
        id: 3,
        title: "AI Content Creation Mastery",
        icon: "✍️",
        scenario:
            "Your marketing team needs to create 50 social media posts, 10 blog articles, and 5 video scripts for next month's campaign. Manually creating all this content would take weeks. Your team is excited to try AI content creation tools, but you need to ensure the content maintains your brand voice and quality.",
        choices: [
            {
                id: 1,
                title: "Train AI with your brand guidelines and past successful content",
                description:
                    "Feed AI tools your brand voice, successful posts, and style guidelines to maintain consistency",
                impact: { sales: 30, engagement: 35, trust: 5 },
                feedback:
                    "Perfect strategy! Training AI with your brand DNA resulted in content that sounds authentically like your brand while being produced 10x faster.",
                unlockTool: "chatgpt",
            },
            {
                id: 2,
                title: "Use AI for first drafts, then have humans refine everything",
                description:
                    "Let AI handle the initial creation, then have your team edit and personalize each piece",
                impact: { sales: 25, engagement: 30, trust: 10 },
                feedback:
                    "Excellent balanced approach! This hybrid method combines AI efficiency with human creativity, resulting in high-quality, authentic content.",
                unlockTool: "jasper",
            },
            {
                id: 3,
                title: "Generate everything with AI and publish without editing",
                description:
                    "Maximize efficiency by using AI-generated content directly without human intervention",
                impact: { sales: 15, engagement: 10, trust: -20 },
                feedback:
                    "While efficient, unedited AI content can sometimes miss nuances or contain errors. Your audience noticed some posts felt generic and engagement dropped.",
                unlockTool: "chatgpt",
            },
        ],
        reward: "AI Content Creator",
    },
    {
        id: 4,
        title: "Personalization at Scale",
        icon: "🎯",
        scenario:
            "Your email list has grown to 50,000 subscribers, but your current 'one-size-fits-all' approach is yielding poor results. You have rich customer data including purchase history, website behavior, and demographic information. It's time to use AI to create personalized experiences for each customer segment.",
        choices: [
            {
                id: 1,
                title: "Implement AI-driven dynamic email content",
                description:
                    "Use AI to automatically customize email content, subject lines, and send times for each subscriber",
                impact: { sales: 40, engagement: 45, trust: 5 },
                feedback:
                    "Incredible results! Personalized emails achieved 73% higher open rates and 127% higher click-through rates. Customers love feeling understood.",
                unlockTool: "jasper",
            },
            {
                id: 2,
                title: "Create AI-powered product recommendations",
                description:
                    "Use machine learning to suggest products based on individual customer behavior and preferences",
                impact: { sales: 50, engagement: 35, trust: 0 },
                feedback:
                    "Outstanding ROI! AI recommendations increased average order value by 35% and customer satisfaction scores improved significantly.",
                unlockTool: "analytics",
            },
            {
                id: 3,
                title: "Segment customers manually and create basic personalization",
                description:
                    "Divide customers into broad categories and create slightly different content for each group",
                impact: { sales: 15, engagement: 20, trust: 15 },
                feedback:
                    "Manual segmentation is a good start, but AI can identify micro-segments and patterns humans might miss, leading to much better results.",
                unlockTool: null,
            },
        ],
        reward: "Personalization Specialist",
    },
    {
        id: 5,
        title: "Marketing Automation Excellence",
        icon: "⚡",
        scenario:
            "Your marketing team is overwhelmed managing campaigns across email, social media, and paid ads. You need to implement AI-powered automation to scale your efforts while maintaining quality. The goal is to create systems that nurture leads, re-engage customers, and optimize campaigns automatically.",
        choices: [
            {
                id: 1,
                title: "Build comprehensive AI-driven customer journey automation",
                description:
                    "Create automated workflows that guide customers from awareness to purchase using AI triggers and personalization",
                impact: { sales: 45, engagement: 40, trust: 10 },
                feedback:
                    "Masterful execution! Your automated customer journeys increased conversion rates by 89% while reducing manual work by 75%.",
                unlockTool: "jasper",
            },
            {
                id: 2,
                title: "Implement AI chatbots for customer service and lead qualification",
                description:
                    "Deploy intelligent chatbots that can answer questions, qualify leads, and guide customers 24/7",
                impact: { sales: 35, engagement: 50, trust: 5 },
                feedback:
                    "Excellent customer experience improvement! AI chatbots handled 80% of inquiries instantly, improving satisfaction and freeing up your team for strategic work.",
                unlockTool: "chatgpt",
            },
            {
                id: 3,
                title: "Start with simple email autoresponders and basic scheduling",
                description:
                    "Begin with basic automation like welcome emails and scheduled social media posts",
                impact: { sales: 20, engagement: 25, trust: 15 },
                feedback:
                    "A safe start, but you're missing opportunities. Advanced AI automation could handle complex customer interactions and optimize campaigns in real-time.",
                unlockTool: null,
            },
        ],
        reward: "Automation Expert",
    },
    {
        id: 6,
        title: "AI Analytics and Performance Optimization",
        icon: "📊",
        scenario:
            "Your campaigns are generating massive amounts of data across multiple channels, but your team struggles to identify patterns and optimize performance. You need AI to analyze this data, predict trends, and automatically adjust campaigns for better results. The CEO wants to see clear ROI from your AI investments.",
        choices: [
            {
                id: 1,
                title: "Implement predictive analytics to forecast campaign performance",
                description:
                    "Use AI to predict which campaigns will succeed and automatically allocate budget to top performers",
                impact: { sales: 55, engagement: 35, trust: 10 },
                feedback:
                    "Phenomenal strategic thinking! Predictive analytics increased campaign ROI by 156% and helped you avoid $50,000 in wasted ad spend.",
                unlockTool: "analytics",
            },
            {
                id: 2,
                title: "Deploy AI for real-time campaign optimization and A/B testing",
                description:
                    "Let AI continuously test and optimize ad copy, images, and targeting for maximum performance",
                impact: { sales: 50, engagement: 45, trust: 5 },
                feedback:
                    "Brilliant optimization strategy! AI testing improved conversion rates by 127% and identified winning combinations humans would never have tried.",
                unlockTool: "analytics",
            },
            {
                id: 3,
                title: "Create detailed manual reports and rely on human analysis",
                description:
                    "Have your team manually analyze data and create comprehensive performance reports",
                impact: { sales: 10, engagement: 15, trust: 20 },
                feedback:
                    "Manual analysis has value, but AI can process thousands of data points instantly and spot patterns that would take humans weeks to discover.",
                unlockTool: null,
            },
        ],
        reward: "Data Analytics Master",
    },
    {
        id: 7,
        title: "The Future of AI Marketing",
        icon: "🔮",
        scenario:
            "Congratulations! Your AI-powered marketing has transformed TechStart into a market leader. Now you're presenting to the board about the future of AI in marketing. You need to address ethical considerations, emerging technologies, and how to balance AI efficiency with human creativity and authentic brand connections.",
        choices: [
            {
                id: 1,
                title: "Advocate for ethical AI with transparency and human oversight",
                description:
                    "Propose guidelines ensuring AI enhances rather than replaces human creativity, with clear disclosure of AI use",
                impact: { sales: 30, engagement: 40, trust: 25 },
                feedback:
                    "Visionary leadership! Your ethical AI framework became an industry standard, building incredible customer trust and attracting top talent to your team.",
                unlockTool: "all",
            },
            {
                id: 2,
                title: "Push for maximum AI adoption across all marketing functions",
                description:
                    "Recommend fully automated marketing with minimal human intervention to maximize efficiency",
                impact: { sales: 40, engagement: 20, trust: -10 },
                feedback:
                    "While efficient, customers began feeling disconnected from your brand. The most successful companies blend AI efficiency with human authenticity.",
                unlockTool: "all",
            },
            {
                id: 3,
                title: "Propose a balanced approach combining AI tools with human creativity",
                description:
                    "Recommend using AI to handle data and repetitive tasks while humans focus on strategy and creative work",
                impact: { sales: 45, engagement: 50, trust: 20 },
                feedback:
                    "Perfect strategic vision! This balanced approach maximized both efficiency and creativity, making TechStart the most innovative company in your industry.",
                unlockTool: "all",
            },
        ],
        reward: "AI Marketing Visionary",
    },
];

function updateStats() {
    document.getElementById("salesScore").textContent = gameState.salesScore;
    document.getElementById("engagementScore").textContent =
        gameState.engagementScore;
    document.getElementById("trustScore").textContent = gameState.trustScore;
    document.getElementById("aiToolsUnlocked").textContent =
        gameState.aiToolsUnlocked;
    document.getElementById("currentMission").textContent =
        gameState.currentMission;

    const progress = ((gameState.currentMission - 1) / 7) * 100;
    document.getElementById("gameProgress").style.width = progress + "%";
}

function loadMission(missionId) {
    const mission = missions[missionId - 1];
    if (!mission) return;

    document.getElementById("missionIcon").textContent = mission.icon;
    document.getElementById(
        "missionTitle"
    ).textContent = `Mission ${mission.id}: ${mission.title}`;
    document.getElementById("scenarioText").textContent = mission.scenario;

    const choicesContainer = document.getElementById("choicesContainer");
    choicesContainer.innerHTML = "";

    mission.choices.forEach((choice) => {
        const choiceElement = document.createElement("div");
        choiceElement.className = "choice-btn";
        choiceElement.onclick = () => selectChoice(choice);
        choiceElement.innerHTML = `
                    <div class="choice-title">${choice.title}</div>
                    <div class="choice-description">${choice.description}</div>
                `;
        choicesContainer.appendChild(choiceElement);
    });

    document.getElementById("feedbackBox").classList.remove("show");
    document.getElementById("missionComplete").classList.remove("show");
}

function selectChoice(choice) {
    gameState.selectedChoice = choice;

    // Update visual selection
    document
        .querySelectorAll(".choice-btn")
        .forEach((btn) => btn.classList.remove("selected"));
    event.target.closest(".choice-btn").classList.add("selected");

    // Apply impact
    gameState.salesScore += choice.impact.sales;
    gameState.engagementScore += choice.impact.engagement;
    gameState.trustScore += choice.impact.trust;

    // Unlock AI tool
    if (
        choice.unlockTool &&
        !gameState.unlockedTools.includes(choice.unlockTool)
    ) {
        gameState.unlockedTools.push(choice.unlockTool);
        gameState.aiToolsUnlocked++;
        unlockAITool(choice.unlockTool);
    }

    // Show feedback
    const feedbackBox = document.getElementById("feedbackBox");
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackText = document.getElementById("feedbackText");

    if (choice.impact.sales > 20 || choice.impact.engagement > 20) {
        feedbackBox.className = "feedback-box show";
        feedbackTitle.textContent = "Excellent Choice! 🎉";
    } else if (choice.impact.trust < 0) {
        feedbackBox.className = "feedback-box show negative";
        feedbackTitle.textContent = "Learning Opportunity 💡";
    } else {
        feedbackBox.className = "feedback-box show";
        feedbackTitle.textContent = "Good Decision! ✅";
    }

    feedbackText.textContent = choice.feedback;

    updateStats();

    // Show mission complete after a delay
    setTimeout(() => {
        completeMission();
    }, 2000);
}

function unlockAITool(toolName) {
    const toolElement = document.querySelector(`[data-tool="${toolName}"]`);
    if (toolElement) {
        toolElement.classList.remove("locked");
        toolElement.classList.add("unlocked");
    }

    // Special case for unlocking all tools
    if (toolName === "all") {
        document.querySelectorAll(".ai-tool").forEach((tool) => {
            tool.classList.remove("locked");
            tool.classList.add("unlocked");
        });
        gameState.aiToolsUnlocked = 4;
    }
}

function completeMission() {
    const mission = missions[gameState.currentMission - 1];
    const completeBox = document.getElementById("missionComplete");
    const completionMessage = document.getElementById("completionMessage");
    const rewardsContainer = document.getElementById("rewardsContainer");

    completionMessage.textContent = `You've earned valuable AI marketing experience and unlocked new capabilities!`;

    rewardsContainer.innerHTML = `<div class="reward-badge">🏆 ${mission.reward}</div>`;

    completeBox.classList.add("show");
}

function nextMission() {
    if (gameState.currentMission < 7) {
        gameState.currentMission++;
        loadMission(gameState.currentMission);
        updateStats();
    } else {
        showFinalResults();
    }
}

function showFinalResults() {
    const totalScore =
        gameState.salesScore + gameState.engagementScore + gameState.trustScore;
    let performance = "";

    if (totalScore > 400) {
        performance = "AI Marketing Master! 🏆";
    } else if (totalScore > 300) {
        performance = "AI Marketing Expert! 🌟";
    } else if (totalScore > 200) {
        performance = "AI Marketing Specialist! 💼";
    } else {
        performance = "AI Marketing Learner! 📚";
    }

    document.getElementById("missionContainer").innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h1>🎉 Congratulations!</h1>
                    <h2>You've completed the AI Marketing Challenge!</h2>
                    <div style="font-size: 2rem; margin: 30px 0;">${performance}</div>
                    <div style="background: #f7fafc; padding: 30px; border-radius: 15px; margin: 30px 0;">
                        <h3>Your Final Results:</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
                            <div>
                                <div style="font-size: 2rem; color: #667eea;">${gameState.salesScore}</div>
                                <div>Sales Score</div>
                            </div>
                            <div>
                                <div style="font-size: 2rem; color: #667eea;">${gameState.engagementScore}</div>
                                <div>Engagement Score</div>
                            </div>
                            <div>
                                <div style="font-size: 2rem; color: #667eea;">${gameState.trustScore}</div>
                                <div>Brand Trust</div>
                            </div>
                            <div>
                                <div style="font-size: 2rem; color: #667eea;">${gameState.aiToolsUnlocked}/4</div>
                                <div>AI Tools Mastered</div>
                            </div>
                        </div>
                    </div>
                    <div style="background: rgb(255 145 77 / var(--tw-text-opacity, 1)); color: white; padding: 25px; border-radius: 15px; margin: 20px 0;">
                        <h3>🎓 What You've Learned:</h3>
                        <ul style="text-align: left; max-width: 600px; margin: 0 auto;">
                            <li>How AI transforms modern marketing strategies</li>
                            <li>Practical applications of AI tools in real campaigns</li>
                            <li>Balancing automation with human creativity</li>
                            <li>Ethical considerations in AI marketing</li>
                            <li>Data-driven decision making with AI analytics</li>
                        </ul>
                    </div>
                    <button class="btn btn-primary" onclick="window.location.reload()">Play Again</button>
                </div>
            `;
}

function restartGame() {
    gameState.currentMission = 1;
    gameState.salesScore = 0;
    gameState.engagementScore = 0;
    gameState.trustScore = 100;
    gameState.aiToolsUnlocked = 0;
    gameState.unlockedTools = [];
    gameState.selectedChoice = null;

    // Reset AI tools
    document.querySelectorAll(".ai-tool").forEach((tool) => {
        tool.classList.remove("unlocked");
        tool.classList.add("locked");
    });

    loadMission(1);
    updateStats();
}

// Initialize game
loadMission(1);
updateStats();
