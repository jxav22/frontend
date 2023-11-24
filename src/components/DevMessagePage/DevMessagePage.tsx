import React from "react";
import styles from "./DevMessagePage.module.css";
import Image from "next/image";
import NextPageButton from "../NextPageButton/NextPageButton";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DevMessagePage({
  onNextPage,
}: {
  onNextPage: () => void;
}) {
  return (
    <section className={`${styles.container} ${inter.className}`}>
      <aside className={styles.leftPane} />
      <Image
        className={styles.profilePicture}
        src="/profile.png"
        width={485}
        height={485}
        alt="drawing of the developer"
      />
      <section>
        <p>Hey,</p>
        <p>
          I created this site so people could have a safe and supportive
          environment to vent their woes
        </p>
        <p>
          I realized that the existing solutions weren&apos;t that great so I
          tried to make something better
        </p>
        <p>
          Vent Something will be free forever, but your donations really do help
        </p>
        <p>Cheers,</p>
        <p>Dev</p>
        <NextPageButton onClick={onNextPage}>{"[continue]"}</NextPageButton>
      </section>
    </section>
  );
}
