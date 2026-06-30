import { dateConfig } from "@/site-config";

const dateFormat = new Intl.DateTimeFormat(dateConfig.locale, dateConfig.options);

export function getFormattedDate(
	date: string | number | Date | undefined,
	options?: Intl.DateTimeFormatOptions
) {
	if (date == null) {
		return "";
	}
	if (typeof options !== "undefined") {
		return new Date(date).toLocaleDateString(dateConfig.locale, {
			...(dateConfig.options as Intl.DateTimeFormatOptions),
			...options,
		});
	}

	return dateFormat.format(new Date(date));
}
