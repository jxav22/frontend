import React from "react";
import styles from "./LegalPage.module.css";
import NextPageButton from "../NextPageButton/NextPageButton";

function LegalPage({onNextPage}: {onNextPage: () => void}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane} />
      <span>
        <h2>
          By clicking “I agree, proceed to chat” you agree to the following:
        </h2>

        <ul>
          <li>I am not homicidal or suicidal</li>
          <li>
            I understand that no action can be taken towards any claims made
            during a chat as all users are anonymous
          </li>
          <li>
            I am at least 13 years older and have a parents permission to use
            this site
          </li>
          <li>
            I understand that the chat is intended for casual venting and not
            for mental illness diagnosing or psychological therapy
          </li>
          <li>
            I understand that as a listener I am not to perform the role of a
            real therapist and will refer any user to seek appropriate help from
            a professional therapist if the case permits it
          </li>
        </ul>

        <NextPageButton
          className={styles.nextPageButton}
          onClick={onNextPage}
        >
          I agree, proceed to chat
        </NextPageButton>
      </span>
    </div>
  );
}

export default LegalPage;
