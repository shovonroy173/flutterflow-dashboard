// Master Admin Service & Mock Data Provider for Aether AI Platform

export const mockKpiData = {
  totalUsers: "148,920",
  activeUsers: "42,310",
  onlineUsers: "18,405",
  totalConversations: "2,840,150",
  activeCalls: "1,428",
  aiRequestsToday: "894,210",
  translationRequestsToday: "412,890",
  revenueTotal: "$482,900",
  rechargeVolumeMonth: "$124,500",
  cloudCostMonth: "$18,420",
  aiCostMonth: "$29,150",
  retentionD30: "68.4%",
};

export const mockChartTrends = [
  { time: "00:00", activeCalls: 420, aiLatencyMs: 140, revenueUSD: 3200, cloudCost: 450 },
  { time: "04:00", activeCalls: 210, aiLatencyMs: 110, revenueUSD: 1800, cloudCost: 400 },
  { time: "08:00", activeCalls: 890, aiLatencyMs: 230, revenueUSD: 8400, cloudCost: 780 },
  { time: "12:00", activeCalls: 1640, aiLatencyMs: 310, revenueUSD: 14200, cloudCost: 1120 },
  { time: "16:00", activeCalls: 1890, aiLatencyMs: 280, revenueUSD: 16800, cloudCost: 1350 },
  { time: "20:00", activeCalls: 1320, aiLatencyMs: 190, revenueUSD: 11500, cloudCost: 960 },
];

export const mockUsers = [
  {
    id: "USR-9921",
    name: "Alex Vance",
    email: "alex.vance@aether.ai",
    status: "Verified",
    riskScore: "Low (2%)",
    accountType: "Pro Subscriber",
    joinedDate: "2026-01-14",
    device: "iPhone 16 Pro (iOS 19.1)",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    reportsCount: 0,
    language: "English / Japanese",
  },
  {
    id: "USR-8842",
    name: "Elena Rostova",
    email: "elena.r@cyberspace.io",
    status: "Verified",
    riskScore: "Low (5%)",
    accountType: "Free Tier",
    joinedDate: "2026-02-01",
    device: "Samsung S25 Ultra (Android 16)",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    reportsCount: 1,
    language: "Russian / English",
  },
  {
    id: "USR-7731",
    name: "Kenji Sato",
    email: "kenji.sato@techtokyo.jp",
    status: "Suspended",
    riskScore: "High (87%)",
    accountType: "Pro Subscriber",
    joinedDate: "2025-11-20",
    device: "MacBook Pro M4 (macOS 16)",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    reportsCount: 8,
    language: "Japanese / English",
  },
  {
    id: "USR-6629",
    name: "Aaliyah Chen",
    email: "aaliyah.c@ai-innovate.org",
    status: "Verified",
    riskScore: "Medium (14%)",
    accountType: "Enterprise VIP",
    joinedDate: "2025-09-08",
    device: "iPad Air 6 (iPadOS 19)",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    reportsCount: 0,
    language: "Mandarin / English",
  },
  {
    id: "USR-5510",
    name: "Marcus Thorne",
    email: "m.thorne@shadow-net.co",
    status: "Blocked",
    riskScore: "Critical (98%)",
    accountType: "Free Tier",
    joinedDate: "2026-03-02",
    device: "Custom Linux Arm64",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    reportsCount: 14,
    language: "English / German",
  },
];

export const mockConversations = [
  {
    id: "CNV-4091",
    type: "1-on-1 AI Sync",
    participants: ["Alex Vance", "Aether AI Assistant"],
    messageCount: 342,
    lastActive: "2 mins ago",
    status: "Active",
    flagged: false,
    sentiment: "Positive (94%)",
  },
  {
    id: "CNV-3810",
    type: "Real-time Translated Group",
    participants: ["Kenji Sato", "Elena Rostova", "Marcus Thorne"],
    messageCount: 1280,
    lastActive: "12 mins ago",
    status: "Under Moderation",
    flagged: true,
    sentiment: "Hostile (76%)",
  },
  {
    id: "CNV-2904",
    type: "Enterprise Multi-Lang",
    participants: ["Aaliyah Chen", "Global Board Members (8)"],
    messageCount: 890,
    lastActive: "Just now",
    status: "Active",
    flagged: false,
    sentiment: "Professional (98%)",
  },
];

export const mockCalls = [
  {
    id: "CALL-901",
    host: "Alex Vance",
    peer: "Elena Rostova",
    type: "Holographic Video + Realtime Audio Translation",
    duration: "18m 42s",
    quality: "Ultra HD (30ms jitter)",
    status: "In Progress",
    sttLatency: "120ms",
  },
  {
    id: "CALL-892",
    host: "Aaliyah Chen",
    peer: "Enterprise Room #4",
    type: "Spatial Audio 3D Voice",
    duration: "45m 10s",
    quality: "4K (18ms jitter)",
    status: "In Progress",
    sttLatency: "95ms",
  },
  {
    id: "CALL-741",
    host: "Kenji Sato",
    peer: "Marcus Thorne",
    type: "Encrypted P2P Voice",
    duration: "03m 15s",
    quality: "Degraded (140ms packet loss)",
    status: "Failed / Disconnected",
    sttLatency: "410ms",
  },
];

export const mockAiMetrics = {
  providers: [
    { name: "OpenAI GPT-4o Realtime", requests: "420,100", costUSD: "$14,200", latencyMs: "145ms", errorRate: "0.04%" },
    { name: "Anthropic Claude 3.5 Sonnet", requests: "280,500", costUSD: "$9,800", latencyMs: "160ms", errorRate: "0.02%" },
    { name: "DeepL Translation Engine", requests: "412,890", costUSD: "$3,150", latencyMs: "85ms", errorRate: "0.01%" },
    { name: "Whisper V3 Speech-to-Text", requests: "310,400", costUSD: "$2,000", latencyMs: "110ms", errorRate: "0.08%" },
  ],
  totalPromptTokens: "1.4 Billion",
  totalCompletionTokens: "680 Million",
  audioMinutesProcessed: "184,200 mins",
};

export const mockTransactions = [
  { id: "TXN-88192", user: "Alex Vance", amount: "$99.99", type: "Pro Yearly Subscription", gateway: "Stripe Crypto", status: "Success", date: "2026-08-16 19:40" },
  { id: "TXN-88191", user: "Aaliyah Chen", amount: "$499.00", type: "Enterprise AI Credits", gateway: "Bank Wire", status: "Success", date: "2026-08-16 18:22" },
  { id: "TXN-88190", user: "Elena Rostova", amount: "$19.99", type: "Avatar Wardrobe Pack", gateway: "Apple Pay", status: "Success", date: "2026-08-16 17:15" },
  { id: "TXN-88189", user: "Marcus Thorne", amount: "$49.99", type: "Credit Top-Up", gateway: "Card Payment", status: "Failed (Fraud Flag)", date: "2026-08-16 15:02" },
];

export const mockBroadcasts = [
  { id: "BRD-102", title: "Aether AI Engine v4.2 Upgrade", target: "All Active Users (Global)", status: "Scheduled", time: "2026-08-18 04:00 UTC", reach: "148,920" },
  { id: "BRD-101", title: "New Cyberpunk Wardrobe Pack Unlocked for Saziya", target: "Pro & VIP Subscribers", status: "Completed", time: "2026-08-14 12:00 UTC", reach: "42,310" },
];

export const mockSecurityAlerts = [
  { id: "SEC-901", severity: "CRITICAL", title: "Distributed Brute Force Login Attempt", target: "Auth Endpoint /api/v2/login", ip: "185.220.101.4", timestamp: "10 mins ago", status: "Mitigated (IP Blocked)" },
  { id: "SEC-882", severity: "HIGH", title: "Unusual AI Token Consumption Spike", target: "User USR-7731 (Kenji Sato)", ip: "103.21.244.2", timestamp: "45 mins ago", status: "Account Throttled" },
  { id: "SEC-740", severity: "MEDIUM", title: "Geographic Anomaly Detected", target: "User USR-8842 (Elena Rostova)", ip: "194.26.29.11", timestamp: "2 hours ago", status: "2FA Step-up Prompted" },
];

export const mockAvatars = {
  irfan: {
    name: "Irfan (Male AI Companion)",
    version: "3D Neural Model v3.4",
    renderingEngine: "Three.js WebGL / Unreal Pixel Stream",
    voiceModel: "Aether Voice Neural-Male-01",
    gesturesCount: 48,
    activeWardrobe: "Futuristic Tactical Suit (Cyan Neon)",
    lipSyncPrecision: "99.4% (Sub-15ms)",
    status: "Online & Calibrated",
  },
  saziya: {
    name: "Saziya (Female AI Companion)",
    version: "3D Neural Model v3.8",
    renderingEngine: "Three.js WebGL / Unreal Pixel Stream",
    voiceModel: "Aether Voice Neural-Female-04",
    gesturesCount: 64,
    activeWardrobe: "Holographic Cyber Dress (Purple Glow)",
    lipSyncPrecision: "99.8% (Sub-10ms)",
    status: "Online & Calibrated",
  },
};

export const mockDisputes = [
  { id: "DSP-301", user: "Elena Rostova", category: "Unrecognized Microtransaction", priority: "High", status: "Open", assignee: "Admin Security Team", created: "3 hours ago" },
  { id: "DSP-294", user: "Kenji Sato", category: "Account Suspension Appeal", priority: "Urgent", status: "In Review", assignee: "Senior Moderator", created: "1 day ago" },
  { id: "DSP-180", user: "Alex Vance", category: "AI Translation Latency Claim", priority: "Low", status: "Resolved", assignee: "Support Ops", created: "3 days ago" },
];

export const mockInfrastructureCosts = {
  cloudProviders: [
    { service: "AWS EC2 / GPU Clusters (A100)", costUSD: "$12,450 / mo", usage: "88% GPU Capacity" },
    { service: "Google Cloud Kubernetes Engine", costUSD: "$4,200 / mo", usage: "64% Pod Capacity" },
    { service: "Cloudflare Workers & CDN Bandwidth", costUSD: "$1,770 / mo", usage: "4.2 TB Transferred" },
    { service: "Supabase / PostgreSQL Neural DB", costUSD: "$1,200 / mo", usage: "180 GB Storage" },
  ],
  monthlyBudget: "$60,000",
  currentBurnRate: "$47,570",
};

export const adminDataService = {
  getKpis: () => Promise.resolve(mockKpiData),
  getChartTrends: () => Promise.resolve(mockChartTrends),
  getUsers: () => Promise.resolve(mockUsers),
  getConversations: () => Promise.resolve(mockConversations),
  getCalls: () => Promise.resolve(mockCalls),
  getAiMetrics: () => Promise.resolve(mockAiMetrics),
  getTransactions: () => Promise.resolve(mockTransactions),
  getBroadcasts: () => Promise.resolve(mockBroadcasts),
  getSecurityAlerts: () => Promise.resolve(mockSecurityAlerts),
  getAvatars: () => Promise.resolve(mockAvatars),
  getDisputes: () => Promise.resolve(mockDisputes),
  getInfrastructureCosts: () => Promise.resolve(mockInfrastructureCosts),
};
