import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function AddSalary() {
  return (
    <>
      {/* <div className="flex flex-col items-center gap-6"> */}
      {/* <h2 className="text-primary-background scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0"> */}
      {/* Add Your Salary */}
      {/* </h2> */}
      <h3 className="text-muted-foreground max-w-3xl text-balance text-center">
        Salary transparency empowers us all. Share your salary and help the
        community make informed decisions!
      </h3>
      <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Upload a PDF</CardTitle>
            <CardDescription>
              Upload one of the document types below to automatically submit
              your salary!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span>Anonymous</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span>Verified Badge</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" />
              <span>Encrypted & Secure</span>
            </div>
          </CardContent>
          <CardContent>
            <p>Document Types</p>
            <div className="mt-2">
              {[
                "Offer Letter",
                "W2",
                "Promotion Summary",
                "Pay Stub",
                "Etc.",
              ].map((type) => (
                <Badge
                  className="mb-2 mr-1 font-medium"
                  variant={"secondary"}
                  key={type}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter>
            <Button asChild size={"lg"}>
              <Link className="w-full" href={"/salaries/add/upload"}>
                Upload
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-1 flex-col justify-between">
          <div>
            <CardHeader>
              <CardTitle>Enter Manually</CardTitle>
              <CardDescription>
                Fill out your salary information in a quick form!
                <br />
                <br />
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                <span>Anonymous</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" />
                <span>Complete in about 30 seconds</span>
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <Button asChild className="w-full" size={"lg"}>
              <Link href={"/salaries/add/manual"}>Add Manually</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      {/* </div> */}
    </>
  );
}

export default AddSalary;
