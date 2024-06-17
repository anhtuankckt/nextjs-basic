import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Homepage</div>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iusto, harum ratione velit autem magnam vero praesentium nobis blanditiis excepturi quod a officiis iure, tempora mollitia, et corporis in. Cum?</p>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi veniam dolore a inventore et provident? Ipsum delectus consequuntur voluptatibus eligendi officiis quisquam corrupti dicta, nesciunt, possimus illum, perferendis natus quidem!</p>
    </main>
  );
}
