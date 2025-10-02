export default function Footer() {
  return (
    <footer className="h-14 flex items-center justify-center text-sm text-white/70 bg-black/40 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 w-full flex items-center justify-between">
        <span>© {new Date().getFullYear()} Serviceleverandøren AS</span>
        <span className="hidden sm:inline">Bygg • Ventilasjon • Smarte løsninger</span>
      </div>
    </footer>
  );
}
