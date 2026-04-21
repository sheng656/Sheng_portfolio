import { motion } from "framer-motion";
import type { ProjectsData } from "../types";
import IconGlyph from "./IconGlyph";

interface ProjectsProps {
	data: ProjectsData;
}

function Projects({ data }: ProjectsProps) {
	const headingId = `${data.id}-heading`;

	return (
		<motion.section
			id={data.id}
			aria-labelledby={headingId}
			className="section-anchor rounded-3xl border border-base-border/70 bg-base-surface/65 p-6 shadow-soft md:p-10"
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<h2 id={headingId} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
				{data.heading}
			</h2>

			<div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
				{data.items.map((item) => (
					<motion.article
						key={item.id}
						className="group relative overflow-hidden rounded-2xl border border-base-border/80 bg-base-elevated/65 p-5 shadow-soft transition"
						whileHover={{ y: -6 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
					>
						<div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

						<div className="relative">
							<h3 className="font-display text-xl font-semibold text-ink">{item.name}</h3>
							<p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

							<ul className="mt-4 flex flex-wrap gap-2">
								{item.techStack.map((tech) => (
									<li
										key={tech}
										className="rounded-full border border-base-border bg-base-surface px-2.5 py-1 text-xs font-medium text-muted"
									>
										{tech}
									</li>
								))}
							</ul>

							<div className="mt-5 flex flex-wrap gap-3">
								{item.links.map((link) => (
									<a
										key={`${item.id}-${link.label}`}
										href={link.href}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-200 transition hover:text-accent-100"
										aria-label={`${item.name} ${link.label}`}
									>
										<IconGlyph name="link" className="h-3.5 w-3.5" />
										{link.label}
									</a>
								))}
							</div>
						</div>
					</motion.article>
				))}
			</div>
		</motion.section>
	);
}

export default Projects;
