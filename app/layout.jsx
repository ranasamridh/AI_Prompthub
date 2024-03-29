//things added here are present in all routes
import "@styles/globals.css";        //so that every route inherits this css style   

import Nav from  "@components/Nav.jsx";
import Provider from "@components/Provider";

export const metadata = {
    title: "AI_PromptHub",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <head>
            <link rel="icon" href="/internet.png" sizes="any" />
        </head> 
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  );
}

export default RootLayout;