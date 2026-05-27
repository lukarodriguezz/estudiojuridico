export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-4">Error 404</p>
        <h1 className="font-headline text-5xl md:text-7xl text-primary italic mb-6">Página no encontrada</h1>
        <p className="font-body text-secondary mb-10 max-w-sm mx-auto leading-relaxed">
          La página que busca no existe o fue movida.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-primary text-on-primary rounded-sm font-label uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all shadow-lg"
        >
          Volver al Inicio
        </a>
      </div>
    </main>
  );
}
