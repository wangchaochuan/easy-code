import EmptyPage from "@/components/empty";
import image from "@/assets/images/404.png";
import styles from "@/views/not-found/index.module.scss";

const NotFound = () => (
  <div className={styles["not-found"]}>
    <EmptyPage src={image} />
  </div>
);

export default NotFound;
