export interface ProjectProps {
  id: string;
  title: string;
  summary: string;
  problem: string;
  goal: string;
  target_users: string[];
  system_overview: string;
  core_features: string[];
  technical_challenges: string[];
  architecture_design_decisions: string[];
  tech_stack: {
    backend: string;
    ai_agents?: string;
    frontend?: string;
    database: string;
    integrations?: string;
    infrastructure: string;
  };
  screenshots_diagrams: string[];
  outcome: string;
}
