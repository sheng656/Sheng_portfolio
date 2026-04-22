import { motion } from "framer-motion";
import type { AboutData } from "../types";
import IconGlyph from "./IconGlyph";

interface AboutProps {
	data: AboutData;
}

function About({ data }: AboutProps) {
	const headingId = `${data.id}-heading`;

	return (
		<motion.section
			id={data.id}
			aria-labelledby={headingId}
			className="section-anchor rounded-3xl border border-base-border/70 bg-base-surface/65 p-6 shadow-soft md:p-10"
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
				<div>
					<h2 id={headingId} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
						{data.heading}
					</h2>
					<p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{data.bio}</p>

					<div className="mt-6 space-y-3">
						{data.transitionStory.map((line) => (
							<p key={line} className="text-sm leading-relaxed text-muted sm:text-base">
								{line}
							</p>
						))}
					</div>

					<ul className="mt-8 grid gap-3 sm:grid-cols-2">
						{data.highlights.map((highlight) => (
							<li
								key={highlight.label}
								className="flex items-center gap-3 rounded-2xl border border-base-border/80 bg-base-elevated/70 p-3"
							>
								<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500/18 text-accent-300">
									<IconGlyph name={highlight.iconKey} className="h-4 w-4" />
								</span>
								<div className="min-w-0">
									<p className="text-xs uppercase tracking-wide text-muted">{highlight.label}</p>
									<p className="truncate text-sm font-medium text-ink">{highlight.value}</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div>
					<div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-base-border bg-base-elevated/80">
						<img src={data.photoSrc} alt={data.photoAlt} className="h-full w-full object-cover" />
						<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,19,0.02),rgba(6,10,19,0.28))]" />
						<div className="absolute inset-x-5 bottom-5 rounded-2xl border border-accent-500/25 bg-base-surface/75 p-4 backdrop-blur-sm">
							<div className="flex items-center gap-3">
								<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/22 text-accent-300">
									<IconGlyph name="spark" className="h-4 w-4" />
								</span>
								<span className="h-2 flex-1 rounded-full bg-base-border/80" />
							</div>
							<span className="mt-3 block h-2 w-3/4 rounded-full bg-base-border/80" />
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default About;
