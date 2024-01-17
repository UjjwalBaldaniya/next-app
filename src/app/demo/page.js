import { getItemData } from "@/utils/api";

const Demo = async () => {
  const data = await getItemData();
  console.log(data);

  return <div>Demo</div>;
};

export default Demo;
