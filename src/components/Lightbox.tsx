interface LightboxProps {
  src: string | null
  onClose: () => void
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  if (!src) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6" onClick={onClose}>
      <img src={src} alt="" className="max-h-[85vh] max-w-[90vw] border-2 border-accent object-contain" />
      <button className="absolute right-6 top-6 font-mono text-2xl text-secondary" onClick={onClose} aria-label="Close">
        [x]
      </button>
    </div>
  )
}
