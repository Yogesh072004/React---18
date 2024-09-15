import './NetfixIndexComponent.css'
import NetflixFooter from './NetflixFooter'
import NetflixHeader from './NetflixHeader'
import NetflixMain from './NetflixMain'
import { NetflixRegister } from './NetflixRegister'
export default function NetflixIndex(){
    return(
        <div className="container-fluid">
            <div className='box'>
                <header>
                <NetflixHeader/>
                </header>
                <section className="d-flex justify-content-center align-items-center cent">
                    <main>
                        <NetflixMain/>
                        <NetflixRegister/>
                    </main>
                </section>
                <footer className='m-2 p-2'>
                    <NetflixFooter/>
                </footer>
            </div>
        </div>
    )
}