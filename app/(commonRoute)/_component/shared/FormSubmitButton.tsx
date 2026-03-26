import { Button } from "@/components/ui/button";

export function FormSubmitButton({loading, children}: {loading: boolean, children: React.ReactNode}) {
    return(
        <Button>
            {loading ? <p>Loading...</p>: children}
        </Button>
    )
}