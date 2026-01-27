import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import styles from "@/styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Github />
      <Link to="https://github.com/leodini">
        Developed by Leonardo Dini, follow me on Github!
      </Link>
    </div>
  );
};
