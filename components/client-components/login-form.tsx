<<<<<<< HEAD
import { Button } from "@/components/ui/button";

=======
import Link from "next/link";

import { Button } from "@/components/ui/button";
>>>>>>> 574206ae0777819cbedf205449d82c51313df2f9
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
<<<<<<< HEAD
import { login, signup } from "@/app/login/actions";
=======
import { login } from "@/app/login/actions";
>>>>>>> 574206ae0777819cbedf205449d82c51313df2f9

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
<<<<<<< HEAD
                name="email"
                placeholder="petracorta.rmnl@gmail.com"
=======
                placeholder="m@example.com"
>>>>>>> 574206ae0777819cbedf205449d82c51313df2f9
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
<<<<<<< HEAD
              </div>
              <Input id="password" name="password" type="password" required />
=======
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
>>>>>>> 574206ae0777819cbedf205449d82c51313df2f9
            </div>
            <Button type="submit" formAction={login} className="w-full">
              Login
            </Button>
<<<<<<< HEAD
            <Button type="submit" formAction={signup} className="w-full">
              Signup
            </Button>
          </div>
        </form>
=======
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup"  className="underline">
            Sign up
          </Link>
        </div>
>>>>>>> 574206ae0777819cbedf205449d82c51313df2f9
      </CardContent>
    </Card>
  );
}
<<<<<<< HEAD

// import { login, signup } from "@/app/login/actions";

// export function LoginForm() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   );
// }
=======
>>>>>>> 574206ae0777819cbedf205449d82c51313df2f9
