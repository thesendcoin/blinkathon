import { redirect } from "next/navigation";

export default function Submit() {
    // redirect to google.com

    redirect("https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Fblinkathon.fun%2Fapi%2Fsubmit&cluster=mainnet")
}