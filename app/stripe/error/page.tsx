import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CircleX className="text-red-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Cancelled!
          </h3>
          <p className="text-gray-600 my-2">
            Something went wrong, please try again!
          </p>
          <p>Not today!</p>

          <Button asChild className="mt-5">
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
