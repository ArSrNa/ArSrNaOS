import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  Link2Icon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "关于",
    links: [
      {
        icon: <Link2Icon />,
        title: "Ar-Sr-Na 网站",
        href: "https://www.arsrna.cn",
      },
      {
        icon: <Link2Icon />,
        title: "云原生开发CNB",
        href: "https://cnb.cool/arsrna",
      },
      {
        icon: <GithubIcon />,
        title: "Github",
        href: "https://github.com/ArSrNa",
      },
      {
        icon: <Link2Icon />,
        title: "联系我们",
        href: "https://www.arsrna.cn/contact",
      },
    ],
  },
  {
    title: "开发",
    links: [
      {
        title: "强势动力来自CNB",
        href: "https://cnb.cool/arsrna",
      },
      {
        title: "Next.js构建",
        href: "https://nextjs.org/",
      },
      {
        title: "shadcn/ui",
        href: "https://ui.shadcn.com/",
      },
      {
        title: "资源与应用中心",
        href: "https://www.arsrna.cn/app/",
      }
    ],
  },
  {
    title: "更多",
    links: [
      {
        title: "Ar-Sr-Na 博客",
        href: "https://b.arsrna.cn/",
      },
      {
        title: "ESRGANUI 超分辨率",
        href: "https://www.arsrna.cn/app/esrgan/",
      },
      {
        title: "ArRM",
        href: "https://www.arsrna.cn/app/render/",
      },
      {
        title: "音视频",
        href: "https://live.arsrna.cn/",
      },
      {
        title: "AI 中心",
        href: "https://ai.arsrna.cn/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mt-20 flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="mt-10 flex flex-row flex-wrap items-start justify-center gap-x-5 gap-y-2 px-6 xl:px-0">
            {footerSections.map(({ title, links }) => (
              <div key={title} className="w-64 mb-10">
                <h3 className="font-medium">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {links.map(({ title, href, icon }) => (
                    <li key={title} className="flex flex-row gap-x-1.5 items-center">
                      {icon || ''}
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="py-8 flex flex-row items-center justify-center gap-x-5 gap-y-2 px-6 xl:px-0">
            <span className="text-muted-foreground">
              上海绫中信息技术有限公司
            </span>
            <span className="text-muted-foreground">
              <Link href="https://www.arsrna.cn" target="_blank">Powered by Ar-Sr-Na</Link>
            </span>
            <span className="text-muted-foreground">
              <a href='https://beian.miit.gov.cn/' target='_blank'>沪ICP备2023039698号-1</a>
            </span>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
