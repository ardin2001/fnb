export default function WrapperModal({ children, backRef, type }: any) {
    return (
        <div ref={backRef} className="container-modal fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 z-50" style={type==="modalBox"?{display:"none"}:{}}>{children}</div>
    )
}