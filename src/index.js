import React from "react";
import styles from './styles.module.css'

export const Modal = (props) => {
  return (
    props.showModal && (
      <section
        className={styles.background}
        onClick={() => props.setShowModal(false)}
      >
        <article className={styles.modalWrapper}>
          <div className={styles.closeContainer}>
            <svg onClick={() => props.setShowModal(false)} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" cursor="pointer"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
          </div>
          <div className={styles.msgContainer}>{props.children}</div>
        </article>
      </section>
    )
  );
};
