"use client";
import { Button } from "@/components/ui/button";

function BannerButton() {
    return(
        <Button onClick={() => alert("Clicked")}>Get Started</Button>
    )
}

export default BannerButton;