import {
  ArrowRightIcon,
  CheckIcon,
  LockIcon,
  MailIcon,
  MessageCircleIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signUp, isSigningUp } = useAuthStore();

  const handleChange = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp({
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password,
    });
  };

  return (
    <section className="mx-auto flex w-full max-w-6xl items-center justify-center">
      <div className="grid w-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-[0_40px_120px_rgba(2,6,23,0.72)] backdrop-blur xl:grid-cols-[1.08fr_0.92fr]">
        <div className="relative hidden min-h-[720px] overflow-hidden border-r border-white/10 bg-[linear-gradient(160deg,rgba(7,14,30,0.98),rgba(2,6,23,0.92))] p-12 xl:flex xl:flex-col xl:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.22),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(249,115,22,0.14),transparent_18%),linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:auto,auto,36px_36px,36px_36px]" />

          <div className="relative max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <SparklesIcon className="size-4" />
              New account setup
            </div>

            <div className="mt-12">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Welcome to ChatApp
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-white">
                A calmer, cleaner place to start your conversations.
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                Build your profile in a few seconds, then move straight into a
                focused chat experience with a modern, minimal interface.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Setup time
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  Under 1 min
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Just your name, email, and password.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Experience
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  Distraction-free
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Designed to feel focused from the first screen.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
                <MessageCircleIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Ready to join?
                </p>
                <p className="text-sm text-slate-400">
                  Your account opens the full chat workspace.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <CheckIcon className="size-4 text-cyan-300" />
                Personal profile setup
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="size-4 text-cyan-300" />
                Secure email and password flow
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="size-4 text-cyan-300" />
                Immediate access after signup
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[720px] items-center justify-center overflow-hidden p-6 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_34%)]" />
          <div className="w-full max-w-md">
            <div className="relative rounded-[30px] border border-white/10 bg-slate-950/75 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-sm sm:p-8">
              <div className="xl:hidden">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
                  <SparklesIcon className="size-4" />
                  Create account
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  Sign up
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Create your profile to start chatting with a clean,
                  distraction-free setup.
                </p>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full Name
                  </label>
                  <div className="group relative">
                    <UserIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-500 transition group-focus-within:text-cyan-300" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange("fullName")}
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-slate-900/90 focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <div className="group relative">
                    <MailIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-500 transition group-focus-within:text-cyan-300" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-slate-900/90 focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Password
                  </label>
                  <div className="group relative">
                    <LockIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-500 transition group-focus-within:text-cyan-300" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={handleChange("password")}
                      placeholder="Create a strong password"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:bg-slate-900/90 focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSigningUp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3.5 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSigningUp ? "Creating account..." : "Create account"}
                  <ArrowRightIcon className="size-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-slate-400">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    Log in
                  </Link>
                </p>
                <p className="hidden text-slate-500 sm:block">Secure signup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
