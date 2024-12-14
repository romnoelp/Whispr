import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoogleButton from "./google-auth-button";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Whispr</CardTitle>
        <CardDescription>
          Use your google account to continue to the app.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <GoogleButton />
      </CardContent>
    </Card>
  );
}
