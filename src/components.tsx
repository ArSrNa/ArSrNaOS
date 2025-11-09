export function CNBLogo({ children, link }: {
    children: React.ReactNode
    link: string
}) {
    return <div onClick={() => window.open(link, "_blank")} className='action-link'>
        <img src="https://docs.cnb.cool/images/logo/svg/LogoColorfulIcon.svg" />
        {children}
    </div>
}
export function CNBIcon({ props }: {
    props?: React.ComponentProps<"img">
}) {
    return <img src="https://docs.cnb.cool/images/logo/svg/LogoColorfulIcon.svg" {...props} style={{
        ...props?.style,
        width: 15
    }} />
}