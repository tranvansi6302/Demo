import Header from './components/Header'

export default function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div style={{ marginTop: '50px' }} className='container'>
                {children}
            </div>
        </div>
    )
}
