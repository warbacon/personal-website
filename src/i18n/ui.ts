export const languages = {
  en: "English",
  es: "Spanish",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "sections.about": "About me",
    "sections.about.content": `
        <p>
          Hey there! I'm <b>Joaquín Guerra Tocino</b>, a Computer Engineering
          student in my final year at the University of Cádiz, Spain.
        </p>
        <p>
          I'm passionate about free software, minimalism, and having full
          control over my setup. Whether it's tweaking a shell config,
          optimizing a workflow, or diving deep into Linux internals, I love
          making my system truly mine.
        </p>
        <p>
          I mostly develop in <b>C++</b>, <b>Python</b> and <b>Lua</b>, but I'm
          always exploring new languages and tools.
        </p>
        <p>
          When it comes to the web, I have strong experience with modern
          technologies and frameworks. I'm especially fond of <b>Astro</b> and <b
            >Svelte</b
          > — I love how they let me build fast, clean, and expressive user interfaces
          with minimal overhead. I always try to stay up to date with the latest
          trends, and I'm never afraid to dive into something new.
        </p>
        `,
    "sections.projects": "Projects",
    "sections.skills": "Skills",
    "sections.skills.content": "I can type I guess.",
    "button.contact": "Contact me!",
    "button.source": "Source code",
    "about.profession": "Computer Engineering Student",
  },
  es: {
    "sections.about": "Acerca de mí",
    "sections.about.content": `
        <p>
          ¡Hola! Soy <b>Joaquín Guerra Tocino</b>, estudiante de Ingeniería Informática
          en mi último año en la Universidad de Cádiz, España.
        </p>
        <p>
          Me apasiona el software libre, el minimalismo y tener control total sobre mi entorno. Ya sea ajustando la configuración de la terminal,
          optimizando flujos de trabajo o explorando a fondo el funcionamiento interno de Linux, disfruto haciendo que mi sistema sea realmente mío.
        </p>
        <p>
          Principalmente programo en <b>C++</b>, <b>Python</b> y <b>Lua</b>, pero siempre estoy explorando nuevos lenguajes y herramientas.
        </p>
        <p>
          En el desarrollo web, tengo bastante experiencia con tecnologías y frameworks modernos. Me encantan especialmente <b>Astro</b> y <b>Svelte</b> — me permiten construir interfaces rápidas, limpias y expresivas
          con un mínimo de sobrecarga. Siempre intento mantenerme al día con las últimas tendencias y no tengo miedo de probar cosas nuevas.
        </p>
        `,
    "sections.projects": "Proyectos",
    "sections.skills": "Habilidades",
    "sections.skills.content": "Sé teclear supongo.",
    "button.contact": "¡Contáctame!",
    "button.source": "Código fuente",
    "about.profession": "Estudiante de Ingeniería Informática",
  },
} as const;
