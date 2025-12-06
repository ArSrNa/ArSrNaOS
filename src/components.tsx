export function CNBLogo({ children, link }: {
    children: React.ReactNode
    link: string
}) {
    return <div onClick={() => window.open(link, "_blank")} className='action-link'>
        <img src="https://docs.cnb.cool/images/logo/320/Symbol-Color.png" />
        {children}
    </div>
}
export function CNBIcon({ props }: {
    props?: React.ComponentProps<"img">
}) {
    return <img src="https://docs.cnb.cool/images/logo/320/Symbol-Color.png" {...props} style={{
        ...props?.style,
        width: 20,
    }} />
}