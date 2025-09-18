import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
      <main className="mx-auto max-w-screen-lg px-6 py-10">
        <section className="space-y-6">
          <h1 className="font-custom text-3xl">Tailwind v4 Custom Theme Demo</h1>
          <p className="text-base text-gray-700">
            This project demonstrates a clean theme setup using{" "}
            <code>@theme</code> in <code>globals.css</code>.
            Update tokens in one place, and changes apply across the entire app.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-primary p-4">
              <h3 className="font-custom text-xl">Card Example</h3>
              <p className="mt-2 text-sm text-gray-600">
                This card uses the <code>border-primary</code> utility from the custom theme.
              </p>
            </div>
            <div className="rounded-xl bg-accent p-4 text-light">
              <h3 className="font-custom text-xl">Accent Block</h3>
              <p className="mt-2 text-sm">
                Background set with <code>bg-accent</code> utility class.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}

