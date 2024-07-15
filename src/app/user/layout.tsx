export default function layout({ children, detail }: {
    children: React.ReactNode,
    detail: React.ReactNode
}) {
    return (
        <>
            {children}
            {detail}
        </>
    )
}