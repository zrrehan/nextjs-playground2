import { Button } from "@/components/ui/button";
import { envVar } from "@/utils/envVar";
import { fetchCarData } from "@/utils/fetchCarData";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from 'next'
import TotalProduct from "./TotalProduct";

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    let carsData = await fetchCarData("METADATA FETCH");
    return {
        title: `Total cars: ${carsData.data.length}`
    }
}



async function Cars() {
    interface SingleCar {
        id: string;
        [key: string]: any;
    }
    let carsData = await fetchCarData("ALL CAR FETCH");
    return(
        <div className="px-2">
            {
                carsData.data.map((singleCar: SingleCar, index: number) => {
                    return <p key = {singleCar.id}>
                        <b>{index}</b> {JSON.stringify(singleCar)} 
                        <br /> 
                            <Link href={`/cars/${singleCar.id}`}>
                                <Button>View Details</Button>
                            </Link>
                        <br /> <br />
                    </p>
                })
            }
            <TotalProduct/>
        </div>
    )
}

export default Cars;