export type Path = {
	name: string;
	url?: string;
	jsx?: JSX.Element;
};

export type FooterCategory = {
	title: string;
	paths: Path[];
};
