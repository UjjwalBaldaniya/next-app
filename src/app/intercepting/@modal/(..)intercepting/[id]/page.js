import Modal from "@/components/Modal";
import { getItemDataId } from "@/utils/api";
import styles from "../../../../page.module.css";

const PhotoPage = async ({ params }) => {
  const data = await getItemDataId(params.id);
  return (
    <Modal>
      <div className={styles.product_container}>
        <div className={styles.product_item}>
          <div className={styles.product_title}>{data.title}</div>
          <div className={styles.product_price}>{data.price}</div>
          <div className={styles.product_description}>{data.description}</div>
          <div className={styles.product_category}>{data.category}</div>
          <div className={styles.product_rating}>
            <span className={styles.rating_value}>{data.rating.rate}</span>
            <span className={styles.rating_count}>{data.rating.count}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoPage;
