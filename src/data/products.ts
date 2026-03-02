export type Product = {
  id: number;
  name: string;
  description: string;
  upvoteCount: number;
  tags: string[];
};

export const CATEGORIES = [
  "Trending Topics",
  "IA",
  "Marketing",
  "Produtividade",
  "SaaS",
] as const;

export const products: Product[] = [
  {
    id: 1,
    name: "ChatFlow AI",
    description:
      "Assistente de IA para automatizar atendimento ao cliente com respostas inteligentes",
    upvoteCount: 298,
    tags: ["IA", "SaaS"],
  },
  {
    id: 2,
    name: "MailMetrics",
    description:
      "Plataforma de análise de campanhas de email marketing com dashboards em tempo real",
    upvoteCount: 202,
    tags: ["Marketing", "SaaS"],
  },
  {
    id: 3,
    name: "TaskMaster Pro",
    description:
      "Gerenciador de tarefas com IA que prioriza automaticamente seu backlog",
    upvoteCount: 102,
    tags: ["Produtividade", "IA"],
  },
  {
    id: 4,
    name: "AdVision",
    description:
      "Ferramenta de criação de anúncios com geração de copy e imagens por IA",
    upvoteCount: 29,
    tags: ["Marketing", "IA"],
  },
  {
    id: 5,
    name: "CloudSync",
    description:
      "Sincronize arquivos entre todas as suas plataformas de nuvem em um só lugar",
    upvoteCount: 187,
    tags: ["Produtividade", "SaaS"],
  },
  {
    id: 6,
    name: "DataPipe",
    description:
      "Pipeline de dados no-code para conectar APIs e automatizar fluxos de trabalho",
    upvoteCount: 156,
    tags: ["SaaS", "Produtividade"],
  },
  {
    id: 7,
    name: "BrandPulse",
    description:
      "Monitore menções da sua marca nas redes sociais com alertas inteligentes",
    upvoteCount: 89,
    tags: ["Marketing"],
  },
  {
    id: 8,
    name: "CodeAssist",
    description:
      "Copiloto de programação que sugere refatorações e detecta bugs em tempo real",
    upvoteCount: 243,
    tags: ["IA", "Produtividade"],
  },
];
