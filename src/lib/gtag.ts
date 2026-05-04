/**
 * Google Analytics 4 (GA4) Utility
 * Measurement ID: G-0L78LPK5DK
 */

export const GA_MEASUREMENT_ID = "G-0L78LPK5DK";

// Global project identifier
const PROJECT_ID = "portfolio";

/**
 * Log a custom event to GA4
 * @param action - Event name (e.g., 'project_open')
 * @param params - Additional event parameters
 */
export const trackEvent = (action: string, params: Record<string, any> = {}) => {
	if (typeof window !== "undefined" && (window as any).gtag) {
		(window as any).gtag("event", action, {
			project_id: PROJECT_ID,
			...params,
		});
	}
};

/**
 * Log project view (Live Demo click)
 */
export const trackProjectOpen = (projectName: string) => {
	trackEvent("project_open", {
		item_name: projectName,
	});
};

/**
 * Log GitHub link click
 */
export const trackGithubClick = (projectName: string) => {
	trackEvent("github_click", {
		item_name: projectName,
	});
};

/**
 * Log CV Download
 */
export const trackCVDownload = () => {
	trackEvent("cv_download", {
		method: "button_click",
	});
};

/**
 * Log Contact interaction
 */
export const trackContactClick = (platform: string) => {
	trackEvent("contact_click", {
		platform: platform,
	});
};
