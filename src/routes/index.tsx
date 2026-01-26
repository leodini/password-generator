import { PasswordGenerator } from "@/components/password-generator";
import Tabs from "@/components/tab";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { Hash, Shuffle } from "lucide-react";
import styles from "@/styles/index.module.css";
import { Card } from "@/components/card";
import { Form } from "@/components/form";
import { PasswordStrength } from "@/components/password-strength";
import { PasswordWrapper } from "@/components/password-wrapper";

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
          <h4>Generated Password</h4>
          <PasswordWrapper>
            <PasswordGenerator />
            <PasswordStrength />
          </PasswordWrapper>
          <h4>Customize your new password</h4>
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
          <h4>Generated Password</h4>
          <PasswordWrapper>
            <PasswordGenerator />
          </PasswordWrapper>
          <h4>Customize your new password</h4>
          <Form type="pin" />
        </ClientOnly>
      </div>
    ),
  },
];

function App() {
  return (
    <>
      <Card>
        <h3>Choose password type</h3>
        <Tabs tabs={tabs} defaultTab={0} />
      </Card>
    </>
  );
}
