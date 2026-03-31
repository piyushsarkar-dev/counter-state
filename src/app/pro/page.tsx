import Pro from "@/components/customui/Pro";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Counter Pro</CardTitle>
        </CardHeader>
        <CardContent>
          <Pro />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
