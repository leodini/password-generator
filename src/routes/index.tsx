import { PasswordGenerator } from "@/components/password-generator";
import Tabs from "@/components/tab";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { Hash, Shuffle } from "lucide-react";
import styles from "@/styles/index.module.css";
import { Card } from "@/components/card";
import { Form } from "@/components/form";
import { PasswordStrength } from "@/components/password-strength";
import { PasswordWrapper } from "@/components/password-wrapper";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({ component: App });

const tabs = [
  {
    label: (
      <div>
        <Shuffle size={12} /> <span className={styles["tab-text"]}>Random</span>
      </div>
    ),
    content: (
      <div>
        <ClientOnly>
          <h4 className={styles["title"]}>Generated Password</h4>
          <PasswordWrapper>
            <PasswordGenerator />
            <PasswordStrength />
          </PasswordWrapper>
          <h4 className={styles["title"]}>Customize your new password</h4>
          <Form type="random" />
        </ClientOnly>
      </div>
    ),
  },
  {
    label: (
      <div>
        <Hash size={12} /> <span className={styles["tab-text"]}>PIN</span>
      </div>
    ),
    content: (
      <div>
        <ClientOnly>
          <h4 className={styles["title"]}>Generated Password</h4>
          <PasswordWrapper>
            <PasswordGenerator />
          </PasswordWrapper>
          <h4 className={styles["title"]}>Customize your new password</h4>
          <Form type="pin" />
        </ClientOnly>
      </div>
    ),
  },
];

function App() {
  return (
    <div className={styles["app-container"]}>
      <div className={styles["title-container"]}>
        <h1 className={styles["app-title"]}>
          Strong 💪 and Secure Password Generator.
        </h1>
        <p className={styles["app-subtitle"]}>
          A awesome generator for powerful passwords to protect your accounts.
        </p>
      </div>
      <Card>
        <h3>Choose password type</h3>
        <Tabs tabs={tabs} defaultTab={0} />
      </Card>
      <Footer />
    </div>
  );
}
