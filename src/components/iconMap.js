import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  DollarSign,
  Github,
  Instagram,
  Linkedin,
  Menu,
  Palette,
  Play,
  Rocket,
  Search,
  Server,
  Smartphone,
  Twitter,
  X,
  Zap,
} from 'lucide-react';

const icons = {
  zap: Zap,
  smartphone: Smartphone,
  search: Search,
  dollar: DollarSign,
  palette: Palette,
  code: Code2,
  server: Server,
  rocket: Rocket,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  play: Play,
  check: Check,
  menu: Menu,
  x: X,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
};

export function getIcon(name) {
  return icons[name] ?? null;
}
