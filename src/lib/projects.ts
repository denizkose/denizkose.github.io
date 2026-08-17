interface Project {
    title: string;
    description: string;
    url: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: "ShowMeTheKey OBS",
        description: "A lightweight, customizable, and blazing-fast OBS Browser Source overlay for displaying keystrokes and mouse clicks.",
        url: "https://github.com/denizkose/smtk-obs",
        image: "smtk-obs.webp"
    },
    {
        title: "Foundry Package Viewer",
        description: "A web application built with Bun, Tailwind CSS v4, and DaisyUI. It serves as a viewer for Foundry VTT packages.",
        url: "https://github.com/denizkose/fpviewer",
        image: "fpviewer.webp"
    },
    {
        title: "Markov Chain Name Generator JS",
        description: "A zero-dependency, lightweight JavaScript library for procedural name generation using N-th order Markov chains.",
        url: "https://github.com/denizkose/markov-namegen-js",
        image: "markov-chain.webp"
    }
];