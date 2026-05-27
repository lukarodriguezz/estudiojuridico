'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-4">Error inesperado</p>
        <h2 className="font-headline text-4xl md:text-6xl text-primary italic mb-6">Algo salió mal</h2>
        <p className="font-body text-secondary mb-10 max-w-sm mx-auto leading-relaxed">
          Por favor intente recargar la página. Si el problema persiste, contáctenos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-primary text-on-primary rounded-sm font-label uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all shadow-lg"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="px-8 py-4 border border-outline text-primary rounded-sm font-label uppercase tracking-[0.2em] text-xs font-bold hover:bg-surface-container transition-all"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </main>
  );
}
