import { motion } from "framer-motion";
import type { ExperienceData } from "../types";

interface ExperienceProps {
	data: ExperienceData;
}

function Experience({ data }: ExperienceProps) {
	const headingId = `${data.id}-heading`;

	return (
		<motion.section
			id={data.id}
			aria-labelledby={headingId}
			className="section-anchor rounded-3xl border border-base-border/70 bg-base-surface/65 p-6 shadow-soft md:p-10"
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.22 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<h2 id={headingId} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
				{data.heading}
			</h2>

			<ol className="relative mt-8 space-y-6 border-l border-base-border/85 pl-6">
				{data.entries.map((entry) => (
					<motion.li
						key={entry.id}
						className="relative"
						initial={{ opacity: 0, x: 14 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.45 }}
					>
						<span
							aria-hidden="true"
							className="absolute -left-[2.02rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-base-bg bg-accent-400"
						/>
						<article className="rounded-2xl border border-base-border/80 bg-base-elevated/60 p-5">
							<header className="flex flex-wrap items-start justify-between gap-2">
								<div>
									<h3 className="font-display text-xl font-semibold text-ink">{entry.title}</h3>
									<p className="text-sm text-muted">{entry.organization}</p>
								</div>
								<p className="font-mono text-xs tracking-wide text-accent-200">
									{entry.startDate} - {entry.endDate}
								</p>
							</header>
							<p className="mt-2 text-sm text-muted">{entry.location}</p>
							<ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
								{entry.bulletPoints.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</article>
					</motion.li>
				))}
			</ol>
		</motion.section>
	);
}

export default Experience;
