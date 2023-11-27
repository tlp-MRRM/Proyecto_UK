import styles from "../../../public/css/editInstitute.module.css";
function NavInstitute() {
  return (
    <nav className  ={styles.nav}>
    <div>
      <a href="/" class="material-symbols-outlined"> home </a>
    </div>

    <div>
      <span class="material-symbols-outlined">
        grid_view
        </span>
    </div>
    <div>
      <a href="/iniciar-sesion" class="material-symbols-outlined">
        login
      </a>
    </div>
  </nav>
  )
}

export default NavInstitute