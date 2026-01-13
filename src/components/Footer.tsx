import Container from "./Container";
import { Github, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} JmG. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JmGBuilds"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="text-zinc-300 hover:text-white transition"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.youtube.com/@superjmg"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              title="YouTube"
              className="text-zinc-300 hover:text-white transition"
            >
              <Youtube className="h-5 w-5" />
            </a>

            <a
              href="mailto:contact.superjmg@email.com"
              aria-label="Email"
              title="Email"
              className="text-zinc-300 hover:text-white transition"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}