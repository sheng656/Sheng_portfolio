import { motion } from "framer-motion";
import type { SkillsData } from "../types";
import IconGlyph from "./IconGlyph";

interface SkillsProps {
	data: SkillsData;
}

function Skills({ data }: SkillsProps) {
	const headingId = `${data.id}-heading`;

	return (
		<motion.section
			id={data.id}
			aria-labelledby={headingId}
			className="section-anchor rounded-3xl border border-base-border/70 bg-base-surface/65 p-5 shadow-soft md:p-7"
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.22 }}
			transition={{ duration: 0.55, ease: "easeOut" }}
		>
			<h2 id={headingId} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
				{data.heading}
			</h2>

			<motion.div
				className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.22 }}
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.08 },
					},
				}}
			>
				{data.categories.map((category) => (
					<motion.article
						key={category.id}
						className="rounded-2xl border border-base-border/80 bg-base-elevated/60 p-3.5 md:p-4"
						variants={{
							hidden: { opacity: 0, y: 18 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<h3 className="font-display text-base font-semibold text-ink md:text-lg">{category.title}</h3>
						<motion.ul
							className="mt-3 flex flex-wrap gap-1.5"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							variants={{
								hidden: { opacity: 1 },
								visible: {
									opacity: 1,
									transition: { staggerChildren: 0.035 },
								},
							}}
						>
							{category.tags.map((tag) => (
								<motion.li
									key={tag.name}
									className="group"
									variants={{
										hidden: { opacity: 0, y: 8 },
										visible: { opacity: 1, y: 0 },
									}}
									whileHover={{ y: -2 }}
								>
									<span className="inline-flex items-center gap-1.5 rounded-full border border-base-border bg-base-surface px-2.5 py-1 text-[11px] font-medium text-muted transition group-hover:border-accent-400/60 group-hover:bg-base-elevated group-hover:text-ink">
										<IconGlyph name={tag.iconKey} className="h-3 w-3 text-accent-300" />
										{tag.name}
									</span>
								</motion.li>
							))}
						</motion.ul>
					</motion.article>
				))}
			</motion.div>
		</motion.section>
	);
}

export default Skills;
