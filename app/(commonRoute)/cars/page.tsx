import { Button } from "@/components/ui/button";
import { envVar } from "@/utils/envVar";
import Link from "next/link";

async function Cars() {
    interface SingleCar {
        id: string;
        [key: string]: any;
    }
    let data = await fetch(`${envVar.backendUrl}/cars`);
    let carsData = await data.json();
    return(
        <div>
            {
                carsData.data.map((singleCar: SingleCar) => {
                    return <p key = {singleCar.id}>
                        {JSON.stringify(singleCar)} 
                        <br /> 
                            <Link href={`/cars/${singleCar.id}`}>
                                <Button>View Details</Button>
                            </Link>
                        <br /> <br />
                    </p>
                })
            }
        </div>
    )
}

export default Cars;