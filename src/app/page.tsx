"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout()

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <div>
      Only visible to authorized users.
      <Button onClick={() => mutate()}>Logout</Button>
      <div className="flex gap-4 pb-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="muted">Muted</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="tertiary">Tertiary</Button>
      </div>
      <div>
        <Input></Input>
      </div>
    </div>
  )
}
