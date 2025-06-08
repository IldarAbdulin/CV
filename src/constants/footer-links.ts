export type IFooterLinks = {
  id: number;
  href: string;
  className: string;
  title: string;
};

export const footerLinks: IFooterLinks[] = [
  {
    id: 1,
    href: `https://github.com/IldarAbdulin`,
    className: `text-[18px] outline-none duration-200 hover:text-purple-200`,
    title: 'GitHub',
  },
  {
    id: 2,
    href: `https://gitlab.com/IldarAbdulin`,
    className: `text-[18px] outline-none duration-200 hover:text-orange-200`,
    title: 'GitLab',
  },
  {
    id: 3,
    href: `https://t.me/RdQeWaEd`,
    className: `text-[18px] outline-none duration-200 hover:text-blue-200`,
    title: 'Telegram',
  },
];
