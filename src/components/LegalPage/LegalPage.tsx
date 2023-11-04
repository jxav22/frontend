import React from "react";
import styles from "./LegalPage.module.css";

function LegalPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane} />
      <span>
        <p>
          By clicking “I agree, proceed to chat” you agree to the following:
        </p>
        <p>I am not homicidal or suicidal</p>
        <p>
          I understand that no action can be taken towards any claims made
          during a chat as all users are anonymous
        </p>
        <p>
          I am at least 13 years older and have a parents permission to use this
          site
        </p>
        <p>
          I understand that the chat is intended for casual venting and not for
          mental illness diagnosing or psychological therapy
        </p>
        <p>
          I understand that as a listener I am not to perform the role of a real
          therapist and will refer any user to seek appropriate help from a
          professional therapist if the case permits it
        </p>
        <button>I agree, proceed to chat</button>
      </span>
    </div>
  );
}

export default LegalPage;
