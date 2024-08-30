"use client";

import { envHeliusRpcUrl } from "@/lib/envConfig";
import { Action, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import "@dialectlabs/blinks/index.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const DynamicBlink = dynamic(
  () => import("@dialectlabs/blinks").then((mod) => mod.Blink),
  { ssr: false }
);

// Testing
const BlinkComp = ({ propActionApiUrl }: { propActionApiUrl: string }) => {
  const [action, setAction] = useState<Action | null>(null);
  // const actionApiUrl =
  //   "https://blinktochat.fun/api/actions/start/-1002200926307/59qiJZ4y4hdog6LnQVqbwP8U11vFnYuhq54ScmLzwSqJ";

  const actionApiUrl = propActionApiUrl;
  const { adapter } = useActionSolanaWalletAdapter(envHeliusRpcUrl as string);
  // useAction initiates registry, adapter and fetches the action.
  const { action: actionUrl } = useAction({
    url: actionApiUrl,
    adapter,
  });

  useEffect(() => {
    console.log("actionUrl", actionUrl);
    if (actionUrl) {
      setAction(actionUrl as Action);
    }
  }, [actionUrl]);

  return (
    <>
      {action ? (
        <DynamicBlink
          action={action}
          websiteText={new URL(actionApiUrl).hostname}
        />
      ) : (
        <div>Blink is Loading</div>
      )}
    </>
  );
};

export default BlinkComp;
