import { envVar } from "@/utils/envVar"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  let data = await fetch(`${envVar.backendUrl}/cars/${id}`)
  const carData = await data.json()
  return <div>My Post: {JSON.stringify(carData.data)}</div>
}