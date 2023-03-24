export const load = ({ params }) => {
	let content: any = {};
	let title = '';

	if (params.slug === 'anatomy-of-a-pump-and-dump') {
		content = import('$lib/text/anatomy-of-a-pump-and-dump.md');
		title = 'Anatomy of a Pump and Dump';
	} else if (params.slug === 'kucoin-investor-logs') {
		content = import('$lib/text/kucoin-investor-logs.md');
		title = 'Kucoin Investor Logs';
	} else if (params.slug === 'trading-with-ico-funds') {
		content = import('$lib/text/trading-with-ico-funds.md');
		title = 'Trading with ICO Funds';
	}

	return {
		content,
		title
	};
};
