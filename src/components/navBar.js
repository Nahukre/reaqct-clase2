export const navBar = () => {
    return (
        <><div className="encabezado__logo"><img src="img/colchon.png" class="encabezado__logo" /></div><div className="encabezado__nombre">Colchón blue</div><div className="encabezado__subnombre">finanzas personales</div><nav>
            <ul className="menu__items--font">
                <li className="item"><a href="#">Home</a></li>
                <li className="item"><a href="Page/Inversiones.html">Inversiones</a></li>
                <li className="item"><a href="Page/Contacto.html">Contacto</a></li>
            </ul>
        </nav></>
    );
}