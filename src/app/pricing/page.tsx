import Container from "@/components/Container";
import PricingTabs from "@/components/PricingTabs";

export default function PricingPage() {
  return (
    <main className="relative pt-28 pb-16">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-blue-400">Pricing</span> Plans
          </h1>

          <p className="mt-4 text-zinc-300">
            Transparent packages designed for predictable delivery, stable operations, and performance-focused outcomes.
          </p>

          <div className="mt-8 flex justify-center">
            <PricingTabs />
          </div>
        </div>
      </Container>
    </main>
  );
}
