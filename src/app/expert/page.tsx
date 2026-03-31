import Expert from "@/components/customui/Expert";
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
          <CardTitle className="text-center text-2xl">Counter Expert</CardTitle>
        </CardHeader>
        <CardContent>
          <Expert />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
