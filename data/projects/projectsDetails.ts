import { ProjectProps } from "@/interfaces/ProjectProps";

export const projects: ProjectProps[] = [
  {
    id: "whatsapp-realtime-handoff",
    title: "WhatsApp Integration with Real Time Handoff",
    summary:
      "A real time WhatsApp integration that enables automated conversations with seamless handoff to human agents through a web dashboard.",
    problem:
      "Small and medium businesses struggle to manage high volumes of WhatsApp messages, leading to delayed responses, lost sales, and poor customer experience.",
    goal: "Build a system that allows automated WhatsApp conversations with seamless handoff to human agents in real time.",
    target_users: [
      "Customer support agents",
      "Sales teams",
      "Business administrators",
    ],
    system_overview:
      "The system connects WhatsApp to a web based dashboard where agents can monitor conversations, take control when needed, and exchange messages and files in real time.",
    core_features: [
      "WhatsApp bot interaction",
      "Real time agent chat",
      "File support (images, audio, video)",
    ],
    technical_challenges: [
      "Real time synchronization between WhatsApp and web UI",
      "Handling concurrent agent access",
      "Scalable webhook processing",
    ],
    architecture_design_decisions: [
      "WebSockets for real time communication",
      "REST APIs for message persistence",
      "Conversation storage",
      "Modular backend structure separating messaging, users, and integrations",
    ],
    tech_stack: {
      backend: "Node.js / Express.js",
      frontend: "React / Next.js",
      database: "PostgreSQL",
      integrations: "WhatsApp API",
      infrastructure: "Docker",
    },
    screenshots_diagrams: ["UI screenshots", "Simple architecture diagram"],
    outcome:
      "Successfully demonstrated a scalable WhatsApp web integration capable of handling multiple agents and real time conversations.",
  },
  {
    id: "ai-agent-structured-knowledge",
    title: "AI Agent Platform for Structured Knowledge Retrieval",
    summary:
      "An AI agent that answers questions using structured personal data, combining LLM reasoning with tool based database retrieval.",
    problem:
      "Information about a person’s experience, projects, and achievements is scattered across resumes, documents, and notes, making it difficult to retrieve accurate and contextual answers quickly.",
    goal: "Build an AI agent capable of answering questions about structured and semi-structured data stored in a database using intelligent retrieval and tool based reasoning.",
    target_users: [
      "Recruiters",
      "Hiring managers",
      "Technical interviewers",
      "Portfolio visitors",
    ],
    system_overview:
      "The platform exposes an AI agent through an API that receives natural language questions and decides whether to answer directly or retrieve relevant information from a database. The agent uses tools to query structured data and generates concise, accurate responses.",
    core_features: [
      "Natural language Q&A over personal and professional data",
      "Tool based database querying",
      "Structured responses based on retrieved context",
      "Prompt-driven behavior customization",
      "Response source attribution from database records",
    ],
    technical_challenges: [
      "Designing reliable tool invocation logic",
      "Preventing hallucinated answers",
      "Managing context and conversation memory",
      "Mapping natural language queries to structured database fields",
      "Ensuring traceable and verifiable AI responses",
    ],
    architecture_design_decisions: [
      "FastAPI for agent orchestration and API exposure",
      "LangChain for agent logic and tool execution",
      "PostgreSQL for structured data storage",
      "Clear separation between agent logic, tools, and data access",
      "Deterministic tool outputs to ensure response accuracy",
    ],
    tech_stack: {
      backend: "FastAPI (Python)",
      ai_agents: "LangChain, LLM API",
      database: "PostgreSQL",
      infrastructure: "Docker",
    },
    screenshots_diagrams: [
      "API interaction examples",
      "Agent decision flow diagram",
      "Database schema diagram",
    ],
    outcome:
      "Successfully built an AI agent capable of answering questions about structured personal data with accurate, context-aware responses, demonstrating practical real-world AI retrieval.",
  },
  {
    id: "inventory-sales-management-demo",
    title: "Inventory and Sales Management System (Demo)",
    summary:
      "A web based system for managing products, inventory movements, and sales transactions with reliable backend business logic.",
    problem:
      "Small and medium businesses often manage inventory and sales manually or with disconnected tools, leading to stock inconsistencies and operational inefficiencies.",
    goal: "Build a web based system that allows businesses to manage products, inventory movements, and sales transactions in a centralized and reliable way.",
    target_users: ["Store administrators", "Sales staff", "Business owners"],
    system_overview:
      "The system provides a web interface and API to manage products, track inventory levels, record sales transactions, and generate basic reports. The backend enforces business rules to ensure data consistency.",
    core_features: [
      "Product and category management",
      "Inventory tracking (entries and exits)",
      "Sales transaction recording",
      "Stock validation and availability checks",
      "Basic sales and inventory reports",
    ],
    technical_challenges: [
      "Maintaining data consistency across inventory and sales operations",
      "Preventing negative stock levels during concurrent transactions",
      "Designing flexible data models for products and transactions",
      "Ensuring transactional integrity and error handling",
    ],
    architecture_design_decisions: [
      "RESTful API design for inventory and sales operations",
      "Backend-driven business logic to enforce inventory rules",
      "Database transactions to guarantee consistency",
      "Modular separation between inventory, sales, and reporting services",
    ],
    tech_stack: {
      backend: "Node.js",
      frontend: "React / Next.js",
      database: "PostgreSQL",
      infrastructure: "Docker",
    },
    screenshots_diagrams: [
      "Product and inventory management UI",
      "Sales workflow screens",
      "Database schema diagram",
    ],
    outcome:
      "Successfully implemented a functional inventory and sales management demo demonstrating core business workflows, reliable data handling, and scalable backend design.",
  },
];
