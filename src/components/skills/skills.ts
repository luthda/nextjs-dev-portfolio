export interface Skill {
  title: string
  description: string
  href: string
  src: string
  alt: string
}
export const skills: Skill[] = [
  {
    title: "Next.js",
    description:
      "Next.js is a React framework built for production, enabling developers to build fast, user-friendly web applications with built-in server-side rendering and static site generation. It focuses on improving performance, scalability, and overall developer experience for modern web projects.",
    href: "https://nextjs.org/",
    src: "/assets/skills/nextjs_logo.png",
    alt: "Next.js",
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that aims to streamline the development of responsive, custom UI components. Its mission is to provide developers with a flexible and efficient way to design websites without writing custom CSS from scratch.",
    href: "https://tailwindcss.com/",
    src: "/assets/skills/tailwindcss_logo.png",
    alt: "TailwindCSS",
  },
  {
    title: "Aceternity UI",
    description:
      "Aceternity UI is a robust UI component library designed to help developers build consistent and accessible user interfaces quickly. Its goal is to provide reusable, flexible components that adapt seamlessly to various application needs.",
    href: "https://www.aceternity.com/",
    src: "/assets/skills/aceternity_logo.png",
    alt: "Aceternity",
  },
  {
    title: "Kubernetes",
    description:
      "Kubernetes is an open-source platform that automates the deployment, scaling, and management of containerized applications. Its mission is to simplify complex infrastructure, ensuring applications run reliably across different environments.",
    href: "https://kubernetes.io/",
    src: "/assets/skills/kubernetes_logo.png",
    alt: "Kubernetes",
  },
  {
    title: "ArgoCD",
    description:
      "ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. It focuses on ensuring that the desired application state matches the live environment, making deployments more reliable and automated.",
    href: "https://argo-cd.readthedocs.io/en/stable/",
    src: "/assets/skills/argocd_logo.png",
    alt: "ArgoCD",
  },
  {
    title: "Docker",
    description:
      "Docker is a platform designed to simplify the creation, deployment, and execution of applications within containers. It aims to ensure consistency across multiple environments, enabling faster development cycles and more predictable deployments.",
    href: "https://www.docker.com/",
    src: "/assets/skills/docker_logo.png",
    alt: "Docker",
  },
]
