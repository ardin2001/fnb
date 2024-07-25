export default function Layout({
    children,
    resume,
    analytics,
}: any) {
    console.log("dashboard layout", resume, analytics)
    return (
        <>
            {children}
            {resume}
            {analytics}
        </>
    )
}