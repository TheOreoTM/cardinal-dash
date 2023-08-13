import { FooterCategory } from '@util/Types';
import Image from 'next/image';
import Link from 'next/link';

const CATAGORIES: FooterCategory[] = [
	{
		title: 'Category',
		paths: [
			{ name: 'Some path', url: '#' },
			{ name: 'Some path', url: '#' },
			{ name: 'Some path', url: '#' },
		],
	},
	{
		title: 'Category 2',
		paths: [
			{ name: 'Some path', url: '#' },
			{ name: 'Some path', url: '#' },
			{ name: 'Some path', url: '#' },
		],
	},
];

export default function Footer() {
	return (
		<footer className='bg-nav text-white py-6 mt-8'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6'>
					<div className='flex justify-center '>
						<Link href='/'>
							<Image src='/logo.png' width={56} height={56} alt='Bot Logo' />
						</Link>
					</div>

					{CATAGORIES.map(({ paths, title }, index) => (
						<div key={`footer-${index}`} className='flex flex-col items-center'>
							<h3 className='text-lg font-semibold mb-2'>{title}</h3>
							<ul>
								{paths.map(({ name, url, jsx }) => {
									if (url) {
										return (
											<li key={`footer-link-${name}`} className='mb-1'>
												<Link href={url}>
													<button className='text-sm'>{name}</button>
												</Link>
											</li>
										);
									}

									return jsx;
								})}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}
