<script lang="ts">
	import fire_img from '$lib/img/on-fire.jpg';
	import lamden_pepe from '$lib/img/lamden-pepe.png'
	function returnPrettyDate() {
		const date = new Date();
		const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		return date.toLocaleDateString('en-GB', options);
	}

	// console.log({ html });
</script>

<img src={fire_img} alt="lamden in flames" height="500" />

<h1>Lamden Riot</h1>
<b><i>Shedding light on crimes against the community.</i></b>
<div style="display:flex; flex-direction: row; margin-bottom: 10px;">
	<a href="#tldr">TLDR</a>
</div>
<div>
	<b> Table of Contents : </b>
	<div id="toc" style="width: 600px">
		<a href="#goals">Goals</a>
		<a href="#what">What is this ?</a>
		<a href="#ico">ICO</a>
		<a href="#mainnet">"MainNet"</a>
		<a href="#labs">Lamden Labs</a>
		<a href="#trading">Investor Funds Used for Trading</a>
		<a href="#owb">One way bridge pump and dump</a>
		<a href="#capitalised">Well Capitalised</a>
		<a href="#daoxit">DAOxit</a>
		<a href="#wen">When Exchange ? (never.)</a>
		<a href="#license">License</a>
		<a href="#crumbling">Crumbling Infrastructure</a>
		<a href="#key-issues">The Key Issues</a>
		<a href="path-ahead">The Path Ahead</a>
		<a href="#help">Help us keep Lamden honest !</a>
	</div>
</div>
<div style="margin-top: 15px;">
	<b>
		Content : <br />
	</b>
	<div style="display:flex; flex-direction:row;width: 600px;justify-content:space-between">
		<div>
			<a href="/articles/anatomy-of-a-pump-and-dump">Anatomy of a Pump and Dump</a>
		</div>
		<div>
			<a href="/articles/kucoin-investor-logs">Kucoin Investor Logs</a>
		</div>
		<div>
			<a href="/articles/trading-with-ico-funds">Trading With ICO Funds</a>
		</div>
	</div>
</div>
<div style="margin-top: 15px;">
	<b>
		Socials : <br />
	</b>
	Join us on our socials, and show your support ! <br />
	<div style="display:flex; flex-direction:row;width: 200px;justify-content:space-evenly">
		<div>
			<a href="https://twitter.com/lamden_riot">Twitter</a>
		</div>
		<div>
			<a href="https://t.me/lamden_riot">Telegram</a>
		</div>
	</div>
</div>
<h1>Introduction</h1>
<p>
	The community of Lamden builders and holders have had enough of the lies, broken promises and lack
	of transparency from the Lamden leadership.
	<br />
	We are making a stand to expose the actions and mishandling of the Lamden project, the TAU token, and
	investor funds by Lamden CEO, Stuart Farmer to the wider blockchain & Web3 community. <br />
</p>
<b id="goals"> Our goals are to : </b>
<ul>
	<li>Provide a record of the mishandling of the Lamden project.</li>
	<li>Expose the actions of the Lamden, under the leadership of CEO Stuart Farmer.</li>
	<li>Exert sufficient pressure through social means to alter the future of the Lamden project.</li>
	<li>
		We fundamentally believe that the Lamden project has the potential to be a great success, but we
		know that it is not possible in it's current state, under it's current leadership. <br />
	</li>
	<li>
		We are not doing this to destroy the project, we are trying help it reach the goals which were
		claimed when we became invested.
	</li>
</ul>
<h2 id="what">What is this ?</h2>
<ul>
	<li>
		This page exists to shed light on some of the disingenuous, irresponsible and fraudulent
		business practices of Lamden over the past 5 years.
	</li>
	<li>
		It is a widely understood within the Lamden OG community that the project has suffered from
		years of neglect, under-funding, missed deadlines from the Lamden team.
	</li>
	<li>At the end we offer some suggestions for how the Lamden project can be salvaged.</li>
</ul>

<h1>Brief history of Lamden</h1>
<h3 id="ico">ICO</h3>
<ul>
	<li>
		Lamden is a project which originated as an <a href="https://icodrops.com/lamden/">ICO in 2017</a
		>
	</li>
	<li>
		The <a target="_blank" href="https://whitepaper.io/document/307/lamden-whitepaper">whitepaper</a
		> describes a suite of tools for deploying blockchains and smart contracts.
	</li>
	<li>The original date of launch of "Lamden Mainnet" was pencilled for October 2018</li>
</ul>
<h3 id="mainnet">Mainnet</h3>
<ul>
	<li>
		Lamden mainnet was finally released in September 2020, almost a two full years behind schedule.
	</li>
	<li>
		The quality of the product released can only generously be referred to as Proof of Concept.
	</li>
	<li>
		The network was launched with two nodes, which would not stay in sync. The team quickly reduced
		the network to one functioning node.
	</li>
	<li>
		<a href="https://www.youtube.com/watch?v=cFLtqJQ5LRc">Promotional materials</a> circulated around
		time of launch claimed that the network is capable of 1000's of transactions per second. This claim
		is false, in fact the network was prone to down-time when there was even moderate use.
	</li>
	<li>
		These issues continued well into 2022, when there was finally a bandaid applied in the form of
		running the Lamden webserver component as a cluster.
	</li>
	<li>
		It is now {returnPrettyDate()}, TAU holders are still waiting for a "decentralised" Mainnet.
	</li>
</ul>

<h3 id="labs">Lamden Labs</h3>
<ul>
	<li>Lamden Labs is a pool of TAU which was accidentally minted during the ICO</li>
	<li>The initial amount of tokens in this pool was ~88,000,000.</li>
	<li>The current amount of TAU held in Lamden Labs is ~40,000,000</li>
	<li>
		Instead of burning these tokens Stuart Farmer, Lamden CEO, decided that it would be best if they
		were held onto to encourage adoption of the Lamden platform
	</li>
	<li>
		Read more about Lamden Labs <a
			href="https://blog.lamden.io/lamden-labs-thinking-beyond-the-lamden-suite-f44d41549fcd"
			target="_blank">here</a
		>.
	</li>
	<li>
		To Date, these funds have been used to fund the Lamden Core team (despite it being extremely
		well capitalized, and liquidity being extremely thin), sell to new investors, in OTC deals and
		also sold onto a cornered market, see the document about the 2021 BSC "One way bridge" for a
		warts and account.
	</li>
	<li>The proceeds of these sales appear to have been swallowed up by the Lamden treasury.</li>
	<li>
		A minority of this TAU has found it's way into the hands of project builders, in the form of
		bounties / building incentives. A Generous estimate would be ~5m.
	</li>
	<li>
		We believe that the keeping and misuse of these funds is a grevious abuse of investor trust, and
		tantamount to robbery by Lamden.
	</li>
</ul>

<h3 id="trading">Investor funds used for trading</h3>
<ul>
	<li>
		Over the years Lamden has tried to spin it's refusal to allocate funds to things the community
		considers important (such as exchanges, developer onboarding and exposure for the project) as a
		positive.
	</li>
	<li>
		By examining transaction logs of Lamden's known wallets, it can be seen that Lamden's frugality
		extends only as far as things which directly benefit the community.
	</li>
	<li>Here is one example of an instance where Lamden lost ~$270,000 on a single trade.</li>
	<li>
		We have barely begun to scratch the surface of the Lamden transaction logs. If you're interested
		to DYOR, here are a few team wallets to start with : <br /><br />
		<ul>
			<li>
				<a
					target="_blank"
					href="https://etherscan.io/address/0xa3ecc09e7a1ad66ee28a7abaac4577a1f8be636d"
					>0xa3ecc09e7a1ad66ee28a7abaac4577a1f8be636d</a
				>
			</li>
			<li>
				<a
					target="_blank"
					href="https://etherscan.io/address/0x517a13b166816762646b03d3a969826beed4f8e1"
					>0x517a13b166816762646b03d3a969826beed4f8e1</a
				>
			</li>
			<li>
				<a
					target="_blank"
					href="https://www.bscscan.com/address/0xc0a7227819c3e253c73037d8ec0e0782018de893"
					>0xc0a7227819c3e253c73037d8ec0e0782018de893</a
				>
			</li>
		</ul>
	</li>
</ul>

<h3 id="owb">One way bridge pump and dump</h3>
<ul>
	<li>In August 2021 Lamden launched a "One way bridge" from BSC to Lamden Mainnet.</li>
	<li>
		With the use of influencers, wash trading bots and dummy wallet, Lamden created conditions where
		it was able to sell 7m TAU from Lamden Labs onto a cornered market. <a
			href="/articles/anatomy-of-a-pump-and-dump">Read More</a
		>
	</li>
</ul>

<h1>The current state of Lamden</h1>
<h3 id="capitalised">Well capitalised</h3>
<ul>
	<li>
		It is acknowledged by the Lamden team that the project is well capitalised, and that at least <i
			><b>$4,000,000</b></i
		>
		exists in "a high interest savings account". <br />
	</li>
	<li>
		Through investigation of blockchain transactions, it is suspected that this cash resides on
		<a
			href="https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48?a=0x7f5f245488c835e24d01dabb5f7542eaec32cb06"
			>coinbase</a
		>. <br />
	</li>
	<li>
		It does not take much further browsing of the Lamden transaction logs to reach the conclusion
		there is likely more than $4,000,000 in cash reserves.
	</li>
</ul>

<h3 id="daoxit">DAOxit</h3>
<ul>
	<li>
		It is now widely suspected that the founder, and CEO of Lamden, Stuart Farmer ("Stu"), intends
		to further divest Lamden from responsibilities that TAU investors deem important for the future
		value of their investment, in favour of moving said responsibilities to "The DAO". Lamden will
		be tasked with maintaining and developing the Lamden Protocol, though as we can see, Lamden
		which has not yet produced a working and decentralised Mainnet, is already cutting the size of
		it's already small team.
	</li>
	<li>
		The DAO as it stands, will receive the remainder of the <b>Lamden Labs funds</b>, 44,000,000
		TAU, and will be burdened with all activities related to marketing, exposure, user onboarding,
		exchange listings and maintenance of a growing list of Lamden codebases, such as the Wallet.
	</li>
</ul>

<h3>When Exchange ?</h3>
<ul>
	<li>
		Despite exchanges being a key instrument for any cryptocurrency project, Lamden refuses to
		allocate even a small amount of resources to this task.
	</li>
	<li>
		Lamden is current available on a total of <b><i>0</i></b> exchanges.
	</li>
	<li>
		For a time in 2021, during the infamous "BSC One Way Bridge" debacle, Lamden had attained
		listings on 2 exchanges, BigONE and BiBox. These listings were short lived, and TAU was quickly
		delisted from BigONE. BiBox went insolvent.
	</li>
	<li>
		TXBit, an exchange barely worth mentioning due to it's non-existent volume and liquidity,
		delisted TAU in February 2023 after Lamden failed to notify TXBit about breaking changes in the
		upgrade.
	</li>
	<li>
		TXBit requested $15,000 to upgrade their node to the new version of the Lamden protocol. Lamden
		refused to pay, and TXBit delisted TAU, stranding user funds on the exchange.
	</li>
	<li>
		It is understood that Lamden is blacklisted from KuCoin due to the unprofessional and
		disrespectful attitude of Stuart Farmer during listing negotiations. This can be evidenced in
		leaked logs of conversations between OTC investors, a KuCoin representative and Stuart Farmer.
	</li>
</ul>

<h3>License</h3>
<ul>
	<li>
		Despite Lamden marketing itself during the ICO as an open source project, the Lamden protocol
		exists under a attribution, non-commercial <a
			href="https://github.com/Lamden/lamden/blob/master/LICENSE.txt">license</a
		>. This prohibits use of the codebase for commercial purposes, without permission.
	</li>
	<li>
		Due to the restrictions of this license, builders who have invested time and resources into
		building on Lamden are essentially trapped on the Lamden network, without the opportunity to
		migrate their work to a different chain, or start a new one, free of the awful reputation and
		business practices of Lamden.
	</li>
	<li>
		Lamden has stated it will not be changing the license of the Lamden protocol, and that it will
		not be allowing any of the codebases to be forked, as that would introduce "competition" to the
		Lamden chain, and that it is his duty to protect TAU holders.
	</li>
	<li>
		There is no plan in place to allow value from selling the license to resolve back to TAU
		investors.
	</li>
</ul>

<h3 id="crumbling">Crumbling infrastructure</h3>

<ul>
	<li>
		Currently there is one block explorer, <a href="tauhq.com">TAUHQ</a> which is generously
		maintained free of charge by a community member. <br />
		As much as we value and salute this person's efforts, this explorer is not a viable solution as the
		maintainer has long ago lost interest in the project, and there are frequent issues and outages.
	</li>
	<li>
		The Lamden Blockservice is a piece of infrastructure which is critical to the creation of
		applications on Lamden, it is essentially like infura for Ethereum. <br />. Unfortunately, this
		is another piece of software that has not been allocated the appropriate resources, and as such
		does not work reliably.
	</li>
	<li>
		The Lamden vault browser extension is the sole way that users can interact with Lamden. In June,
		google are releasing a breaking change to browser extensions which will require the wallet to
		receive a comprehensive refactor. <br />
		Lamden has indicated that this is yet another task that will be left to the underfunded DAO to maintain.
	</li>
</ul>

<h1 id="tldr">TLDR;</h1>
<h3 id="key-issues">The Key issues</h3>
<ul>
	<li>
		Lamden refuses to invest appropriate resources in the success of it's own project and token. As
		a result Lamden is not competitive and is not growing.
	</li>
	<li>
		Lamden Labs funds, which were accidentally minted from the ICO, and kept uner the pretence of
		being for "community development", have been sold off on the open market without the profits
		being fed back into initiatives that benefit TAU hodlers. It is unknown where the profits from
		these sales have gone.
	</li>
	<li>
		The Lamden community believes that one likely possibility is that Lamden's leadership is
		deliberately starving the project of funds, in order to destroy it and pocket the remaining ICO
		funds.
	</li>
	<li>
		There is no accountability accepted for the failures of the project, missed deadlines, and no
		recourse for people who have invested in the success of the platform.
	</li>
	<li>
		Lamden has neglected it's duty of care towards TAU investors, and neglected to allocate
		appropriate funds to securing the protocol. This dereliction of duty resulted in the protocol
		getting <a href="https://blog.lamden.io/bsc-pool-exploit-post-analysis-3501269018e6">
			exploited</a
		>.
	</li>
	<li>
		TAU holders and builders are left without options due to the restrictive <a
			href="https://github.com/Lamden/lamden/blob/master/LICENSE.txt">license</a
		> of the Lamden codebase.
	</li>
	<li>
		Lamden CEO, Stuart Farmer plans to offload all "non-core protocol" responsibilities to "The
		DAO", which will be funded with 44,000,000 illiquid TAU. None of the profits from selling Lamden
		Labs TAU is to be allocated to the DAO.
	</li>
	<li>
		DAO will be responsible for : wallet maintenance & updates, marketing, developer onboarding,
		exchange listings, etc
	</li>
	<li>
		There are rumours that Lamden team developers are having their contracts ended or hours slashed
		to part-time, while important parts of the codebase are unfinished or badly in need of
		maintenance.
	</li>
	<li>
		The Lamden team refuses to allocate any resources to the listing of TAU on exchanges, despite
		this issue being a key concern for TAU holders and Lamden being extremely well financed.
	</li>
	<li>
		In 2021 Lamden orchestrated a "Pump and Dump" of the TAU token, where they used wash-trading,
		dummy wallets and influencers to artificially inflate the price of TAU. Using the "One way
		bridge", the Lamden team was the sole seller of TAU on the BSC chain, and sold 7,000,000 TAU
		belonging to Lamden Labs for ~$1.5M USD profit. $450k+ of the proceeds of this sale are
		unaccounted for. <a href="/articles/anatomy-of-a-pump-and-dump">Read More</a>
	</li>
	<li>
		It is clear from investigating transaction logs, that Lamden's priorities are not aligned to the
		success of the project and the TAU token.
	</li>
	<li>
		Transaction logs show the Lamden team has lost considerable sums of money trading altcoins.
	</li>
</ul>

<h1 id="path-ahead">The path ahead ...</h1>

<h3>What can be done to solve matters ?</h3>
Here's a non-exhaustive list of positive outcomes that could improve the state of Lamden
<ul>
	<li>Lamden can publically accept accountability for it's failings over the past 5 years.</li>
	<li>
		Lamden could pledge a reasonable amount of the funds it controls The DAO for use by the
		community to grow the ecosystem & address the responsibilities Lamden wishes to transfer to it.
	</li>
	<li>
		Stuart Farmer could step down as CEO, payed a generous severance package and leave gracefully,
		maintaining his reputation. Lamden could start a new chapter with a well capitalised team who
		share a positive vision for the Lamden protocol, that acknowledges and honors investor value.
	</li>
	<li>
		The Lamden software <a href="https://github.com/Lamden/lamden/blob/master/LICENSE.txt"
			>license</a
		> could be changed to open source to allow builders trapped on the network to create their own instance.
	</li>
	<li>
		There could be some arrangement here which benefits TAU holders, such as new network instances
		being permitted as long as a certain amount of TAU is locked to create the new network.
	</li>
	<li>Lamden can declare itself a failure and return the remaining funds to TAU holders.</li>
</ul>

<h2 id="help">We need your help to keep Lamden honest !</h2>
<ul>
	<li>
		Spead the word about what is happening with Lamden. The more people who know about this and
		speak out, the more likely it is that Lamden will be forced to do right by it's investors.
	</li>
	<li>
		Follow us on twitter <a href="https://twitter.com/lamden_riot">@lamden_riot</a> and retweet our posts.
	</li>
	<li>
		Join us on telegram @ <a href="https://t.me/lamden_riot">https://t.me/lamden_riot</a> and show your
		support !
	</li>
	<li>
		Do you have any of the skills, experience or inclination to could help us achieve our goals of
		turning Lamden a well governed & competitive ? Please get in touch !
	</li>
	<li>
		Key resources to help us achieve our goals : <br /> <br />
		<ul>
			<li>Social media reach</li>
			<li>Engineering Skills</li>
			<li>Marketing experience</li>
			<li>Legal expertise</li>
			<li>The desire to stand up to crypto grifters / bullies</li>
		</ul>
	</li>
</ul>

<h3>
	Thank-you for your time. We hope you will join us in our fight to help Lamden reach it's full potential.
</h3>

<img width=200 src="{lamden_pepe}" alt="pepe holding a lamden logo">

<style>
	li {
		margin-bottom: 1rem;
	}
	h1 {
		margin-bottom: 2rem;
	}
	h2 {
		margin-bottom: 1rem;
	}
	h3 {
		margin-bottom: 0.5rem;
	}

	#toc a {
		margin-right: 1rem;
	}
</style>
