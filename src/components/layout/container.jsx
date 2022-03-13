import Header from './header';


export default function Container({children}) {
  return (
    <div>
        <Header />
        <main className="container">
            {children}
        </main>
    </div>
  )
}