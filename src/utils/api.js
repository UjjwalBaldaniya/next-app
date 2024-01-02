export const getItemData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export const getItemDataId = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
