import './globals.css';
import ReduxProvider from './ReduxProvider';

export const metadata = {
  title: 'Teste Front React WeFit',
  description: 'A description of your app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ReduxProvider>{children}</ReduxProvider> {}
      </body>
    </html>
  );
}
