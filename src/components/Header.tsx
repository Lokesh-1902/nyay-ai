import { Scale } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center">
            <img 
              src="/favicon.ico" 
              alt="Indian Legal Case Analysis Logo" 
              className="h-8 w-8"
            />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-foreground">
              Indian Legal Case Analysis
            </h1>
            <p className="text-sm text-muted-foreground">
              AI-Powered Legal Analysis for Indian Law
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
