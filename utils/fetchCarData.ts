import { envVar } from "./envVar"

export async function fetchCarData(name: string = "default") {
    const start = performance.now()

    // const result = await fetch(`${envVar.backendUrl}/cars`); // default 
    const result = await fetch(`${envVar.backendUrl}/cars`, {cache: "no-store"});  // no store > normal JS fetch
    // const result = await fetch(`${envVar.backendUrl}/cars`,
    //     {cache: "force-cache", next: {revalidate: 30} });  // force-cache and revalidate data interesting idea
    const data = await result.json();

    const end = performance.now();

    console.log(`Fetch took in ${name} ${(end - start).toFixed(3)} ms`);
    return data;
}