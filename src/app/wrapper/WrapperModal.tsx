export default function WrapperModal({ children, filterRef }: any) {
    return (
        <div ref={filterRef} className="container-modal fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-40 z-50" style={{ display: "none" }}>{children}</div>
    )
}