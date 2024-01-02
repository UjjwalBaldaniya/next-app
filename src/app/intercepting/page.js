import { getItemData } from "@/utils/api";
import Link from "next/link";
import styles from "../page.module.css";

const Intercepting = async () => {
  const data = await getItemData();

  return (
    <div className={styles.product_container}>
      {data.map((element, index) => (
        <div key={index} className={styles.product_item}>
          <Link href={`/intercepting/${element.id}`}>Click me</Link>
          <div className={styles.product_title}>{element.title}</div>
          <div className={styles.product_price}>{element.price}</div>
          <div className={styles.product_description}>
            {element.description}
          </div>
          <div className={styles.product_category}>{element.category}</div>
          <div className={styles.product_rating}>
            <span className={styles.rating_value}>{element.rating.rate}</span>
            <span className={styles.rating_count}>{element.rating.count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Intercepting;
