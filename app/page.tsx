import styles from '@/styles/home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iusto, harum ratione velit autem magnam vero praesentium nobis blanditiis excepturi quod a officiis iure, tempora mollitia, et corporis in. Cum?</p>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi veniam dolore a inventore et provident? Ipsum delectus consequuntur voluptatibus eligendi officiis quisquam corrupti dicta, nesciunt, possimus illum, perferendis natus quidem!</p>
      <Link href='/dashboard'>
        <div className={styles.btn}>
          See List Anhtuan Kckt
        </div>
      </Link>
    </div>
  );
}
