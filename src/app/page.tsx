import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Starter Frontend",
  description: "Production grade Next.js starter template",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center">Counter</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
};

export default page;
