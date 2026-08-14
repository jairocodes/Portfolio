export const SITE = {
  name: "Jairo Castillo",
  role: "Full Stack Developer & Application Support Engineer",
  email: "jairocastillo.code@gmail.com",
  github: "https://github.com/jairocodes",
  linkedin: "https://www.linkedin.com/in/jairo-castillo-4a0977406/",
} as const;

export const NAV_ANCHORS = ["projects", "about", "contact"] as const;

export const SKILLS: { label: string; variant: "lang" | "domain" | "infra" }[] = [
  { label: "Python", variant: "lang" },
  { label: "Java", variant: "lang" },
  { label: "TypeScript", variant: "lang" },
  { label: "PHP Laravel", variant: "lang"},
  { label: "Applied AI", variant: "domain" },
  { label: "FastAPI", variant: "domain" },
  { label: "Spring Boot", variant: "domain" },
  { label: "Quarkus", variant: "domain" },
  { label: "Docker", variant: "infra" },
  { label: "Linux", variant: "infra" },
  { label: "PostgreSQL", variant: "infra" },
  { label: "MySQL", variant: "infra"},
];
