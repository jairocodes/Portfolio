export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "site.description":
      "Portafolio de Jairo Castillo, Full Stack Developer & Application Support Engineer especializado en Python, PHP Laravel, Java, TypeScript, Laravel, IA aplicada y Docker/Linux.",
    "hero.greeting": "$ whoami",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.contact": "Contacto",
    "section.projects": "Proyectos",
    "section.about": "Sobre mí",
    "section.contact": "Contacto",
    "projects.viewCase": "Ver case study",
    "project.problem": "Problema",
    "project.solution": "Solución",
    "project.stack": "Stack",
    "project.back": "cd ../projects",
    "project.repo": "Repositorio",
    "project.demo": "Demo",
    "about.bio":
      "Soy Full Stack Developer & Application Support Engineer. Construyo sistemas de extremo a extremo utilizando Python, TypeScript, Java y PHP. Voy más allá del desarrollo tradicional integrando soluciones de Inteligencia Artificial práctica (RAG, automatizaciones y agentes) y orquestando infraestructura con Docker y Linux. Creo firmemente que un buen software no solo se mide por cómo se escribe, sino por su robustez y estabilidad cuando ya está en manos del usuario.",
    "about.skills": "Stack & herramientas",
    "contact.email": "email jairocastillo.code@gmail.com",
    "contact.github": "github github.com/jairocodes",
    "contact.linkedin": "LinkedIn www.linkedin.com/in/jairo-castillo-4a0977406/",
    //"footer.built": "construido con Astro & Tailwind",
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "site.description":
      "Portfolio of Jairo Castillo, Full Stack Developer & Application Support Engineer specialized in Python, PHP Laravel, Java, TypeScript, applied AI, and Docker/Linux.",
    "hero.greeting": "$ whoami",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Contact",
    "section.projects": "Projects",
    "section.about": "About",
    "section.contact": "Contact",
    "projects.viewCase": "View case study",
    "project.problem": "Problem",
    "project.solution": "Solution",
    "project.stack": "Stack",
    "project.back": "cd ../projects",
    "project.repo": "Repository",
    "project.demo": "Demo",
    "about.bio":
      "I'm a Full Stack Developer & Application Support Engineer. I build end-to-end systems using Python, TypeScript, Java, and PHP. I go beyond traditional development by integrating practical Artificial Intelligence solutions (RAG, automations, and AI agents) and orchestrating infrastructure with Docker and Linux. I firmly believe that great software isn't just measured by how it's written, but by its robustness and stability once it's in the hands of the end user.",
    "about.skills": "Stack & tools",
    "contact.email": "email jairocastillo.code@gmail.com",
    "contact.github": "github github.com/jairocodes",
    "contact.linkedin": "LinkedIn www.linkedin.com/in/jairo-castillo-4a0977406/",
    //"footer.built": "built with Astro & Tailwind",
  },
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: string) {
  const dict = ui[lang as Lang] ?? ui[defaultLang];
  return function t(key: keyof (typeof ui)["es"]) {
    return dict[key];
  };
}

export function isValidLang(lang: string): lang is Lang {
  return lang in ui;
}
