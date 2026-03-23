import { fetchCarData } from "@/utils/fetchCarData";

export default async function TotalProduct() {
  const cars = await fetchCarData("TOTAL COUNT FETCH");
  return <div>TotalProduct: {cars?.data?.length || 0}</div>;
}