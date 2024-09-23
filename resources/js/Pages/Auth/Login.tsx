import { FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import WidePrimaryButton from "@/Components/WidePrimaryButton";
import BigProductNameMarquees from "@/Components/BigProductNameMarquees";

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <GuestLayout>
      <div className="relative flex grow">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2">
          <div className="w-full h-full overflow-hidden bg-red-500/10">
            {/* TODO: Replace this SVG graphic with something different. See
                camera roll. Get more flashy with this one. */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fixed z-10 w-1/2 h-full opacity-10"
            >
              <defs>
                <pattern
                  id="plusPattern"
                  x="0"
                  y="0"
                  width={60}
                  height={60}
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d={`M${20 / 2},${20 / 4} v${20 / 2} M${20 / 4},${20 / 2} h${
                      20 / 2
                    }`}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#plusPattern)" />
            </svg>

            <BigProductNameMarquees />
          </div>

          <div className="w-full h-full bg-neutral-800">
            <img
              src="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/pass/Cul-Reveal_ReactorA_VALORANT.jpg"
              className="object-cover h-full grayscale opacity-10"
            />
          </div>
        </div>

        <main className="absolute top-0 left-0 z-10 w-full h-full flex grow justify-center items-center">
          {status && (
            <div className="mb-4 font-medium text-sm text-green-600">
              {status}
            </div>
          )}

          <form
            onSubmit={submit}
            className="flex flex-col space-y-4 w-full max-w-md p-4 bg-neutral-900/80 shadow-lg shadow-neutral-200/5 border border-white/10"
          >
            <div className="flex flex-col space-y-2">
              <InputLabel htmlFor="email" value="EMAIL" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="block w-full"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData("email", e.target.value)}
              />
              <InputError message={errors.email} />
            </div>

            <div className="flex flex-col space-y-2">
              <InputLabel htmlFor="password" value="PASSWORD" />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="block w-full"
                autoComplete="current-password"
                onChange={(e) => setData("password", e.target.value)}
              />
              <InputError message={errors.password} />
            </div>

            <label className="flex items-center select-none text-sm text-neutral-400 font-['Space_Mono'] hover:cursor-pointer hover:text-white hover:underline">
              <Checkbox
                name="remember"
                checked={data.remember}
                onChange={(e) => setData("remember", e.target.checked)}
              />
              <span className="ms-2">Remember me</span>
            </label>

            <div className="flex flex-col space-y-2 items-center justify-center">
              <WidePrimaryButton fullWidth disabled={processing}>
                LOG IN
              </WidePrimaryButton>
              {canResetPassword && (
                <Link
                  href={route("password.request")}
                  className="text-xs text-neutral-400 font-['Space_Mono'] hover:text-white hover:underline focus:outline-none focus:text-white focus:underline"
                >
                  Forgot your password?
                </Link>
              )}
            </div>
          </form>
        </main>
      </div>
    </GuestLayout>
  );
}

//   <form onSubmit={submit} className="w-full max-w-md p-8">
//     <div>
//       <InputLabel htmlFor="email" value="Email" />

//       <TextInput
//         id="email"
//         type="email"
//         name="email"
//         value={data.email}
//         className="mt-1 block w-full"
//         autoComplete="username"
//         isFocused={true}
//         onChange={(e) => setData("email", e.target.value)}
//       />

//       <InputError message={errors.email} className="mt-2" />
//     </div>

//     <div className="mt-4">
//       <InputLabel htmlFor="password" value="Password" />

//       <TextInput
//         id="password"
//         type="password"
//         name="password"
//         value={data.password}
//         className="mt-1 block w-full"
//         autoComplete="current-password"
//         onChange={(e) => setData("password", e.target.value)}
//       />

//       <InputError message={errors.password} className="mt-2" />
//     </div>

//     <div className="block mt-4">
//       <label className="flex items-center">
//         <Checkbox
//           name="remember"
//           checked={data.remember}
//           onChange={(e) => setData("remember", e.target.checked)}
//         />
//         <span className="ms-2 text-sm text-gray-600">Remember me</span>
//       </label>
//     </div>

//     <div className="flex items-center justify-end mt-4">
//       {canResetPassword && (
//         <Link
//           href={route("password.request")}
//           className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Forgot your password?
//         </Link>
//       )}

//       <PrimaryButton className="ms-4" disabled={processing}>
//         Log in
//       </PrimaryButton>
//     </div>
//   </form>
// </div>;
