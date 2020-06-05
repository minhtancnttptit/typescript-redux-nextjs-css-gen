import Link from 'next/link';
import styles from './nar-bar.module.css';

const pages = [
	{ href: '/box-shadow', text: 'Box shadow' },
	{ href: '/text-shadow', text: 'Text shadow' },
	{ href: '/border', text: 'Border' },
	{ href: '/transfrom', text: 'Transform' }
]

const NavBar: React.FC = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.headerNav}>
				<div className={styles.menuBody}>
					<ul className={styles.headerMenu}>
						{pages.map(page => (
							<li key={page.href} className={styles.item} >
								<Link href={page.href}>
									<a className={styles.menuLink}>
										{page.text}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	)
};

export default NavBar;
