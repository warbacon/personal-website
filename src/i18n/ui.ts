export const languages = {
  en: "English",
  es: "Spanish",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "sections.about": "ABOUT ME",
    "sections.about.content": `
      <p>
        Hey! I'm Joaquín Guerra Tocino, a final-year Computer Engineering
        student from Spain who enjoys bending systems to his will.
      </p>

      <p>
        Lately I've been focused on web development, along with C++, Lua and
        Bash, building everything from interfaces to low-level tooling. I live in the
        world of Linux and open source, shaping my setup down to the smallest detail
        and optimizing every part of my workflow.
      </p>

      <p>
        I enjoy understanding how things work under the hood and turning that
        into clean, efficient solutions. I'm especially into Svelte for building fast,
        expressive interfaces, but I'm always exploring new tools and ideas.
      </p>
        `,
    "sections.projects": "PROJECTS",
    "sections.skills": "SKILLS",
    "sections.skills.content": "I can type I guess.",
    "button.contact": "CONTACT",
    "button.source": "SOURCE CODE",
    "about.profession": "Computer Engineering Student",
  },
  es: {
    "sections.about": "ACERCA DE MÍ",
    "sections.about.content": `
      <p>
        ¡Hey! Soy Joaquín Guerra Tocino, estudiante de último año de Ingeniería
        Informática en Cádiz, y me gusta tener control total sobre mis sistemas.
      </p>

      <p>
        Últimamente estoy centrado en desarrollo web, junto con C++, Lua y
        Bash, construyendo desde interfaces hasta herramientas de bajo nivel. Vivo en
        el mundo de Linux y el software libre, ajustando mi entorno hasta el último
        detalle y optimizando cada parte de mi flujo de trabajo.
      </p>

      <p>
        Me gusta entender cómo funcionan las cosas por dentro y convertir ese
        conocimiento en soluciones limpias y eficientes. Me encanta Svelte para crear
        interfaces rápidas y expresivas, aunque siempre estoy explorando nuevas
        herramientas e ideas.
      </p>
        `,
    "sections.projects": "PROYECTOS",
    "sections.skills": "HABILIDADES",
    "sections.skills.content": "Sé teclear supongo.",
    "button.contact": "CONTACTO",
    "button.source": "CÓDIGO FUENTE",
    "about.profession": "Estudiante de Ingeniería Informática",
  },
} as const;
