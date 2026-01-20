import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
    title: "Can You DIY Concrete Leveling? Why Pros Say No in 2025",
    description: "Thinking about DIY concrete leveling? Learn why this is one home repair you should never attempt yourself, and what can go wrong.",
};

export default function DIYConcreteLevelingPage() {
    return (
        <main className="section bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary-600">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/blog" className="hover:text-primary-600">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">DIY Concrete Leveling</span>
                </div>

                <article className="prose prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Can You DIY Concrete Leveling? Why Professionals Say Absolutely Not
                    </h1>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                        <p className="text-xl font-medium text-red-900 m-0">
                            <strong>Short Answer:</strong> No. DIY concrete leveling is not recommended—and in most cases, it's impossible without specialized equipment. Attempting it yourself will likely cost you <em>more</em> in the long run when you have to call a pro to fix your mistakes.
                        </p>
                    </div>

                    <p className="lead">
                        We get it. You're handy. You've tackled deck builds, bathroom remodels, maybe even poured a concrete patio. But concrete leveling is a different beast entirely. Here's why even experienced DIYers should skip this one.
                    </p>

                    <h2>Why DIY Concrete Leveling Fails</h2>

                    <h3>1. You Don't Have the Equipment (And Can't Rent It)</h3>
                    <p>
                        Professional concrete leveling requires industrial-grade hydraulic pumps capable of generating 1,000+ PSI of pressure. These machines cost $15,000-$50,000 and are not available at Home Depot or any rental center.
                    </p>
                    <p>
                        <strong>What about "DIY foam kits" on Amazon?</strong> Those canned foam products are designed for filling small cracks, not lifting multi-ton concrete slabs. They'll compress under weight and fail within weeks.
                    </p>

                    <h3>2. You Can't Control the Lift</h3>
                    <p>
                        Polyurethane foam expands in seconds. Without precise pressure gauges and experience, you'll either:
                    </p>
                    <ul>
                        <li><strong>Under-lift</strong>: Waste money on materials with no results</li>
                        <li><strong>Over-lift</strong>: Crack your slab or create a new trip hazard going the opposite direction</li>
                    </ul>
                    <p>
                        Professional technicians use laser levels and decades of experience to lift slabs to within 1/10th of an inch accuracy. You won't.
                    </p>

                    <h3>3. You Don't Know What's Underneath</h3>
                    <p>
                        Before lifting concrete, pros assess:
                    </p>
                    <ul>
                        <li>Soil type and compaction</li>
                        <li>Void size and location</li>
                        <li>Presence of utilities (gas lines, water pipes, electrical conduit)</li>
                        <li>Structural integrity of the slab</li>
                    </ul>
                    <p>
                        Injecting foam or slurry into the wrong spot can cause catastrophic damage—including ruptured gas lines or shattered slabs.
                    </p>

                    <h3>4. The "Cheap" Alternatives Don't Work</h3>
                    <p>
                        Common DIY attempts we've seen (all failures):
                    </p>
                    <ul>
                        <li><strong>Self-leveling concrete topper</strong>: Only fills surface dips; doesn't address the void underneath. The slab will keep sinking.</li>
                        <li><strong>Jacking with car jacks + shims</strong>: Might lift the slab temporarily, but without filling the void, it'll settle again immediately.</li>
                        <li><strong>Great Stuff expanding foam</strong>: Not structural. Compresses under load. Designed for insulation, not load-bearing.</li>
                        <li><strong>Grout injection</strong>: Without proper pumps, you can't inject enough volume to fill voids or generate lift.</li>
                    </ul>

                    <div className="my-12">
                        <h3 className="text-2xl font-bold mb-4 text-center">Don't Risk It—Get a Professional Quote</h3>
                        <LeadForm />
                    </div>

                    <h2>What About YouTube Tutorials?</h2>
                    <p>
                        Yes, there are YouTube videos showing "DIY mudjacking." Look closer:
                    </p>
                    <ul>
                        <li>They're using professional pumps (not disclosed)</li>
                        <li>The projects are small (like a single sidewalk square)</li>
                        <li>They don't show the long-term results (spoiler: it fails)</li>
                    </ul>
                    <p>
                        One popular video shows a guy using a grout pump from Harbor Freight. What he doesn't mention: he had to re-do the job 6 months later when it settled again, and eventually hired a pro.
                    </p>

                    <h2>The Real Cost of DIY Concrete Leveling</h2>

                    <div className="bg-gray-50 p-6 rounded-lg my-8">
                        <h3 className="text-xl font-bold mb-4">Scenario: 100 sq ft sunken driveway</h3>

                        <div className="mb-6">
                            <p className="font-semibold text-red-600">DIY Attempt:</p>
                            <ul className="text-sm">
                                <li>Foam kit from Amazon: $200</li>
                                <li>Rental concrete drill: $80</li>
                                <li>Patching materials: $50</li>
                                <li>Your time: 8 hours</li>
                                <li><strong>Result:</strong> Slab lifts unevenly, cracks form, settles again in 3 months</li>
                                <li><strong>Total wasted:</strong> $330 + time</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-green-600">Professional Job:</p>
                            <ul className="text-sm">
                                <li>Polyurethane foam leveling: $700</li>
                                <li>Time: 2 hours (done right)</li>
                                <li><strong>Result:</strong> Perfect lift, 15+ year warranty</li>
                                <li><strong>Total cost:</strong> $700 (one and done)</li>
                            </ul>
                        </div>

                        <p className="mt-4 text-sm font-semibold">
                            Net savings by hiring a pro from the start: <span className="text-green-600">$330 + your sanity</span>
                        </p>
                    </div>

                    <h2>When DIY Concrete Work IS Appropriate</h2>
                    <p>
                        Don't get us wrong—there are concrete projects you can DIY:
                    </p>
                    <ul>
                        <li><strong>Surface crack repair</strong>: Epoxy or polyurethane crack fillers work great</li>
                        <li><strong>Concrete resurfacing</strong>: Applying a thin overlay to refresh appearance</li>
                        <li><strong>Small pours</strong>: Sidewalk sections, small pads (under 50 sq ft)</li>
                        <li><strong>Sealing</strong>: Applying concrete sealer is easy and effective</li>
                    </ul>
                    <p>
                        But <strong>lifting settled concrete</strong>? That's in the same category as foundation repair and structural engineering—leave it to the pros.
                    </p>

                    <h2>What You SHOULD Do Instead</h2>

                    <h3>Step 1: Get Multiple Quotes</h3>
                    <p>
                        Concrete leveling is competitive. Get 3 quotes and you'll likely find a 30-40% price difference. Use our free service to get matched with vetted pros.
                    </p>

                    <h3>Step 2: Ask About Warranties</h3>
                    <p>
                        Reputable companies offer 2-5 year warranties on polyurethane foam work. If they don't, walk away.
                    </p>

                    <h3>Step 3: Verify They're Using Foam (Not Mud)</h3>
                    <p>
                        In 2025, there's no reason to use old-school mudjacking unless you're on a tight budget. Foam is superior in every way except upfront cost.
                    </p>

                    <h2>The Bottom Line</h2>
                    <p>
                        Concrete leveling is one of those rare home repairs where DIY is genuinely not an option. The equipment doesn't exist in the consumer market, the materials require professional-grade chemistry, and the margin for error is zero.
                    </p>
                    <p>
                        Save yourself the headache, the wasted money, and the potential property damage. Get a pro to do it right the first time.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>What if I just want to fill the void, not lift the slab?</h3>
                    <p>
                        Even void filling requires specialized equipment to ensure proper compaction and prevent future settling. A half-filled void is worse than an empty one.
                    </p>

                    <h3>Can I hire a handyman instead of a concrete leveling specialist?</h3>
                    <p>
                        No. This requires specific training and equipment. A general handyman won't have either. You need a company that specializes in mudjacking or polyjacking.
                    </p>

                    <h3>How do I know if my concrete can even be leveled?</h3>
                    <p>
                        Most pros offer free inspections. They'll assess whether your slab is a candidate for leveling or if replacement is necessary (usually only if the concrete is crumbled into pieces).
                    </p>

                </article>

                {/* CTA Footer */}
                <div className="mt-12 bg-gray-900 text-white p-8 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Skip the DIY Disaster</h2>
                    <p className="text-xl text-gray-300 mb-8">Get connected with certified concrete leveling pros who do this every day.</p>
                    <a href="#quote-form" className="btn btn-primary btn-lg inline-block">Get Professional Quote</a>
                </div>
            </div>
        </main>
    );
}
