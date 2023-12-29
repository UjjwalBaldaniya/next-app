import { getDashboardData } from "@/utils/api";
import Link from "next/link";

const Dashboard = async () => {
  let first = await getDashboardData();

  return (
    <div>
      {first.map((element, index) => (
        <div key={index}>
          <p>{element.id}</p>
          <p>{element.title}</p>
          <p>{element.category}</p>
          <p>{element.price}</p>
          <p>{element.description}</p>
          <Link href={`/dashboard/${element.id}`}>Open Link</Link>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
