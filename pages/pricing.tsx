import Header from 'components/header';
import OpenGraph from 'components/open_graph';
import Link from 'next/link';

function PricingPage() {
  const title = 'Pricing';
  const description = 'Free to get started, affordable for business.';

  return (
    <div>
      <main>
        <OpenGraph title={title} description={description} path="/pricing" />
        <Header />

        <div className="mx-auto px-6 pt-12 container">
          <div className="pt-6 md:pt-10 pb-12 md:pb-16">
            <h1 className="pb-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-center">
              Pricing
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Free to get started, affordable for business.
            </p>
          </div>

          <div className="md:flex max-w-5xl mx-auto border-t border-b">
            <div className="px-6 py-16 md:w-1/2 border-b md:border-b-0 md:border-r">
              <h2 className="text-center text-sm uppercase font-bold tracking-wide text-indigo-600">
                Sandbox
              </h2>
              <div className="text-center text-4xl sm:text-6xl tracking-tight font-bold">
                Free
              </div>

              <p className="text-center text-base text-gray-700">
                For light personal use and testing.
              </p>
              <p className="text-center text-base text-gray-700">
                Up to 100 form submissions / month.
              </p>
              <p className="pb-2 text-center text-base text-gray-700">
                Unlimited forms.
              </p>
            </div>
            <div className="px-6 py-16 md:w-1/2">
              <h2 className="text-center text-sm uppercase font-bold tracking-wide text-indigo-600">
                Production
              </h2>
              <div className="text-center text-4xl sm:text-6xl tracking-tight font-bold">
                $10
                <span className="text-lg font-normal text-gray-600 tracking-normal">
                  {' '}
                  / site / mo
                </span>
              </div>
              <p className="text-center text-base text-gray-700">
                For businesses and agencies.
              </p>
              <p className="text-center text-base text-gray-700">
                Up to 1,000 form submissions / month.
              </p>
              <p className="pb-2 text-center text-base text-gray-700">
                Unlimited forms.
              </p>
            </div>
          </div>

          <div className="py-16 text-center border-b">
            <a
              href="https://app.statickit.com/signup"
              className="btn focus:shadow-outline"
            >
              Get started free
            </a>
          </div>

          <p className="py-16 text-center text-gray-700">
            Need higher limits?{' '}
            <Link href="/support">
              <a className="font-semibold text-indigo-600">Let&rsquo;s chat.</a>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default PricingPage;
